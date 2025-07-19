<script lang="ts">
    export let partners = [];

    let showModal = false;
    let form = {
        title: '',
        location: '',
        description: '',
        schedule: '',
        address: '',
        organizer: '',
        contact: '',
        website: '',
        maxParticipants: 0
    };
    let imageFile: File;
    let imagePreview = '';

    function openModal()  { showModal = true; }
    function closeModal() { showModal = false; resetForm(); }

    function resetForm() {
        form = { title:'', location:'', description:'', schedule:'',
            address:'', organizer:'', contact:'', website:'', maxParticipants:0 };
        imagePreview = '';
        imageFile = null!;
    }

    async function handleImage(e: Event) {
        const target = e.target as HTMLInputElement;
        imageFile = target.files![0];
        imagePreview = URL.createObjectURL(imageFile);
    }

    async function submit() {
        if (!imageFile) return alert('Sube una imagen');

        const fd = new FormData();
        fd.append('file', imageFile);
        const { url: imageUrl } = await (await fetch('/api/upload', { method:'POST', body:fd })).json();

        const res = await fetch('/api/activities/request', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify({ ...form, imageUrl })
        });

        if (res.ok) {
            alert('Solicitud enviada y en revisión');
            closeModal();
        } else {
            alert(await res.text());
        }
    }
</script>

<div class="work-with-container">
    <h2 class="section-title">¿Con quienes trabajamos?</h2>
    <div class="partners-container">
        {#each partners as partner}
            <div class="partner-card">
                <img src={partner.imageUrl} alt={partner.name} class="partner-logo" />
                <h3 class="partner-name">{partner.name}</h3>
            </div>
        {/each}
    </div>
    <div class="call-to-action">
        <img src="vivemas_logo.webp" alt="Vive+" class="cta-logo" />
        <div class="call-to-action-text">
            <p class="cta-text">Puedes trabajar con nosotros y publicar tus actividades</p>
            <button class="cta-button" on:click={openModal}>Hacerme socio</button>
        </div>
    </div>


    {#if showModal}
        <div class="modal-overlay" on:click|self={closeModal}>
            <div class="modal">
                <h3>Publicar nueva actividad</h3>
                <form on:submit|preventDefault={submit}>
                    <input bind:value={form.title} placeholder="Título" required />
                    <input bind:value={form.location} placeholder="Ubicación" required />
                    <textarea bind:value={form.description} placeholder="Descripción" required></textarea>
                    <input type="datetime-local" bind:value={form.schedule} required />
                    <input bind:value={form.address} placeholder="Dirección" required />
                    <input bind:value={form.organizer} placeholder="Organizador" required />
                    <input bind:value={form.contact} placeholder="Contacto" required />
                    <input bind:value={form.website} placeholder="Sitio web" required />
                    <input type="number" min="1" bind:value={form.maxParticipants} placeholder="Máx. participantes" required />
                    <input type="file" accept="image/*" on:change={handleImage} required />
                    {#if imagePreview}
                        <img src={imagePreview} alt="preview" class="preview" />
                    {/if}
                    <div class="actions">
                        <button type="submit">Enviar</button>
                        <button type="button" on:click={closeModal}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    {/if}
</div>

<style>
    .work-with-container {
        background: linear-gradient(to bottom, #E32D40, #7D1923);
        padding: 30px;
        border-radius: 10px;
        margin: 20px 3%;
    }

    .section-title {
        color: white;
        text-align: center;
        margin-bottom: 20px;
    }

    .partners-container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }

    .partner-card {
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        margin: 10px;
        width: 200px;
        text-align: center;
    }

    .partner-logo {
        max-width: 150px;
        max-height: 150px;
        margin-bottom: 10px;
    }

    .partner-name {
        color: #333;
        margin: 0;
    }

    .call-to-action {
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        margin: 0 auto;
        width: 80%;
        max-width: 600px;
    }

    .call-to-action-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .cta-logo {
        width: 200px;
        height: auto;
        margin-bottom: 10px;
    }

    .cta-text {
        color: #333;
        font-family: 'Jersey 25',serif;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
    }

    .cta-button {
        background-color: #B0D9FF;
        color: #333;
        padding: 10px 20px;
        border-radius: 20px;
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.3s;
    }

    .cta-button:hover {
        background-color: #99C4FF;
    }
    .modal-overlay {
        position: fixed; inset:0;
        background: rgba(0,0,0,.6);
        display: grid; place-items:center;
        z-index: 9999;
    }
    .modal {
        background: white;
        padding: 30px;
        border-radius: 10px;
        width: 90%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
    }
    .modal h3 { margin-top:0; }
    .modal form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .modal input, .modal textarea { padding: 8px; font-size: 1rem; }
    .preview { max-width: 100%; margin-top: 8px; border-radius: 4px; }
    .actions { display:flex; gap:10px; justify-content:flex-end; margin-top:15px; }
</style>
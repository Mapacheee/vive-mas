<script>
    export let partners = [];
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
            <a href="/join" class="cta-button">HACERME SOCIO</a>
        </div>
    </div>
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
</style>
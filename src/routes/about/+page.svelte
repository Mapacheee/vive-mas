<script>
    import WorkWithUs from "$lib/components/WorkWithUs.svelte";
</script>

<main>
    <div class="about-image">
        <img src="about/about_image.webp" alt="imagen"/>
        <div class="overlay">
            <div class="overlay-text">
                <h1>Sobre nosotros</h1>
            </div>
        </div>
    </div>

    <div class="goals-container">
        <h3>Objetivos de Vive+</h3>
        <div class="goals-container-text">
            <p>Buscamos acercarte de manera sencilla una gran variedad de</p>
            <p>talleres, charlas, bailes y clases creadas por organizaciones</p>
            <p>alrededor de la quinta región.</p>
            <br>
            <p>Semanalmente actualizaremos el repertorio de actividades </p>
            <p>disponibles que podrás agendar para llenar tu calendario con tus</p>
            <p>gustos e intereses.</p>
        </div>
    </div>

    <WorkWithUs partners={[
        { name: "SENAMA", imageUrl: "about/cards/senama.webp" },
        { name: "Geropolis", imageUrl: "about/cards/geopolis.webp" },
        { name: "Universidad de Valparaíso", imageUrl: "about/cards/uv.webp" }
    ]} />
</main>

<style>
    .about-image {
        position: relative;
        width: 100%;
        height: 400px;
        overflow: hidden;
    }

    .about-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.8);
    }

    .overlay {
        align-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
    }

    .overlay-text {
        color: white;
        text-align: center;
    }

    .overlay h1 {
        background: linear-gradient(90deg, #ffc5b3, #ffe4db);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
        font-size: 2.5rem;
        margin-bottom: 10px;
    }

    .goals-container {
        font-weight: bold;
        font-size: 1.5rem;
        margin: 40px 3%;
    }

    .goals-container h3 {
        color: #E47C5D;
    }

    .goals-container-text {
        background: #D9D9D9;
        color: #152B3C;
        padding: 15px;
        border-radius: 8px;
        margin-top: 20px;
    }

    .goals-container-text p {
        text-align: center;
        margin: 10px 0;
        line-height: 1.6;
    }
</style>
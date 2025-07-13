<main>
    <div class="home-image">
        <img src="home/home_image.webp" alt="imagen">
        <div class="overlay">
            <div class="overlay-text">
                <h1>
                    Te damos la bienvenida a Vive+.
                </h1>
                <h2>
                    Un espacio para el bienestar.
                </h2>
                <a href="/activities" class="cta-button">Ver actividades</a>
            </div>
        </div>
    </div>

    <div class="vive-container">
        <h3>¿Qué es Vive+?</h3>
        <div class="vive-container-text">
            <p>Somos una organización sin fines de lucro dedicada a mejorar la calidad de vida de las personas<p/>
            <p> a través de actividades recreativas y culturales. Nos enfocamos en ofrecer una amplia variedad</p>
            <p>e actividades que fomentan la sociabilización y entretenimiento.</p>
        </div>
    </div>

    <div class="talleres-container">
        <div class="talleres-container-text">
            <p>¡Desde talleres de arte</p>
            <p>hasta clases de baile!</p>
            <p>Para todos los gustos.</p>
        </div>
        <img src="home/home_image2.webp" alt="Imagen no encontrada">
    </div>

    <div class="actividades-container">
        <h3>Actividades destacadas de la semana</h3>
        <div class="actividades-container-carrusel">
            <p>Carrusel en WIP</p>
        </div>
    </div>
</main>

<style>
    .home-image {
        position: relative;
        width: 100%;
        height: 400px;
        overflow: hidden;
    }

    .home-image img {

        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.8);
    }

    .overlay {
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

        /*color: #580eff;*/
        font-size: 2.5rem;
        margin-bottom: 10px;
    }

    .overlay h2 {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .cta-button {
        background-color: white;
        color: #333;
        padding: 12px 24px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: bold;
        transition: transform 0.3s ease;
    }

    .cta-button:hover {
        transform: scale(1.05);
    }

    .vive-container {
        font-weight: bold;
        font-size: 1.5rem;

        h3 {
            margin-left: 3%;
            color: #E47C5D;
        }
    }

    .vive-container-text {
        background: #D9D9D9;
        color: #152B3C;
        padding: 5px;

        p {
            text-align: center;
            margin: 0;
            line-height: 2rem;

        }
    }

    .talleres-container {
        display: flex;
        margin-top: 3%;
        img {
            border-radius: 20px;
            margin-left: 15%;
            height: 220px;
            width: auto;
        }
    }
    .talleres-container-text {
        border-radius: 10px;
        padding: 8px;
        margin-top: 3%;
        margin-left: 20%;
        margin-bottom: 5%;
        color: #152B3C;
        line-height: 0.5rem;
        font-weight: bold;
        font-size: 1.5rem;
        background: #D9D9D9;
    }

    .actividades-container {
        font-size: 1.5rem;
        font-weight: bold;
        h3 {
            margin-left: 3%;
            color: #E47C5D;
        }
    }

    .actividades-container-carrusel {
        margin-left: 40%;
    }
</style>
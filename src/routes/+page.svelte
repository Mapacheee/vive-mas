<main>
    <div class="home-image">
        <img src="home/image_home.webp" alt="imagen">
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
        align-items: flex-start;
        padding: 20px;
        box-sizing: border-box;
    }
    .overlay-text {
        color: white;
        text-align: center;
    }

    .overlay h1 {
        color: white;
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
</style>
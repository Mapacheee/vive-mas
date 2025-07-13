<script lang="ts">
    import { onMount } from 'svelte';
    import type { Activity } from '$lib/types';

    let activities: Activity[] = [];
    let featuredActivities: Activity[] = [];

    onMount(async () => {
        const response = await fetch('/src/lib/activities.json');
        activities = await response.json();
        featuredActivities = activities.slice(0, 3);
    });
</script>

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
            <p>Somos una organización sin fines de lucro dedicada a mejorar la calidad de vida de las personas</p>
            <p>a través de actividades recreativas y culturales. Nos enfocamos en ofrecer una amplia variedad</p>
            <p>e actividades que fomentan la sociabilización y entretenimiento.</p>
        </div>
    </div>

    <div class="talleres-container">
        <div class="talleres-info">
            <h2>¡Desde talleres de arte hasta clases de baile!</h2>
            <p>Para todos los gustos.</p>
            <a href="/activities" class="cta-button">Explorar actividades</a>
        </div>
        <img src="home/home_image2.webp" alt="Imagen no encontrada">
    </div>

    <div class="actividades-container">
        <h3>Actividades destacadas de la semana</h3>
        <div class="actividades-carrusel">
            {#each featuredActivities as activity}
                <div class="actividad-tarjeta">
                    <img src={activity.imageUrl} alt={activity.title} class="actividad-imagen" />
                    <h2>{activity.title}</h2>
                    <a href={`/activities/${activity.id}`} class="cta-button">Ver más</a>
                </div>
            {/each}
        </div>
    </div>
</main>

<style>
    :global(body) {
        font-family: 'Inter', serif;
    }

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
        display: inline-block;
    }

    .cta-button:hover {
        transform: scale(1.05);
    }

    .vive-container {
        margin: 40px 3%;
    }

    .vive-container h3 {
        color: #E47C5D;
        font-size: 2rem;
        margin-bottom: 15px;
    }

    .vive-container-text {
        background: #D9D9D9;
        color: #152B3C;
        text-align: center;
        font-family: 'Inter', serif;
        font-size: 1.4rem;
        font-weight: bold;
        padding: 15px;
        border-radius: 8px;
        line-height: 1.2;
    }

    .talleres-container {
        display: flex;
        background: linear-gradient(to right,
        rgba(236, 191, 71, 1) 0%,
        rgba(236, 191, 71, 0.44) 100%
        );
        border-radius: 15px;
        align-items: center;
        margin: 40px 3%;
        gap: 30px;
    }

    .talleres-info {
        margin-left: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .talleres-info h2 {
        color: #E47C5D;
        font-size: 2rem;
        margin-bottom: 10px;
    }

    .talleres-info p {
        font-size: 1.2rem;
        margin-bottom: 20px;
    }

    .talleres-container img {
        border-radius: 20px;
        margin-left: 22%;
        height: 300px;
        width: auto;
    }

    .actividades-container {
        margin: 40px 3%;
    }

    .actividades-container h3 {
        color: #E47C5D;
        font-size: 2rem;
        margin-bottom: 20px;
    }

    .actividades-carrusel {
        display: flex;
        gap: 20px;
        overflow-x: auto;
        padding: 10px 0;
    }

    .actividad-tarjeta {
        min-width: 300px;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        flex: 1;
        max-width: 300px;
    }

    .actividad-imagen {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    .actividad-tarjeta h2 {
        padding: 15px;
        text-align: center;
        margin: 0;
    }

    .actividad-tarjeta .cta-button {
        margin: 0 15px 15px;
        padding: 8px 16px;
        font-size: 0.9rem;
    }
</style>
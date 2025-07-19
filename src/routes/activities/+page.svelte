<script lang="ts">
    import { onMount } from 'svelte';
    import type { Activity } from '$lib/types';

    let activities: Activity[] = [];

    onMount(async () => {
        const response = await fetch('/src/lib/activities.json');
        activities = await response.json();
    });
</script>

<main>
    <div class="activities-image">
        <img src="activities/activities_image.webp" alt="imagen"/>
        <div class="overlay">
            <div class="overlay-text">
                <h1>Actividades</h1>
            </div>
        </div>
    </div>

    <div class="activities-container">
        {#each activities as activity}
            <div class="activity-card">
                <img src={activity.imageUrl} alt={activity.title} class="activity-image" />
                <h2>{activity.title}</h2>
                <p>{activity.location}</p>
                <a href={`/activities/${activity.id}`} class="activity-link">Ver detalles</a>
            </div>
        {/each}
    </div>
</main>

<style>
    .activities-image {
        position: relative;
        width: 100%;
        height: 400px;
        overflow: hidden;
    }

    .activities-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.6);
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
        background: linear-gradient(90deg, white, white);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
        font-size: 4rem;
        margin-bottom: 10px;
    }

    .activities-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .activity-card {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        background-color: white;
    }

    .activity-image {
        width: 100%;
        height: 180px;
        object-fit: cover;
    }

    .activity-card h2 {
        margin: 10px 0 5px;
        padding: 0 10px;
    }

    .activity-card p {
        margin: 5px 0;
        padding: 0 10px;
        color: #666;
    }

    .activity-link {
        display: inline-block;
        margin: 10px;
        padding: 8px 16px;
        background-color: #59B390;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        text-align: center;
    }
</style>
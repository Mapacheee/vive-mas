<script lang="ts">
    import { onMount } from 'svelte';
    import type { Activity } from '$lib/types';

    let activities: Activity[] = [];

    onMount(async () => {
        const response = await fetch('/src/lib/activities.json');
        activities = await response.json();
    });
</script>

<h1>Actividades</h1>

<div class="activities-grid">
    {#each activities as activity}
        <div class="activity-card">
            <img src={activity.imageUrl} alt={activity.title} />
            <h2>{activity.title}</h2>
            <p>{activity.location}</p>
            <a href={`/activities/${activity.id}`}>Ver detalles</a>
        </div>
    {/each}
</div>

<style>
    .activities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    .activity-card {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .activity-card img {
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

    .activity-card a {
        display: inline-block;
        margin: 10px;
        padding: 8px 16px;
        background-color: #59B390;
        color: white;
        text-decoration: none;
        border-radius: 4px;
    }
</style>
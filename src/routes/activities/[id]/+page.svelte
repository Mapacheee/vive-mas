<script lang="ts">
    import type { Activity } from '$lib/types';

    export let data;
    let activity: Activity | null = data.props.activity || null;
</script>

{#if activity}
    <div class="activity-detail">
        <img src={activity.imageUrl} alt={activity.title} class="activity-image" />
        <h1>{activity.title}</h1>

        <div class="activity-info">
            <div class="info-section">
                <h2>Descripción</h2>
                <p>{activity.description}</p>
            </div>

            <div class="info-section">
                <h2>Horario</h2>
                <p>{activity.schedule}</p>
            </div>

            <div class="info-section">
                <h2>Dirección</h2>
                <p>{activity.address}</p>
            </div>

            <div class="info-section">
                <h2>Lo organiza</h2>
                <p>{activity.organizer}</p>
            </div>

            <div class="info-section">
                <h2>Contacto e info</h2>
                <p>{activity.contact}</p>
                <p><a href={activity.website}>{activity.website}</a></p>
            </div>
        </div>

        <a href="/activities" class="back-button">Volver a actividades</a>
    </div>
{:else}
    <p>Actividad no encontrada.</p>
{/if}

<style>
    .activity-detail {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
    }

    .activity-image {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 8px;
    }

    .activity-info {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        margin-top: 20px;
    }

    .info-section {
        margin-bottom: 15px;
    }

    .info-section h2 {
        margin-top: 0;
        color: #59B390;
    }

    .back-button {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #59B390;
        color: white;
        text-decoration: none;
        border-radius: 4px;
    }
</style>
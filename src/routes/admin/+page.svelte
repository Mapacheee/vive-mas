<script lang="ts">
    import { onMount } from 'svelte';

    let pendings: any[] = [];
    let activities: any[] = [];

    onMount(async () => {
        pendings      = await (await fetch('/api/admin/pending')).json();
        activities    = await (await fetch('/api/admin/activities')).json();
    });

    async function approve(id: number, ok: boolean) {
        await fetch('/api/admin/approve', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, approve: ok })
        });
        pendings = pendings.filter(p => p.id !== id);
        pendings   = await (await fetch('/api/admin/pending')).json();
        activities = await (await fetch('/api/admin/activities')).json();
    }

    async function deleteActivity(id: number) {
        await fetch(`/api/admin/activities/${id}`, { method: 'DELETE' });
        activities = activities.filter(a => a.id !== id);
    }
</script>

<div class="container">
    <h1>Admin – Actividades pendientes</h1>
    <div class="main">
        {#each pendings as p}
            <div class="card">
                <h2>{p.title}</h2>
                <img src={p.imageUrl} alt="" width="200" />
                <p>{p.description}</p>
                <button on:click={() => approve(p.id, true)}>Aprobar</button>
                <button on:click={() => approve(p.id, false)}>Rechazar</button>
            </div>
        {/each}
    </div>

    <h1>Actividades publicadas</h1>
    <div class="main">
        {#each activities as a}
            <div class="card">
                <h2>{a.title}</h2>
                <img src={a.imageUrl} alt="" width="200" />
                <p>{a.description}</p>
                <button on:click={() => deleteActivity(a.id)}>🗑️ Eliminar</button>
            </div>
        {/each}
    </div>
</div>

<style>
    .container {
        margin-left: 5%;
    }
    h1 {
        color: #E47C5D;
    }
    .main {
        display: flex;
        gap: 50px;
        color: #152B3C;
    }

    .card {
        padding: 20px;
        border-radius: 10px;
        background: #e8fff6;
    }
</style>
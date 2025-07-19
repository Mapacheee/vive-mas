<script lang="ts">
    import { onMount } from 'svelte';
    let pendings: any[] = [];

    onMount(async () => {
        pendings = await (await fetch('/api/admin/pending')).json();
    });

    async function approve(id: number, ok: boolean) {
        await fetch('/api/admin/approve', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, approve: ok })
        });
        pendings = pendings.filter(p => p.id !== id);
    }
</script>

<h1>Admin – Actividades pendientes</h1>
{#each pendings as p}
    <div class="card">
        <h2>{p.title}</h2>
        <img src={p.imageUrl} alt="" width="200" />
        <p>{p.description}</p>
        <button on:click={() => approve(p.id, true)}>Aprobar</button>
        <button on:click={() => approve(p.id, false)}>Rechazar</button>
    </div>
{/each}
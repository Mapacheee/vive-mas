<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <title>Vive+ | Las mejores actividades</title>
</svelte:head>

<div class="page-container">
    <Navbar />
    <main>
        <slot />
    </main>
    <Footer />
</div>

<style>
    :global(body) {
        background: linear-gradient(180deg, #59B390, #cce8dd);
        margin: 0;
        font-family: 'Inter', serif;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow-x: hidden;
        position: relative;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .page-container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    main {
        flex-grow: 1;
    }

</style>
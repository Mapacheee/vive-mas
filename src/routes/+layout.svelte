<script>
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
        background: linear-gradient(90deg, #59B390 100%, rgba(89, 179, 144, 0.44));
        margin: 0;
        font-family: 'Inter', serif;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
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
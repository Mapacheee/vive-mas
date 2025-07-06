<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import { onMount } from 'svelte';

    onMount(() => {
        document.body.classList.add('body-bg');
    });
</script>

<svelte:head>
    <title>Vive+ | Las mejores actividades</title>
</svelte:head>

<main>
    <Navbar></Navbar>

    <slot />
</main>

<style>
    :global(body) {
        background: linear-gradient(90deg, #59B390 100%, rgba(89, 179, 144, 0.44));
        margin: 0;
        padding: 0;
        min-height: 100vh;
        font-family: 'Inter', serif;
    }

    main {
        min-height: 100vh;
    }
</style>
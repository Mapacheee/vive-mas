<script>
import Navbar from "$lib/components/Navbar.svelte";
</script>

<svelte:head>
    <title>Vive+ | Las mejores actividades</title>
</svelte:head>
<main>
    <Navbar></Navbar>

    <slot />
</main>

<style>
    main {
        background: linear-gradient(90deg, #59B390 100%, rgba(89, 179, 144, 0.44));
    }
</style>

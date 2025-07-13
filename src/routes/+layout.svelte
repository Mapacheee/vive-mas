<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { onMount } from 'svelte';
    let canvas: HTMLCanvasElement | null = null;
    let particles: { x: number; y: number; size: number;
        speedX: number; speedY: number; opacity: number }[] = [];

    function createParticles() {
        for (let i = 0; i < 200; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 3 + 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 0.5 + 0.1,
                opacity: Math.random() * 0.3 + 0.1
            });
        }
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(181, 181, 226, ${particle.opacity})`;
            ctx.fill();

            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x > window.innerWidth) particle.x = 0;
            if (particle.y > window.innerHeight) {
                particle.y = 0;
                particle.x = Math.random() * window.innerWidth;
            }

            if (particle.x < 0) particle.x = window.innerWidth;
        });
    }

    function handleResize() {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    onMount(() => {
        createParticles();
        animateParticles();
    });

    //window.addEventListener('resize', handleResize);
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

<canvas bind:this={canvas}></canvas>

<style>
    :global(body) {
        background: linear-gradient(45deg, #59B390, #67dcaf, #33d898, #59B390);
        background-size: 400% 400%;
        animation: gradient 5s ease infinite;
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

    canvas {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
</style>
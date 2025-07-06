<script>
    import {setActiveLink} from "$lib/actions.js";
    import {activeLink} from "$lib/stores.js";
</script>

<nav>
    <div class="logo-container">
        <img src="vivemas_logo.webp" alt="Logo">
        <span>Vive+</span>
    </div>

    <div class="vertical-line"></div>

    <div class="nav-links">
        <a href="/" on:click={() => setActiveLink('Inicio')} class:active={$activeLink === 'Inicio'}>Inicio</a>
        <a href="/activities" on:click={() => setActiveLink('Activities')} class:active={$activeLink === 'Activities'}>Actividades</a>
        <a href="/about" on:click={() => setActiveLink('About')} class:active={$activeLink === 'About'}>Sobre nosotros</a>
    </div>
</nav>

<style>
    nav {
        display: flex;
        align-items: center;
        padding: 1rem 2%;
    }

    .logo-container {
        display: flex;
        align-items: center;
        span {
            margin-left: -3%;
            font-size: 230%;
            color: #F0DDAA;
            font-weight: bold;
        }
    }

    .logo-container img {
        width: 15%;
        height: auto;
        margin-right: 10px;
    }

    .vertical-line {
        width: 1.7px;
        height: 50px;
        background-color: white;
        margin-left: -68%;
    }

    .nav-links {
        display: flex;
        gap: 5rem;
        text-decoration: none;
        margin-left: 20%;
    }

    .nav-links a:not(.active) {
        position: relative;
        text-decoration: none;
        font-size: 140%;
        color: #F0DDAA;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    .nav-links a:not(.active)::after {
        content: '';
        color: #F0DDAA;
        font-weight: bold;
        position: absolute;
        font-size: 140%;
        width: 0;
        height: 2.5px;
        text-decoration: none;
        bottom: 0;
        left: 0;
        background-color: #E32D40;
        transition: width 0.3s ease;
    }

    .nav-links a:not(.active):hover::after {
        width: 100%;
    }

    .nav-links a.active {
        border-bottom: 3px solid #E32D40;
        color: #F0DDAA;
        font-size: 140%;
        font-weight: bold;
        text-decoration: none;
    }
</style>
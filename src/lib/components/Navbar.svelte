<nav>
    <div class="logo-container">
        <img src="vivemas_logo.webp" alt="Logo">
        <span>Vive+</span>
    </div>

    <div class="vertical-line"></div>

    <div class="nav-links">
        <a href="/" class="active">Inicio</a>
        <a href="/activities">Actividades</a>
        <a href="/about">Sobre nosotros</a>
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
    }

    .logo-container img {
        width: 40px; /* Tamaño del logo */
        height: 40px;
        margin-right: 10px;
    }

    .vertical-line {
        width: 1px;
        height: 24px;
        background-color: white; /* Color de la línea vertical */
        margin: 0 15px;
    }

    .nav-links {
        display: flex;
        gap: 2rem; /* Espacio entre los enlaces */
        margin-left: auto; /* Empuja los enlaces hacia la derecha */
    }

    .nav-links a {
        color: #F0DDAA; /* Color de las letras */
        text-decoration: none;
        font-weight: 500;
        font-size: 16px;
        padding-bottom: 5px;
    }

    .nav-links a.active {
        border-bottom: 2px solid #F0DDAA; /* Subrayado para el link activo */
    }
</style>
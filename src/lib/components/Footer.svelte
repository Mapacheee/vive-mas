<script>
    export let contactInfo = {
        phone: '+56968161840',
        email: 'Vive+@gmail.com'
    };

    export let addressInfo = {
        address: 'Calle General Cruz No 222',
        mapUrl: 'https://maps.app.goo.gl/GkSPb29FhEaQw6SX8'
    };
</script>

<footer>
    <div class="footer-content">
        <div class="contact-section">
            <h3>Contáctanos:</h3>
            <p>TELÉFONO: {contactInfo.phone}</p>
            <p>CORREO: {contactInfo.email}</p>
        </div>
        <div class="location-section">
            <h3>Ubicación:</h3>
            <p>{addressInfo.address}</p>
            <p><a href={addressInfo.mapUrl} target="_blank" rel="noopener noreferrer">Ver en Mapa</a></p>
        </div>
    </div>
</footer>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Jersey&display=swap');

    footer {
        background: linear-gradient(to right, #E32D40, #7D1923);
        padding: 20px 0;
        color: white;
        font-family: 'Jersey', cursive;
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .contact-section, .location-section {
        flex: 1;
    }

    h3 {
        margin-top: 0;
        font-size: 20px;
        margin-bottom: 10px;
    }

    p {
        margin: 5px 0;
        font-size: 16px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
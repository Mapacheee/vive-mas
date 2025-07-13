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
            <p>Teléfono: {contactInfo.phone}</p>
            <p>Correo: {contactInfo.email}</p>
        </div>
        <div class="location-section">
            <h3>Ubicación:</h3>
            <p>{addressInfo.address}</p>
            <p><a href={addressInfo.mapUrl} target="_blank" rel="noopener noreferrer">Ver en Mapa</a></p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d836.1005593634042!2d-71.613353!3d-33.0458756
        !3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e10012d12bc3%3A0xdd137b00312d3b8d!2sUV%20Facultad%20Ingenier%C3%ADa!5
        e0!3m2!1ses-419!2scl!4v1752369045232!5m2!1ses-419!2scl" width="auto" height="100" style="border:0;"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
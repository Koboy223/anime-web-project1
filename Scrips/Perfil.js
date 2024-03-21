function toggleModoNocturno() {
    document.body.classList.toggle('modo-nocturno');

    // Guardar el estado del modo nocturno en una cookie
    var modoNocturno = document.body.classList.contains('modo-nocturno');
    document.cookie = `modoNocturno=${modoNocturno}`;
}

// Aplicar el modo nocturno guardado en la cookie al cargar la página
window.addEventListener('load', function() {
    var cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
    }, {});

    if (cookies.modoNocturno === 'true') {
        document.body.classList.add('modo-nocturno');
    }
});
fetch('menu.html')
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  });
  //FUNCION DE EL MODO NOCTURNO
 // Función para cambiar el modo nocturno
function cambiarModoNocturno() {
    var modoNocturno = document.body.classList.toggle('modo-nocturno');
    document.cookie = 'modoNocturno=' + modoNocturno + '; path=/';
    // Redirigir a la misma página pero con el parámetro de modo nocturno
    window.location.href = window.location.pathname + '?modoNocturno=' + modoNocturno;
}

// Verificar si el modo nocturno está activado al cargar la página
window.addEventListener('DOMContentLoaded', function () {
    var modoNocturno = document.cookie.replace(/(?:(?:^|.*;\s*)modoNocturno\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (modoNocturno === 'true') {
        document.body.classList.add('modo-nocturno');
    }
});

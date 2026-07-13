// Menú de navegación en pantallas pequeñas
(function () {
  var boton = document.querySelector('.nav__boton');
  var lista = document.querySelector('.nav__lista');
  if (!boton || !lista) return;

  boton.addEventListener('click', function () {
    var abierta = lista.classList.toggle('abierta');
    boton.setAttribute('aria-expanded', abierta ? 'true' : 'false');
  });

  document.addEventListener('click', function (e) {
    if (!lista.classList.contains('abierta')) return;
    if (!e.target.closest('.nav')) {
      lista.classList.remove('abierta');
      boton.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lista.classList.contains('abierta')) {
      lista.classList.remove('abierta');
      boton.setAttribute('aria-expanded', 'false');
      boton.focus();
    }
  });
})();

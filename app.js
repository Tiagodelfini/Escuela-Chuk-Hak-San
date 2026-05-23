// 1. Buscamos los elementos del menú en la página usando sus IDs
const menuLateral = document.getElementById('menu-lateral');
const botonAbrir = document.getElementById('abrir-menu');
const botonCerrar = document.getElementById('cerrar-menu');
const enlacesMenu = document.querySelectorAll('.menu-lateral ul li a');

// 2. Cuando el usuario hace clic en las 3 líneas, añadimos la clase 'activo' (abre el menú)
botonAbrir.addEventListener('click', () => {
    menuLateral.classList.add('activo');
});

// 3. Cuando el usuario hace clic en la '×', removemos la clase 'activo' (cierra el menú)
botonCerrar.addEventListener('click', () => {
    menuLateral.classList.remove('activo');
});

// 4. Para mayor comodidad: si el usuario hace clic en cualquier opción, el menú se cierra automáticamente
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menuLateral.classList.remove('activo');
    });
});

// Nueva función para abrir y cerrar preguntas
  function toggleFaq(btn) {
    const item = btn.parentElement;
    item.classList.toggle('abierto');
  }
  
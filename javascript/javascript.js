// Función para mostrar el título del botón
function btn_title_show(title) {
    // Obtiene el elemento del botón por su ID
    var btnTitle = document.getElementById('btn_title');
    // Establece el contenido del botón al título proporcionado
    btnTitle.innerHTML = title;
    // Agrega la clase 'show' para mostrar el botón
    btnTitle.classList.add('show');
}

// Función para ocultar el título del botón
function btn_title_hide() {
    // Obtiene el elemento del botón por su ID
    var btnTitle = document.getElementById('btn_title');
    // Limpia el contenido del botón
    btnTitle.innerHTML = '';
    // Elimina la clase 'show' para ocultar el botón
    btnTitle.classList.remove('show');
}
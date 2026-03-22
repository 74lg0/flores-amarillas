onload = () => {
    // Eliminar clase del body
    document.body.classList.remove("container");

    // Extraer el nombre de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('name');

    // Seleccionar el div del mensaje
    const mensajeElemento = document.querySelector('.message');

    // Actualizar texto si existe el nombre en la URL
    if (nombre && mensajeElemento) {
        mensajeElemento.innerText = `Estas flores amarillas son para ti ${nombre} ♥`;
    }
};
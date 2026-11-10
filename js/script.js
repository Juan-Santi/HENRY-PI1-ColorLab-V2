/* ====================================
    ColorLab V2 - Generador HSL
==================================== */

//Elementos HTML
const selectorCantidad = document.getElementById("selector-cantidad");
const botonGenerar = document.getElementById("btn-generar");
const contenedorPaleta = document.getElementById("contenedor-paleta");

/* =====================================
    Numeros aleatorios
======================================*/

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* =====================================
    Crear un color HSL
======================================*/

function crearColorHSL(tono) {
    const saturacion = numeroAleatorio(65, 85);
    const luminosidad = numeroAleatorio(40, 60);

    return `hsl(${tono}, ${saturacion}%, ${luminosidad}%)`;
}

/* ====================================
   Generar paleta de colores
==================================== */

function generarPaleta() {
    const cantidad = Number(selectorCantidad.value);
    const tonoInicial = numeroAleatorio(0, 359);
    const separacion = 360 / cantidad;

    // Limpiar los resultados anteriores
    contenedorPaleta.replaceChildren();
    contenedorPaleta.dataset.cantidad = String(cantidad);

    // Crear una tarjeta por cada color
    for (let i = 0; i < cantidad; i++) {
        const ajuste = numeroAleatorio(-8, 8);
        const tono = (tonoInicial + i * separacion + ajuste + 360) % 360;
        const color = crearColorHSL(tono);

        const tarjeta = document.createElement("div");
        const muestra = document.createElement("div");
        const codigo = document.createElement("span");

        tarjeta.className = "tarjeta-color";
        muestra.className = "muestra-color";
        codigo.className = "codigo-color";

        muestra.style.backgroundColor = color;
        codigo.textContent = color;

        tarjeta.append(muestra, codigo);
        contenedorPaleta.appendChild(tarjeta);
    }
}

/* ====================================
   Evento del boton Generar
==================================== */

botonGenerar.addEventListener("click", generarPaleta);
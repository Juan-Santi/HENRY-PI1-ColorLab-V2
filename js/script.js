/* ====================================
    ColorLab V2 - Generador HSL
==================================== */

//Elementos HTML
const selectorCantidad = document.getElementById("selector-cantidad");
const selectorFormato = document.getElementById("selector-formato");
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
   Conversion de HSL a HEX
==================================== */

function convertirHSL_a_HEX(colorHSL) {
    const [tono, saturacion, luminosidad] = colorHSL.match(/\d+/g).map(Number);

    const s = saturacion / 100;
    const l = luminosidad / 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((tono / 60) % 2 - 1));
    const m = l - c / 2;

    let r = 0;
    let g = 0;
    let b = 0;

    if (tono < 60) {
        r = c;
        g = x;
    } else if (tono < 120) {
        r = x;
        g = c;
    } else if (tono < 180) {
        g = c;
        b = x;
    } else if (tono < 240) {
        g = x;
        b = c;
    } else if (tono < 300) {
        r = x;
        b = c;
    } else {
        r = c;
        b = x;
    }

    const canalHex = (valor) => {
        return Math.round((valor + m) * 255)
            .toString(16)
            .padStart(2, "0")
            .toUpperCase();
    };

    return `#${canalHex(r)}${canalHex(g)}${canalHex(b)}`;
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
        tarjeta.dataset.hsl = color;

        tarjeta.append(muestra, codigo);
        contenedorPaleta.appendChild(tarjeta);
    }

    actualizarFormato();
}

/* ====================================
   Actualizar formato de colores
==================================== */

function actualizarFormato() {
    const tarjetas = contenedorPaleta.querySelectorAll(".tarjeta-color");

    tarjetas.forEach((tarjeta) => {
        const colorHSL = tarjeta.dataset.hsl;

        const colorMostrado = selectorFormato.value === "hex"
            ? convertirHSL_a_HEX(colorHSL)
            : colorHSL;

        const muestra = tarjeta.querySelector(".muestra-color");
        const codigo = tarjeta.querySelector(".codigo-color");

        muestra.style.backgroundColor = colorMostrado;
        codigo.textContent = colorMostrado;
    });
}


/* ====================================
   Evento del boton Generar
==================================== */

botonGenerar.addEventListener("click", generarPaleta);
selectorFormato.addEventListener("change", actualizarFormato);


/* ====================================
   Actualizar paleta al cambiar cantidad
==================================== */

selectorCantidad.addEventListener("change", () => {
    const hayTarjetas = contenedorPaleta.querySelector(".tarjeta-color");

    if (hayTarjetas) {
        generarPaleta();
    }
});

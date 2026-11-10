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

    // Recuperar colores bloqueados antes de limpiar
    const coloresBloqueados = Array.from(
        contenedorPaleta.querySelectorAll(".tarjeta-color"),
        (tarjeta) => tarjeta.classList.contains("bloqueada")
            ? tarjeta.dataset.hsl
            : null
    );

    contenedorPaleta.replaceChildren();
    contenedorPaleta.dataset.cantidad = String(cantidad);

    for (let i = 0; i < cantidad; i++) {
        const ajuste = numeroAleatorio(-8, 8);
        const tono = (tonoInicial + i * separacion + ajuste + 360) % 360;
        const color = coloresBloqueados[i] ?? crearColorHSL(tono);

        // Crear elementos de la tarjeta
        const tarjeta = document.createElement("div");
        const muestra = document.createElement("div");
        const codigo = document.createElement("span");
        const acciones = document.createElement("div");
        const botonCopiar = document.createElement("button");
        const botonBloquear = document.createElement("button");

        tarjeta.className = "tarjeta-color";
        muestra.className = "muestra-color";
        codigo.className = "codigo-color";
        acciones.className = "acciones-tarjeta";
        botonCopiar.className = "btn-accion btn-copiar";
        botonBloquear.className = "btn-accion btn-bloquear";

        tarjeta.dataset.hsl = color;
        muestra.style.backgroundColor = color;
        codigo.textContent = color;

        if (coloresBloqueados[i]) {
            tarjeta.classList.add("bloqueada");
        }

        // Boton copiar
        botonCopiar.type = "button";
        botonCopiar.textContent = "📋";
        botonCopiar.title = "Copiar código";
        botonCopiar.setAttribute("aria-label", "Copiar código");

        botonCopiar.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(codigo.textContent);

                botonCopiar.textContent = "✓";
                botonCopiar.title = "Código copiado";
                botonCopiar.setAttribute("aria-label", "Código copiado");
            } catch (error) {
                botonCopiar.textContent = "!";
                botonCopiar.title = "No se pudo copiar";
                botonCopiar.setAttribute("aria-label", "No se pudo copiar");
            }
        });

        // Boton bloquear / desbloquear
        botonBloquear.type = "button";

        const actualizarBotonBloqueo = () => {
            const bloqueada = tarjeta.classList.contains("bloqueada");

            botonBloquear.textContent = bloqueada ? "🔓" : "🔒";
            botonBloquear.title = bloqueada
                ? "Desbloquear color"
                : "Bloquear color";

            botonBloquear.setAttribute("aria-label", botonBloquear.title);
            botonBloquear.setAttribute("aria-pressed", String(bloqueada));
        };

        botonBloquear.addEventListener("click", () => {
            tarjeta.classList.toggle("bloqueada");
            actualizarBotonBloqueo();
        });

        actualizarBotonBloqueo();

        acciones.append(botonCopiar, botonBloquear);
        tarjeta.append(muestra, codigo, acciones);
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

        const botonCopiar = tarjeta.querySelector(".btn-copiar");

        botonCopiar.textContent = "📋";
        botonCopiar.title = "Copiar código";
        botonCopiar.setAttribute("aria-label", "Copiar código");

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

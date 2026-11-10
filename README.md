# ColorLab V2

## Proyecto Integrador M1 - HENRY Full Stack

### Descripción

ColorLab V2 es una aplicación web interactiva que permite generar paletas de colores aleatorios en formatos HSL y HEX.

El proyecto utiliza HTML5, CSS3 y JavaScript, con una interfaz adaptable a distintos tamaños de pantalla.

### Funcionalidades implementadas

- Generación dinámica de 6, 8 o 9 colores.
- Distribución de tarjetas: 3×2, 4×2 y 3×3.
- Generación de colores aleatorios HSL.
- Conversión de colores HSL a HEX.
- Visualización de códigos HEX en mayúsculas.
- Alternancia HSL/HEX sin modificar los colores generados.
- Actualización automática al cambiar la cantidad de colores.
- Generación de nuevas paletas mediante un botón.
- Diseño responsive para escritorio y dispositivos móviles.

### Tecnologías utilizadas

HTML5 para la estructura semántica, CSS3 con Flexbox, Grid y Media Queries para el diseño, JavaScript para la lógica e interactividad y Git para el control de versiones.

### Cómo utilizar ColorLab

Abrir `index.html` en el navegador, preferiblemente mediante Live Server en Visual Studio Code.

Seleccionar la cantidad de colores deseada y el formato HSL o HEX. Presionar **Generar paleta** para crear los colores.

Al cambiar la cantidad seleccionada, las tarjetas se actualizan automáticamente. Al alternar entre HSL y HEX, se conserva la paleta y cambian únicamente los códigos mostrados.

### Estructura del proyecto

| Archivo | Función |
|---|---|
| index.html | Estructura HTML |
| css/styles.css | Diseño y estilos |
| js/script.js | Lógica e interactividad |
| documentacion/uso-ia.md | Registro de colaboración con IA |
| .gitignore | Exclusiones del control de versiones |
| README.md | Documentación principal |

### Decisiones técnicas

Se utiliza una función principal para generar las paletas de diferentes cantidades, evitando duplicar código.

Los tonos HSL se distribuyen alrededor del círculo cromático con variaciones de saturación y luminosidad para mejorar la diversidad de colores.

Los colores originales se conservan internamente en formato HSL, permitiendo convertirlos a HEX sin regenerar la paleta.

### Uso de inteligencia artificial

ChatGPT se utiliza como herramienta de apoyo en la planificación, implementación, revisión y depuración del proyecto.

Las decisiones, consultas relevantes, pruebas realizadas y resultados se registran en `documentacion/uso-ia.md`.

### Estado del proyecto

Etapas 1 a 6 completadas y validadas.

Pendiente: funcionalidades extras, documentación final, pruebas integrales y publicación en GitHub Pages.

### Despliegue

Pendiente de publicación en GitHub Pages.

### Mejoras previstas

Incorporar copia de códigos HSL/HEX y bloqueo individual de colores, junto con mejoras adicionales de experiencia de usuario.


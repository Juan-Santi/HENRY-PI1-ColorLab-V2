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
- Copia de códigos HSL y HEX al portapapeles.
- Confirmación visual después de copiar.
- Bloqueo y desbloqueo individual de colores.
- Conservación de colores bloqueados al regenerar.

### Tecnologías utilizadas

HTML5 para la estructura semántica, CSS3 con Flexbox, Grid y Media Queries para el diseño, JavaScript para la lógica e interactividad y Git para el control de versiones.

### Cómo utilizar ColorLab

Abrir `index.html` en el navegador, preferiblemente mediante Live Server en Visual Studio Code.

Seleccionar la cantidad de colores deseada y el formato HSL o HEX. Presionar **Generar paleta** para crear los colores.

Al cambiar la cantidad seleccionada, las tarjetas se actualizan automáticamente. Al alternar entre HSL y HEX, se conserva la paleta y cambian únicamente los códigos mostrados.

Para copiar un color, presionar el botón de copiar
de su tarjeta.

Para conservar un color durante la generación,
presionar el botón de bloqueo.

Los colores bloqueados permanecen en su posición
al generar nuevas paletas.

Para permitir que un color vuelva a cambiar,
desbloquear su tarjeta.

### Estructura del proyecto

| Archivo | Función |
|---|---|
| index.html | Estructura HTML |
| css/styles.css | Diseño y estilos |
| js/script.js | Lógica e interactividad |
| documentacion/uso-ia.md | Registro de colaboración con IA |
| .gitignore | Exclusiones del control de versiones |
| README.md | Documentación principal |
| documentacion/evidencias/ | Capturas de pruebas y funcionamiento |

### Decisiones técnicas

Se utiliza una función principal para generar las paletas de diferentes cantidades, evitando duplicar código.

Los tonos HSL se distribuyen alrededor del círculo cromático con variaciones de saturación y luminosidad para mejorar la diversidad de colores.

Los colores originales se conservan internamente en formato HSL, permitiendo convertirlos a HEX sin regenerar la paleta.


### Interactividad y funciones adicionales

- Los colores bloqueados se identifican mediante una clase CSS
y se conservan por posición al generar nuevas paletas.

- La copia de códigos HSL y HEX utiliza la API Clipboard del navegador y proporciona una confirmación visual.

- La interfaz utiliza Flexbox para los controles, CSS Grid para las tarjetas y Media Queries para adaptarse a diferentes tamaños de pantalla.


### Uso de inteligencia artificial


### Uso de inteligencia artificial

Se utilizó ChatGPT como herramienta de apoyo para
planificar, desarrollar, revisar y depurar ColorLab V2.

La IA proporcionó orientación sobre la estructura HTML,
los estilos CSS, la generación de colores HSL/HEX y
las funcionalidades de copia y bloqueo de colores.

Durante el desarrollo se identificaron y corrigieron
errores de JavaScript con apoyo de IA. Las soluciones
fueron revisadas y su funcionamiento comprobado
mediante pruebas en Live Server.

Las consultas, decisiones técnicas, pruebas realizadas
y evidencias reales de la colaboración se encuentran en:

[Registro detallado del uso de IA](documentacion/uso-ia.md)


### Estado del proyecto

Etapas 1 a 7 completadas, documentadas y registradas en Git.

Etapa 8: documentación, evidencias y auditoría
final completadas.

Etapa 9: repositorio publicado en GitHub y aplicación desplegada mediante GitHub Pages.


### Despliegue

**Aplicación publicada:**
[ColorLab V2 - GitHub Pages](https://juan-santi.github.io/HENRY-PI1-ColorLab-V2/)

**Repositorio de GitHub:**
[HENRY-PI1-ColorLab-V2](https://github.com/Juan-Santi/HENRY-PI1-ColorLab-V2)



### Mejoras futuras

- Incorporar nuevas opciones de personalización de paletas.
- Mejorar la accesibilidad y experiencia de usuario.
- Optimizar la presentación visual en dispositivos móviles.
- Evaluar nuevas funciones complementarias.

Las mejoras posteriores se registrarán mediante
commits descriptivos y actualizaciones en GitHub.



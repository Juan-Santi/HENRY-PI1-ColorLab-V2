
# Registro de uso de IA - ColorLab V2

## Etapa 1 - Preparación del proyecto

Fecha: 10/11/2026

### Consulta realizada
Cuando abras el nuevo chat, escribe: «HENRY PI1 – ColorLab V2. Iniciamos desde cero con la rúbrica, Git, commits y documentación de IA desde el primer paso».

Así empezaremos ordenadamente, conservando el proyecto anterior como respaldo.

Debemos seguir estrictamente todas las categorias de la rubrica, adicional ya tienes toda la informacion respectiva al PI1 - ColorLab V2

Se estableció trabajar en aproximadamente 9 etapas, agrupando implementación, validación, documentación y commits, aprovechando los conocimientos adquiridos durante ColorLab V1.


### Aporte de IA
Orientación para configurar Git Bash,
inicializar Git y crear la estructura
del proyecto.

### Trabajo realizado
- Creación de la carpeta independiente V2.
- Inicialización de Git en la rama main.
- Creación de carpetas y archivos.
- Verificación mediante git status.

### Validación
Git inicializado correctamente.
Archivos identificados como Untracked.
Estructura de carpetas comprobada mediante capturas.

### Decisión
Conservar V1 como respaldo y trabajar
V2 mediante 9 etapas documentadas.



## Etapa 2 - Estructura HTML semántica

Fecha: 10/11/2026

### Consulta realizada
HENRY PI1 – ColorLab V2. Iniciamos la Etapa 2:
HTML semántico.

Se solicitó construir la estructura de la aplicación
siguiendo la rúbrica, incorporando selectores 6/8/9,
formatos HSL/HEX, botón generador y contenedor
de tarjetas dinámicas.

### Aporte de IA
Propuesta de estructura HTML semántica,
identificadores para JavaScript y conexiones
con los archivos CSS y JS.

### Trabajo realizado
- Escritura manual del código HTML en VS Code.
- Organización de encabezado, controles y resultados.
- Vinculación de los archivos CSS y JavaScript.

### Validación
- Estructura HTML visualizada mediante Live Server.
- Página cargada correctamente en localhost:5500.
- Encabezado, selectores, botón y contenedor visibles.
- Opciones 6/8/9 y HSL/HEX comprobadas.
- CSS y generación dinámica pendientes de implementación.

### Resultado
Estructura HTML semántica implementada y validada
visualmente. Preparada para integrar CSS y JavaScript.

### Decisión técnica
Separar HTML, CSS y JavaScript para facilitar
el mantenimiento y la evolución del proyecto.



## Etapa 3 - CSS y diseño visual

Fecha: 10/11/2026
HENRY PI1 – ColorLab V2. Iniciamos la Etapa 3: CSS y diseño visual.

Debemos desarrollar una interfaz moderna, organizada y atractiva, cumpliendo estrictamente la rúbrica oficial y aprovechando la experiencia de ColorLab V1.

Mantendremos la distribución de tarjetas: 6 colores (3×2), 8 colores (4×2) y 9 colores (3×3), adaptando su tamaño a diferentes pantallas.

Quiero trabajar de forma eficiente, escribir y comprender el código CSS, comprobar los resultados visuales y finalizar la etapa con la documentación de IA y un commit descriptivo.

Debemos conservar las funcionalidades y la estructura HTML ya implementadas.

### Aporte de IA
Propuesta de estilos CSS organizados para
encabezado, controles, tarjetas, resultados
y adaptación a pantallas pequeñas.

### Trabajo realizado
- Escritura manual del código CSS.
- Aplicación de estilos a la estructura HTML.
- Preparación del diseño de tarjetas.
- Configuración de reglas responsive.

### Validación
- CSS aplicado correctamente mediante Live Server.
- Encabezado, paneles y controles visualizados.
- Selectores y botón alineados en escritorio.
- Diseño responsive comprobado al 100% de zoom.
- Controles apilados verticalmente en ventana estrecha.
- Distribución de tarjetas pendiente de validar
  cuando se implemente JavaScript.

### Resultado
Interfaz visual implementada y validada en
escritorio y ventana estrecha.
Diseño preparado para las tarjetas dinámicas.

### Decisión técnica
Utilizar Flexbox para los controles y CSS Grid
para las tarjetas, manteniendo las
distribuciones acordadas.



## Etapa 4 - CSS y diseño visual

### Prompt enviado a la IA
Fecha: 10/11/2026
HENRY PI1 – ColorLab V2. Iniciamos la Etapa 4: JavaScript y generación de colores HSL.

Implementaremos la generación aleatoria de colores HSL, creando tarjetas dinámicas según el selector de 6, 8 o 9 colores, respetando las distribuciones 3×2, 4×2 y 3×3.

Debemos evitar la repetición excesiva y conseguir una variedad cromática equilibrada, aprovechando lo aprendido en ColorLab V1.

Quiero comprender la lógica JavaScript, escribir manualmente el código en VS Code, validar su funcionamiento en Live Server y registrar el prompt, los aportes de IA, las pruebas y las decisiones técnicas antes de realizar el commit.

Conservaremos el HTML y CSS ya desarrollados y seguiremos estrictamente la rúbrica oficial.

### Aporte de IA
- Propuesta de funciones JavaScript para generar colores HSL aleatorios.
- Distribución de tonos mediante separación angular en el círculo cromático.
- Variación de saturación y luminosidad para mejorar la diversidad de colores.
- Creación dinámica de tarjetas utilizando elementos HTML desde JavaScript.
- Integración de eventos para activar el botón Generar paleta.
- Orientación para identificar y corregir errores mediante la consola del navegador.


### Trabajo realizado
- Escritura manual del código JavaScript en VS Code.
- Implementación de funciones para generar colores aleatorios HSL.
- Creación de tarjetas dinámicas con sus respectivos códigos.
- Integración del selector de cantidad con el botón generador.
- Ejecución de pruebas en Live Server.
- Revisión y corrección manual de errores identificados durante la depuración.

### Validación
- Generación de 6 colores: correcta, distribución 3×2.
- Generación de 8 colores: correcta, distribución 4×2.
- Generación de 9 colores: correcta, distribución 3×3.
- Códigos HSL mostrados correctamente en las tarjetas.
- Variedad cromática comprobada visualmente.
- Funcionamiento de la generación de paletas confirmado.
- Consola de JavaScript sin errores visibles en la comprobación final.
- Selección del formato HEX pendiente de implementación en la etapa 5.

### Depuración con IA

Durante las pruebas se identificaron y corrigieron errores reales:
- Error en el operador de la función numeroAleatorio().
- Error de sintaxis detectado mediante la consola de Chrome.
- Diferencia entre selectorcantidad y selectorCantidad por el uso de mayúsculas y minúsculas.

Los errores fueron analizados con apoyo de ChatGPT. Las correcciones se escribieron manualmente en VS Code y se comprobaron nuevamente mediante Live Server.

### Resultado
- Generador dinámico de paletas HSL implementado y funcionando correctamente con 6, 8 y 9 colores.
- Las tarjetas muestran los colores generados y sus respectivos códigos HSL, respetando las distribuciones establecidas.

### Decisión técnica
- Utilizar una única función para generar paletas de diferentes cantidades, evitando duplicar código.

- Distribuir los tonos HSL alrededor del círculo cromático y aplicar pequeñas variaciones aleatorias de saturación y luminosidad para reducir la similitud entre colores.

- Mantener separados HTML, CSS y JavaScript para facilitar las futuras ampliaciones del proyecto.
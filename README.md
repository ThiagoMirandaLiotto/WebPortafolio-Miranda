
¡Vamos por partes!

1. ¿Se puede cargar el video HLS en CSS o de otra forma?
No. El soporte HLS (streaming .m3u8) depende del navegador:

Safari/iOS lo soporta nativamente (puede poner el src directo en <video>).
Otros navegadores (Chrome, Firefox) necesitan JavaScript (como hls.js) para reproducir HLS en <video>.
CSS no puede cargar ni manipular streams de video.
Conclusión:
El bloque de setupHLS debe quedarse si querés video de fondo en todos los navegadores.

2. Lo escribí en CSS
Si te referís al "role cycling" (cambiar el texto de rol), no se puede hacer solo con CSS si querés que el texto cambie dinámicamente. CSS solo puede animar/transicionar, pero no cambiar el contenido de texto de un elemento de forma cíclica.

3. Está bien
¡Perfecto!

4–11. ¿Se pueden reemplazar las animaciones GSAP por algo más simple?
Sí, pero con limitaciones:

Animaciones de entrada (fade, slide, stagger):
Se pueden hacer con CSS usando @keyframes, transition, y la pseudo-clase :is(.visible) o usando la API de Intersection Observer para agregar clases cuando los elementos entran en pantalla.
No tendrás efectos tan avanzados como stagger o scrub sin JS.

Pinning y parallax (Explorations):
El "pin" (fijar el título mientras scrolleás) y el parallax de columnas requieren JS para un efecto fluido.
CSS position: sticky puede fijar el título, pero el parallax real de imágenes necesita JS.

Marquee:
El texto corriendo se puede hacer con CSS puro usando animation y @keyframes.
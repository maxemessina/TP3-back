# ON GYM | Training Center

Proyecto de desarrollo web creado para el Trabajo Práctico N°1. Consiste en la maquetación completa del sitio web para un centro de entrenamiento integral, aplicando buenas prácticas de desarrollo, diseño responsivo básico y trabajo colaborativo.

## Descripción del Proyecto

El sitio web está diseñado para "ON GYM", un gimnasio orientado al alto rendimiento y disciplinas como musculación, crossfit y pilates. La página permite a los usuarios conocer las instalaciones, informarse sobre los servicios disponibles, conocer al equipo de trabajo, resolver dudas frecuentes y solicitar una suscripción mediante formularios interactivos.

## Grupo 16 - Integrantes y Responsabilidades

El desarrollo fue dividido de manera equitativa, asignando la maquetación y estructuración de cada vista a los distintos miembros del equipo:

* **Priscila Arrimada:** Desarrollo del formulario de contacto (`contacto.html`).
* **Tomás Astudillo:** Desarrollo de la página integrantes e información del equipo (`equipo.html`).
* **Valentina Guerrieri:** Desarrollo de la página de preguntas frecuentes (`faq.html`).
* **Máximo Messina:** Desarrollo de la página principal (`index.html`).
* **Máximo Moraes:** Estructuración y diseño de la sección de disciplinas (`servicios.html`).
* **Lucas Rojas:** Estructuración y diseño del formulario de suscripción y pedidos (`pedido.html`).

*Nota: Todos los integrantes colaboraron en la unificación de los estilos globales mediante el archivo `style.css`, destacando a **Lucas Rojas** y **Máximo Moraes** que desarrollaron la plantilla base.*

*Nota para la profesora: La rama de alumno-arrimada, encargada de hacer el formulario de contacto, es la que tuvo problemas de conexión con git. Por eso es que el header, el footer y el nav quedaron desactualizados. Gracias por ayuda.

## Tecnologías Utilizadas

* **HTML5:** Estructura semántica (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
* **CSS3:** Estilos en cascada, implementación de Box Model (margin, padding, border) y selectores eficientes.
* **Git & GitHub:** Control de versiones y trabajo colaborativo mediante un flujo de ramas (`main`, `dev` y ramas personales por alumno).

* **lucas rojas** *
En el **pedidoController**, la función principal es `crearPedido`. Lo que hace es recibir la información del pedido que viene desde el frontend mediante `req.body`. Después define la ruta del archivo `pedido.json`, que es donde se guardan todos los pedidos. Luego verifica si ese archivo ya existe usando `fs.existsSync`. Si existe, lo lee con `fs.readFileSync`, y convierte el contenido a un arreglo con `JSON.parse`, para poder trabajar con los pedidos como una lista. Si no existe o está vacío, arranca con un arreglo vacío. Después agrega el nuevo pedido con `pedidos.push(nuevoPedido)` y finalmente guarda todo otra vez en el archivo usando `fs.writeFileSync`, sobrescribiendo el contenido actualizado. También tiene un `try/catch` para manejar errores y devolver una respuesta adecuada si algo falla.

En el **server.js**, la función principal es armar y levantar el servidor. Se crea una clase `Server` donde se inicializa Express y se define el puerto de ejecución. Dentro de `middlewares()` se configuran cosas importantes como `cors()`, que permite la comunicación entre frontend y backend, y `express.json()`, que permite leer datos en formato JSON. En `routes()` se definen todas las rutas de la API y se conectan con sus respectivos archivos, por ejemplo `/api/pedido` que apunta al router de pedidos. Finalmente, con `listen()` se levanta el servidor y empieza a escuchar peticiones en el puerto configurado.

En el **pedidoroute**, lo principal es definir la ruta POST `/`. Esta ruta recibe las solicitudes que llegan al endpoint de pedidos y las deriva directamente a la función `crearPedido` del controller. Es decir, no procesa datos, solo actúa como puente entre la petición del frontend y la lógica del backend.

### Ejemplo de estructura del JSON (pedido.json)

El archivo donde se guardan los pedidos tiene una estructura de arreglo de objetos, donde cada objeto representa un pedido individual. Por ejemplo:
```json
[
  {
    "nombre": "Lucas rojas",
    "telefono": "291 12345678",
    "servicio": "musculatura",
    "tiempo": "medio mes",
    "fecha_de_inicio": "2026-05-13"
    "comentarios":"",
  }
]
```
Cada vez que se hace un nuevo pedido, se agrega un nuevo objeto dentro del mismo arreglo, sin crear múltiples arrays separados, para mantener todo organizado en un solo archivo.
el codigo esta funcionando perfecto pero por algun motivo que desconozco no funciona con /api/pedido

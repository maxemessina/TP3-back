Distribución de Archivos y Carpetas (Maximo)
En el back-end, me encargué de la arquitectura para el módulo de servicios:

data/data.json: Base de datos simulada con los servicios del gimnasio.

controllers/serviciosController.js: Lógica de procesamiento de peticiones.

routes/serviciosRoutes.js: Definición de los endpoints de la API.

js/servicios.js (Front-end): Lógica para el consumo de la API y renderizado dinámico.

Explicación de Funciones a Detalle
getServicios (Back-end):

Descripción: Función asíncrona que lee el archivo data.json utilizando el módulo fs/promises.

Lógica: Implementa un bloque try/catch para manejo de errores. Convierte el contenido del archivo de texto a un objeto JSON y lo envía como respuesta al cliente con un estado 200.

getServicioById (Back-end):

Descripción: Permite obtener la información de una sola disciplina mediante un parámetro de ruta (id).

Lógica: Extrae el ID de req.params, busca la coincidencia dentro del array de servicios y, si no existe, retorna un error 404. Si lo encuentra, devuelve el objeto específico.

cargarServicios (Front-end):

Descripción: Función principal en el cliente que se ejecuta al cargar el DOM.

Lógica: Utiliza fetch para realizar una petición asíncrona a la API (URL de Render). Mediante un bucle forEach, genera dinámicamente elementos HTML (section, img, h2, p) para inyectar los 15 servicios en el contenedor principal de la página de Disciplinas.

Estructura del archivo JSON utilizado
El archivo data.json sigue este formato (ejemplo de un objeto):

JSON
[
  {
    "id": 1,
    "nombre": "Musculación",
    "descripcion": "Sala equipada con máquinas de última generación...",
    "imagen": "musculacion.jpg",
    "precio": 41000
  }
]


Distribución de Archivos y Carpetas (Tomas)

En el back-end, me encargué de la implementación del módulo equipo del gimnasio, organizando la información y separando la lógica en distintas capas para mantener el proyecto ordenado.

data/equipo.json: Archivo donde guardo la información de los integrantes del equipo en formato JSON.

models/equipoModel.js: Se encarga de leer los datos del archivo utilizando fs/promises y devolverlos al controller.

controllers/equipoController.js: Maneja la lógica de la petición y responde con los datos del equipo.

routes/equipoRoutes.js: Define el endpoint que expone la información del equipo a la API.

js/equipo.js (Front-end): Se encarga de consumir la API y renderizar dinámicamente los integrantes en la página.

Explicación de funciones:
leerTodos (Model)

Esta función lo que hace es leer el archivo equipo.json.

Como el archivo está guardado en el proyecto, lo abro con fs y lo convierto a JSON para poder usarlo en JavaScript.

Básicamente: agarra los datos del archivo y los devuelve.

obtenerEquipo (Controller)

Esta función recibe la petición del navegador.

Lo que hace es llamar al modelo para obtener los datos del equipo y después los devuelve al frontend.

Si todo funciona, manda los datos.
Si algo falla, devuelve un error.

Cuando entro a equipo me devuelve todos los integrantes en formato JSON.

cargarEquipo (Front-end)

Esta función se ejecuta cuando entro a la página del equipo.

Pide los datos al backend con fetch
Recibe el JSON luego
Recorre cada persona del equipo
Crea las tarjetas en la página automáticamente

Distribucion de archivos y carpetas (Valentina Guerrieri)
En el back‑end, me encargue de la implementacion del modulo FAQ, organizando la información en distintas capas para mantener el proyecto ordenado y modular.
data/faq.json: Archivo donde guardo las preguntas frecuentes en formato JSON.
models/server.js: Se encarga de configurar y levantar el servidor Express, aplicando middlewares como cors y express.json, y conectando las rutas de la API.
controllers/faqController.js: Maneja la lógica de la petición y responde con los datos del FAQ.
routes/faqRoutes.js: Define el endpoint que expone la información de las preguntas frecuentes a la API.
js/faq.js (Front‑end): Se encarga de consumir la API y renderizar dinámicamente las preguntas y respuestas en la página.

Funciones:
obtenerFAQ (Controller)
Esta función recibe la petición del navegador.
Lo que hace es leer el archivo faq.json de forma asincrona con fs.promises.readFile.Convierte el contenido a json y lo devuelve al frontend con res.json(). Si todo funciona, manda los datos. Si algo falla, devuelve un error manejado con try/catch.
server.js (Model)
Configura Express y los middlewares, registra las rutas, incluyendo /api/faq e Inicializa el servidor en el puerto definido en .env. Es el archivo app.js para levantar la API.
faqRoutes.js (Routes)
Esta es la ruta que uso para pedir el FAQ desde el navegador.
Cuando entro a /api/faq me devuelve todas las preguntas en formato JSON, llama al controlador obtenerFAQ.
.En el frontend: Pido los datos al backend con fetch, recibe el JSON luego, recorre cada pregunta y respuesta y crea las tarjetas en la página automaticamente.

ejemplo  de faq.JSON
[
  {
    "id": 1,
    "pregunta": "¿Cómo me registro?",
    "respuesta": "Podés registrarte completando el formulario en la página de inicio."
  },
  {
    "id": 2,
    "pregunta": "¿Cómo recupero mi contraseña?",
    "respuesta": "Hacé clic en 'Olvidé mi contraseña' y seguí las instrucciones."
  }
]

DISTRIBUCION DE ARCHIVOS Y CARPETAS (Arrimada Priscila)

Para la sección de Contacto desarrolle una API REST en el backend y su correspondiente consumo asíncrono en el frontend.

En el Archivo JSON creé el archivo data/contacto.json, que contiene toda la información necesaria para la página de contacto.

En el Model, creé el archivo models/contacto.js, encargado de leer de forma asíncrona el archivo contacto.json mediante fs.promises.readFile() y convierte su contenido a un objeto JavaScript con JSON.parse().

El método principal es leerTodos(), que devuelve toda la información del archivo JSON.

En el Controller cree el archivo controllers/contactoController.js, cuya función es:
- Invocar el método leerTodos() del modelo.
- Obtener los datos del archivo JSON.
- Enviar la respuesta al cliente en formato JSON.
- Manejar posibles errores mediante try/catch.

En el Route, cree el archivo routes/contactoRoute.js, que define el endpoint: GET /api/contacto
Este endpoint devuelve el contenido completo del archivo contacto.json.


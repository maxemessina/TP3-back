# ON GYM | Training Center - Back-End API REST (TP3)

Proyecto de desarrollo web para el **Trabajo Práctico N°3** de Programación III. Esta etapa consiste en la evolución dinámica del sitio web maquetado en los prácticos anteriores, integrando el consumo asíncrono de una **API REST** propia desplegada en Render para reemplazar los datos estáticos y gestionar un sistema completo de usuarios.

---

## 🚀 Descripción del Proyecto
**ON Gym API REST** Este proyecto representa la capa servidora (Back-End) de la plataforma de gestión e información para el gimnasio **ON Gym**. Desarrollado enteramente en **Node.js** utilizando el framework **Express**, provee una API REST modularizada que expone diversos endpoints mediante métodos `GET` y `POST`. 

Su principal objetivo es independizar la interfaz de usuario (Front-End) de los datos estáticos, gestionando la información de manera centralizada y persistiendo o consultando registros mediante archivos JSON locales que actúan como una base de datos simulada. La API se encuentra desplegada y configurada para su acceso remoto a través de **Render**.

---


## 👥 Grupo 16 - Integrantes y División de Tareas

* **Priscila Arrimada:** `contactoController.js`, `contacto.json` y `contactoRoute.js`.
* **Tomás Astudillo:** `equipoController.js`, `equipo.json`, `equipo.js` y `equipoRoute.js`.
* **Valentina Guerrieri:** `faqController.js`, `faq.json`, `faq.js` y `faqRoutes.js`.
* **Máximo Messina:** `indexController.js`, `usuariosController.js`, `index.json`, `usuarios.json`, `index.js`, `indexRoute.js` y `usuariosRoute.js`.
* **Máximo Moraes:** `serviciosController.js`, `data.json` y `serviciosRoutes.js`.
* **Lucas Rojas:** `pedidoController.js`, `pedido.json` y `pedidosroutes.js`.

---

## 📁 Distribución de Archivos y Carpetas

```text
📁 TP3-back-dev/
├── 📁 controllers/     # Lógica de procesamiento de peticiones HTTP
│   ├── equipoController.js
│   ├── faqController.js
│   ├── indexController.js
│   ├── pedidoController.js
│   ├── serviciosController.js
│   └── usuariosController.js
├── 📁 data/            # Base de datos simulada (archivos JSON de persistencia local)
│   ├── data.json
│   ├── equipo.json
│   ├── faq.json
│   ├── index.json
│   ├── pedido.json
│   └── usuarios.json
├── 📁 models/          # Lógica de acceso a datos y configuración central del servidor
│   ├── equipo.js
│   ├── faq.js
│   ├── index.js
│   └── server.js
├── 📁 routes/          # Definición y enlace de los endpoints de la API REST
│   ├── equipoRoute.js
│   ├── faqRoutes.js
│   ├── indexRoute.js
│   ├── pedidosroutes.js
│   ├── serviciosRoutes.js
│   └── usuariosRoute.js
├── 📄 .env             # Variables de entorno (puerto de escucha y configuraciones locales)
├── 📄 .gitignore       # Archivos y directorios excluidos del control de versiones (node_modules)
├── 📄 app.js           # Punto de entrada principal para inicializar y levantar la aplicación
├── 📄 package-lock.json # Árbol de dependencias bloqueado con versiones exactas instaladas
├── 📄 package.json     # Metadatos del proyecto, dependencias (Express, CORS) y scripts
└── 📄 README.md        # Documentación técnica principal del repositorio Back-End
```

---

## 🛠️ Metodología de Trabajo con Git y GitHub
Para el desarrollo colaborativo y la correcta administración del código fuente, el equipo implementó un flujo de trabajo estructurado basado en ramas (**Branching Model**):

1.  **Ramas Principales:** Se mantuvo la rama `main` de forma exclusiva para alojar las versiones estables y aptas para entrega final. A su vez, se utilizó una rama `dev` como entorno central de integración y pruebas previas al redespliegue en Render.
2.  **Ramas Personales:** Cada integrante del equipo desarrolló sus asignaciones, controladores y rutas trabajando en un entorno aislado sobre su propia rama local, implementando la nomenclatura estándar de la cátedra: `alumno-apellido`.
3.  **Flujo de Integración (Pull Requests):** Todo código nuevo o modificado requirió de la generación de *commits* atómicos y descriptivos. Para unificar los cambios, cada desarrollador abrió un **Pull Request** hacia las ramas de integración (`dev`/`main`), permitiendo la revisión del código por parte del equipo y garantizando una resolución prolija de conflictos antes de ejecutar la mezcla definitiva (*merge*).

---

## Explicación de Funciones

Se detalla a continuación la lógica interna de más del 90% de las funciones implementadas en el servidor para el manejo de archivos, peticiones y respuestas:

### Funciones de Servicios
* **`getServicios` (Controller):** Función asíncrona que lee el archivo `data.json` utilizando el módulo `fs/promises`. Implementa un bloque `try/catch` para el manejo de errores. Convierte el contenido del archivo de texto plano a un objeto JSON nativo mediante `JSON.parse()` y lo envía como respuesta al cliente con un código de estado HTTP `200`.
* **`getServicioById` (Controller):** Permite obtener la información de una sola disciplina mediante un parámetro de ruta (`id`). Extrae el ID solicitado desde el objeto `req.params`, itera y busca la coincidencia exacta dentro del array de servicios convirtiendo el valor mediante `parseInt()`. Si el elemento no existe, retorna un error `404` con un mensaje descriptivo; si lo encuentra, devuelve el objeto específico.

### Funciones de Equipo
* **`leerTodos` (Model):** Función que se encarga de aislar el acceso a datos. Abre y lee asíncronamente el archivo `equipo.json` ubicado en el almacenamiento local del proyecto mediante el módulo `fs`. Transforma el buffer/cadena de texto devuelta a un formato utilizable en JavaScript (`JSON.parse()`) y retorna directamente la promesa con los datos al controlador invocador.
* **`obtenerEquipo` (Controller):** Intercepta la petición HTTP entrante del navegador o cliente. Llama al método `leerTodos()` del modelo para obtener el listado completo de entrenadores/staff. Si la operación asíncrona se resuelve con éxito, responde con los datos en formato JSON y estado `200`. Ante cualquier eventualidad de lectura, captura la excepción en un bloque `catch` e informa un error `500`.

### Funciones de FAQ
* **`obtenerFAQ` (Controller):** Lee el archivo `faq.json` de forma asíncrona mediante `fs.promises.readFile`. Convierte inmediatamente el contenido a JSON y lo devuelve al frontend invocando el método `res.json()`. Toda falla eventual en la ruta del archivo o en el parseo es manejada de forma defensiva mediante `try/catch`, devolviendo un estado `500`.

### Funciones del Servidor
* **`constructor`, `middlewares`, `routes` y `listen` (Clase `Server` en `models/server.js`):** * El **constructor** inicializa la aplicación Express, define el puerto de escucha (priorizando variables de entorno) y mapea las rutas en un diccionario centralizado (`this.paths`).
    * El método **`middlewares()`** inyecta configuraciones globales esenciales: habilita peticiones de origen cruzado (`cors()`) para permitir el consumo desde el Front-End y monta el parser `express.json()` para que el servidor entienda cuerpos de peticiones en formato JSON.
    * El método **`routes()`** conecta cada ruta base definida con su archivo enrutador modularizado (ej. asociando `/api/servicios` con las rutas de servicios).
    * El método **`listen()`** pone en marcha el servidor web, dejándolo a la escucha de peticiones entrantes e imprimiendo un *flag* o aviso en la consola de ejecución.

### Funciones de Usuarios
* **`login` (Controller):** Recibe por el método `POST` las credenciales del usuario (`email` y `password`) enviadas en el cuerpo de la petición (`req.body`). Lee el archivo `usuarios.json`, parsea su contenido y utiliza el método `find()` para verificar si existe un registro que coincida exactamente con ambos campos. Si no se encuentra, responde con estado `401` (No Autorizado). Si las credenciales son válidas, emite un mensaje de éxito en consola y retorna un JSON estructurado únicamente con el `id`, `nombre` y `email` del socio para no exponer datos sensibles.
* **`registro` (Controller):** Procesa el alta de nuevos socios mediante `POST`. Tras leer la base de datos simulada de usuarios, valida tempranamente de forma defensiva que el `email` entrante no se encuentre previamente registrado; si ya existe, emite un *flag* en consola y bloquea la creación devolviendo un error `400`. Si el correo está libre, desestructura el cuerpo para descartar campos redundantes (como la confirmación de contraseña), genera un identificador único basado en marcas de tiempo (`Date.now().toString()`), inyecta metadatos iniciales (miembroDesde, pedidos vacíos) y hace un `.push()` al array. Finalmente, persiste el cambio reescribiendo el archivo físico mediante `fs.writeFile()`.
* **`getPerfil` (Controller):** Endpoint protegido accesible por `GET` en `/api/perfil/:id`. Extrae el parámetro dinámico de la URL, localiza el usuario en `usuarios.json` y, si existe, devuelve sus datos personales junto con el historial de pedidos asociados. Si el ID no es válido, responde con estado `404`.

### Funciones de Pedido
* **`crearPedido` (Controller):** Intercepta compras o suscripciones enviadas mediante `POST`. Verifica la existencia del archivo `pedido.json` utilizando `fs.existsSync` y lee su contenido de forma síncrona. Agrega la nueva orden al array de pedidos y guarda el estado actualizado reescribiendo el archivo con formato indentado (`JSON.stringify(..., null, 2)`). Retorna un estado `201` confirmando la creación exitosa.

### Funciones de Index
* **`getIndexContent` (Controller):** Lee de forma modularizada el JSON estructural de la página de inicio invocando a su modelo correspondiente, imprime un *flag* de trazabilidad en la consola del servidor (`console.log`) y despacha la estructura completa al cliente.

---

## 📂 Estructura de los Archivos JSON Utilizados

Para cumplir con las restricciones del proyecto, cada entidad o módulo persiste sus datos en archivos `.json` completamente independientes e individuales (evitando anidar múltiples arrays inconexos en un solo documento). A continuación se provee un ejemplo estructural mínimo y funcional de cada uno:

### 1. Servicios (`data/data.json`)
```json
[
  {
    "id": 1,
    "nombre": "Musculación",
    "descripcion": "Sala equipada con máquinas de última generación para entrenamiento de fuerza y resistencia.",
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


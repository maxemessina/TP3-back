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
# BACKEND 3
## Proyecto de generación de mock data para usuarios y mascotas
Este proyecto facilita la creación de datos ficticios para las colecciones de usuarios y mascotas, empleando la biblioteca Faker. Los datos generados se cargan masivamente en la base de datos de pruebas, lo que permite realizar tests con datos simulados y evita el uso de información real en el entorno de desarrollo.

## Requisitos Previos
- Node.js y npm instalados.
- MongoDB (URI configurada en un archivo .env para la conexión a la base de datos). Ver env.example.

_____________________________________________________________________________________________________

## Como instalar?
1. Clonar el repositorio:
`https://github.com/micaelachayo/backend3.git`

2. Instalar las dependencias:
     `npm install `

3. Crear archivo .env en la raíz del proyecto con la URI de conexión a MongoDB. Ver archivo env.example

4. Ejecutar el proyecto:
    `npm run dev`

# POSTMAN
### Para tener en cuenta antes de probar: La configuración de cada pc, son distintas. Si no le funciona con el **127.0.0.1**, utilice **localhost**

- `http://127.0.0.1:8080/api/mocks/mockingpets`: Genera y devuelve una lista de 50 mascotas ficticias sin insertarlas en la base de datos.
(src/assets/img/mockingpets.png)

- `http://127.0.0.1:8080/api/mocks/mockingusers`: Genera y devuelve una lista de 50 usuarios ficticios sin insertarlos en la base de datos
(src/assets/img/mockingusers.png)

- `http://127.0.0.1:8080/api/mocks/generateData?users=10&pets=5`: Genera e inserta datos de prueba en la base de datos. Parámetros de la URL:

* users (opcional): Especifica cuántos usuarios se deben generar (por defecto, se generan 50).
* pets (opcional): Especifica cuántas mascotas se deben generar (por defecto, se generan 50).
Por ejemplo, la URL podría ser: /api/mocks/generateData?users=10&pets=10 para generar 10 usuarios y 10 mascotas.
(src/assets/img/generateData.png)
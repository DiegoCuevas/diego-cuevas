# Gestión de Pedidos y Productos

Este proyecto es una aplicación para la gestión de pedidos y productos. Permite a los usuarios registrarse, iniciar sesión, crear y actualizar pedidos, y gestionar productos.

## Contenido

- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Configuración del Proyecto](#configuración-del-proyecto)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
  - [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Endpoints de la API](#endpoints-de-la-api)
  - [Autenticación](#autenticación)
  - [Productos](#productos)
  - [Pedidos](#pedidos)
- [Seed Products](#seed-products)
- [Licencia](#licencia)


## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js
- dotenv

## Configuración del Proyecto

### Requisitos Previos

- Node.js (v14 o superior)
- MongoDB (local o Atlas)

### Instalación

1. Clona el repositorio:

    ```bash
    git clone git@github.com:DiegoCuevas/diego-cuevas.git
    cd diego-cuevas
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Configura las variables de entorno:

    Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

    ```env
    MONGO_URI=your_mongodb_uri
    PORT=3000
    ```
    Asegúrate de reemplazar `your_mongodb_uri` con tu URI de MongoDB.

### Ejecución del Proyecto

```bash
npm start
```
El servidor estará ejecutándose en http://localhost:3000.

## Endpoints de la API

### Autenticación

- `POST /api/register`: Registro de nuevos usuarios.
- `POST /api/login`: Inicio de sesión de usuarios.
- `GET /api/validateToken`: Validación de token de usuario.

### Productos

- `GET /api/products`: Obtener todos los productos.

### Pedidos

- `POST /api/order`: Crear un nuevo pedido.
- `PUT /api/order/:id/status`: Actualizar el estado de un pedido.
- `GET /api/orders`: Obtener todos los pedidos.

### Seed Products

Para poblar la base de datos con productos de ejemplo, ejecuta el siguiente script:

```bash
node seedProducts.js
```
## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

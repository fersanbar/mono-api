# Incident-Api 🚨

API REST para la gestión y seguimiento de incidentes. Permite registrar, consultar y administrar incidentes de manera automatizada, con notificaciones por correo electrónico y tareas programadas.

## 🛠 Tecnologías

- **Node.js** + **TypeScript**
- **Express** — framework HTTP
- **MongoDB** + **Mongoose** — base de datos y ODM
- **node-cron** — tareas programadas
- **Nodemailer** — notificaciones por email
- **Docker** + **Docker Compose** — contenerización
- **GitHub Actions** — CI/CD

## 📋 Requisitos

- Node.js >= 18
- Docker y Docker Compose (opcional)
- MongoDB (local o Atlas)

## ⚙️ Variables de entorno

Copia el archivo `.env.template` y renómbralo a `.env`:

```bash
cp .env.template .env
```

Configura las variables necesarias (conexión a MongoDB, credenciales de correo, etc.).

## 🚀 Instalación y uso

### Con Docker (recomendado)

```bash
docker-compose up --build
```

### Local

```bash
# Instalar dependencias
npm install

# Compilar TypeScript
npm run build

# Ejecutar
node dist/index.js
```

## 📁 Estructura del proyecto

```
src/
├── routes/       # Definición de endpoints
├── controllers/  # Lógica de cada ruta
├── models/       # Esquemas de Mongoose
├── services/     # Lógica de negocio
└── index.ts      # Punto de entrada
```

## 🔄 CI/CD

El proyecto cuenta con un pipeline de GitHub Actions que automatiza la integración continua en cada push a la rama principal.

## 📄 Licencia

ISC

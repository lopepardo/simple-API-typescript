# 📝 Template simple de una API REST con Typescript

![Node version](https://img.shields.io/badge/node-16.20.0-green)
![TypeScript version](https://img.shields.io/badge/typescript-5.0.4-blue)

Este proyecto tiene como objetivo proporcionar una estructura simple para crear una API REST con Typescript, que pueda ser utilizada como base para implementar un CRUD básico. El proyecto incluye toda la configuración inicial necesaria para comenzar a construir una API REST con Typescript, lo que facilita el proceso de creación de una aplicación de este tipo.

Además, el proyecto está diseñado para ser fácilmente comprensible por cualquier persona interesada en aprender a construir una API REST con Typescript. De esta manera, se busca que cualquier persona, independientemente de su nivel de experiencia, pueda utilizar este proyecto como punto de partida para desarrollar sus propias aplicaciones.

También se ha tenido en cuenta la importancia de la eficiencia en el desarrollo de proyectos pequeños. Por ello, se ha incluido toda la configuración necesaria para que el usuario pueda comenzar rápidamente su propio proyecto utilizando este template.

En pocas palabras, este proyecto es ideal para aquellas personas que deseen aprender a crear una API REST con Typescript, o que necesiten una estructura simple para comenzar un proyecto de este tipo de manera rápida y eficiente.

## 🦾 Tecnologías utilizadas

Algunas de las tecnologías y herramientas utilizadas en el proyecto son:

- [Node.js](https://nodejs.org/en) v16.20.0 como entorno de ejecución.
- [typescript](https://www.npmjs.com/package/typescript) v5.0.4 para agregar tipos estáticos a JavaScript.
- [express](https://www.npmjs.com/package/express) v4.18.2 como framework web para crear la API.
- [cors](https://www.npmjs.com/package/cors) v2.8.5 para permitir solicitudes HTTP desde diferentes orígenes.
- [dotenv](https://www.npmjs.com/package/dotenv) v16.0.3 para cargar variables de entorno desde un archivo `.env`.
- [http-status-codes](https://www.npmjs.com/package/http-status-codes) v2.2.0 para manejar códigos de estado HTTP.
- [joi](https://www.npmjs.com/package/joi) v17.9.2 para la validación de datos.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) v9.0.0 para la autenticación de usuarios.
- [morgan](https://www.npmjs.com/package/morgan) v1.10.0 como middleware para registrar solicitudes HTTP entrantes.
- [winston](https://www.npmjs.com/package/winston) v3.8.2 para registrar mensajes y errores en el servidor.
- [jest](https://www.npmjs.com/package/jest) v29.5.0 para escribir y ejecutar pruebas automatizadas.
- [supertest](https://www.npmjs.com/package/supertest) v6.3.3 para realizar pruebas de integración.
- [prettier](https://www.npmjs.com/package/prettier) v2.8.8 para dar formato al código fuente.
- [eslint](https://www.npmjs.com/package/eslint) v8.0.0 como herramienta de análisis de código.
- [husky](https://www.npmjs.com/package/husky) v8.0.0 para configurar los ganchos de git y automatizar tareas antes de cada confirmación.
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) v2.0.0 para reinicia automáticamente el servidor cuando detecta cambios en los archivos de código fuente del proyecto.
- `@types` para agregar tipos a las librerías que no los tienen.

## 🚀 Instalación

Para comenzar a utilizar este template, sigue los siguientes pasos:

1. Clona el repositorio:

```bash
git clone https://github.com/lopepardo/simple-template-typescript-API.git

```

2. Accede a la carpeta del proyecto:

```bash
cd simple-template-typescript-API
```

3. Instala las dependencias del proyecto:

```bash
npm install
```

NOTA: Asegúrate de que la carpeta `env` sea ignorada por git para que el archivo `.env` no sea subido al repositorio.

4. Si deseas ejecutar el proyecto en modo desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

5. Abre tu navegador y accede a la siguiente URL: http://localhost:3000/api

NOTA: Es necesario autenticarse para poder acceder a la API. Puedes crear un token de acceso realizando un POST a la siguiente URL: http://localhost:3000/api/login

En la carpeta `/docs` se encuentra un archivo de Postman para probar la API. Importa el archivo en Postman y prueba la API.

<p align="center">
  <img src="https://github.com/lopepardo/simple-template-typescript-API/blob/main/images/postman.png">
</p>

## Scripts

A continuación se detallan los scripts disponibles en este proyecto:

- `start`: ejecuta el servidor en modo producción.
- `dev`: ejecuta el servidor en modo desarrollo.
- `build`: compila el proyecto TypeScript en JavaScript.
- `test`: ejecuta las pruebas unitarias con Jest.
- `test:watch`: ejecuta las pruebas unitarias con Jest en modo observador.
- `lint`: revisa el código TypeScript en busca de errores y advertencias con ESLint.
- `format`: formatea el código TypeScript con ESLint y Prettier.
- `pretty`: formatea el código TypeScript con Prettier.
- `prepare`: script utilizado por Husky para instalar los ganchos de git.

Para ejecutar cualquier script, simplemente debes correr el comando `npm run` seguido del nombre del script que deseas ejecutar. Por ejemplo, si deseas ejecutar el servidor en modo desarrollo, debes correr el comando `npm run dev`.

## 📁 Estructura de carpetas

El proyecto está estructurado de la siguiente manera:

```bash
├── __tests__        # Contiene los archivos de pruebas unitarias del proyecto
├── .husky           # Configuración de husky para pre-commit y pre-push hooks
├── coverage         # Informes de coberturas del código (se genera cuando se ejecuta npm run test)
├── dist             # Archivos de distribución del proyecto generados por TypeScript
├── docs             # Archivo exportado de Postman para probar la API
├── env              # Archivos de entorno para configuración de variables de ambiente
├── logs             # Archivos de registro de la aplicación generados por Winston
├── node_modules     # Dependencias de Node.js (se genera cuando se ejecuta npm install)
├── src              # Código fuente de la aplicación
│   ├── controllers    # Controladores de la aplicación
│   ├── middlewares    # Middlewares de la aplicación
│   ├── models         # Modelos de datos de la aplicación
│   ├── routes         # Rutas de la aplicación
│   ├── services       # Servicios de la aplicación
│   ├── utils          # Utilidades generales de la aplicación
│   ├── app.ts         # Configuración de la aplicación
│   └── server.ts      # Inicio del servidor
├── .eslintrc        # Configuración de ESLint para el proyecto
├── .gitignore       # Archivos y carpetas que deben ser ignorados por git
├── .prettierrc      # Configuración de Prettier para el proyecto
├── jest.config.js   # Configuración de Jest para el proyecto
├── package.json     # Información del proyecto y dependencias de Node.js
└── tsconfig.json    # Configuración de TypeScript para el proyecto
```

Recuerda que la estructura de carpetas es una decisión personal del equipo de desarrollo y puede variar en cada proyecto. Lo importante es que la estructura esté claramente definida y sea fácil de entender para cualquier miembro del equipo.

## 🔮 Mejoras futuras

- [ ] Agregar un ORM como TypeORM o Sequelize para facilitar la interacción con la base de datos.
- [ ] Agregar autenticación con servicios de terceros (Google, Facebook, Twitter, etc.)
- [ ] Agregar un sistema de autorización de usuarios (roles y permisos)
- [ ] Agregar un sistema de documentación de la API (Swagger, etc.)
- [ ] Agregar un sistema de internacionalización (i18n)
- [ ] Agregar un sistema de caché para mejorar el rendimiento de la API

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo [LICENSE](LICENSE) para más información.

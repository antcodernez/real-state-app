// Vamos a importar el dovenv con ecmascript

import dotenv from "dotenv";
dotenv.config({path: ".env"}); // se utiliza para cargar variables de entorno desde un archivo llamado ".env" 
const config = {
    env: process.env.NODE_ENV || "dev",
    port: process.env.PORT || 4000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    emailHost: process.env.EMAIL_HOST,
    emailPort: process.env.EMAIL_PORT,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASSWORD
  }

export {config};
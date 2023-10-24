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
    dbPort: process.env.DB_PORT
  }

export default config;
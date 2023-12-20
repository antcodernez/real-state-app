import  Sequelize  from "sequelize";
import {config} from "./config.js";

const db = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
    host: config.dbHost,
    port: config.dbPort,
    dialect: "postgres",
    define: {
        timestamps: true // cuando un usuario se registra va a agregar 2 columnas que son cuando se creo y cuando se actualizo
    },
    pool:{
        max: 5, //maximo de conecciones a mantener
        min: 0, //minimo de conecciones a mantener
        acquire: 30000, // 30 segundos tiempo que va a tratar de elavorar una coneccion antes de un error 
        idle: 10000 // 10 segundos,para finaliza la conexion si no hay actividad
        //Le pasaremos el conection pool de sequelize, configura como va a ser la coneccion a la db de conecciones nuevas o existentes
        //cuando requiero conectarme a la db se va a crear una coneccion a la db, consume muchos recursos
    },
    // operatorsAliases: false //existia antes, es obsoleto
});
// //Cuando instanciamos Squelize toma 4 parametros que son
// //Nombre de la db, usuario, password y objeto de configuraciones

//Otra forma de hacerlo :)

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// const sequelize = new Sequelize(URI, {
//     dialect: "postgres"
// })

// export default sequelize;
export default db;
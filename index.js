import express  from "express"; //ES6+ 
import csurf from "csurf";
import cookieParser from "cookie-parser";  


import usuarioRouter from "./routing/usuarioRoutes.js";
import db from "./config/bd.js";
import morgan  from "morgan";
import { cookie } from "express-validator";
//Crear la app
const app = express();  
const port = process.env.PORT || 4000;
  
//Habilidanto lectura de datos de formularios
app.use(express.urlencoded({extended: true}));
// Si veo ejemplos con bodyParser.urlencoded() esa dependencia ya se agrego de manera interna en express

//Habilitando cookie-parser:  facilita el manejo de cookies en las aplicaciones Express
app.use(cookieParser())

//Habilitanto CSRF:  está configurando csurf como middleware en tu aplicación Express para proporcionar protección contra ataques CSRF utilizando cookies para almacenar y verificar los tokens CSRF.
app.use(csurf({cookie: true}))

// Habilitando morgan
app.use(morgan("tiny"));
// conexion a la bd
try 
    {
        await db.authenticate();
        db.sync();  //Para sincronizar la base de datos y mis nuevos modelos de la bd 
        console.log("Conexion correcta a la bd");
    } 
catch (error) 
    {
        console.log(error)
    }

//Habilitando pug
// .set() es para agregar configuraciones al proyecto
app.set("view engine", "pug"); //view engine decir que tipo de view engine quiero usar
//Indico que quiero usar pug 
app.set("views", "./views") //Le estoy diciendo a express donde va a encontrar los arcvhivos para que los renderize


//Carpeta publica: la que puede abrir las personas que visitan el sitio web, tambien contiene los archivos estaticos
app.use(express.static("public")) // identificar los archivos estaticos


// Routing
app.use("/auth", usuarioRouter);

app.listen(port, () => {
    console.log("El server ya esta corriendo master en " + port);
    console.log("http://localhost:4000");
}); 
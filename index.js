import express  from "express"; //ES6+ 
import usuarioRouter from "./routing/usuarioRoutes.js";

//Crear la app
const app = express();  
const port = 4000;  

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
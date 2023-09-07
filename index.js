import express  from "express"; //ES6+ 
import usuarioRouter from "./routing/usuarioRoutes.js";

const app = express();
const port = 4000;  

//Habilitando pug
app.set("view engine", "pug"); //view engine decir que tipo de view engine quiero usar 
app.set("views", "./views") //Le estoy diciendo a express donde va a encontrar los arcvhivos para que los renderize

// Routing
app.use("/auth", usuarioRouter);

app.listen(port, () => {
    console.log("El server ya esta corriendo master en " + port);
    console.log("http://localhost:4000");
}); 
import express  from "express"; //ES6+ 
import usuarioRouter from "./routing/usuarioRoutes.js";

const app = express();
const port = 4000;  

app.use("/", usuarioRouter);

app.listen(port, () => {
    console.log("El server ya esta corriendo master en " + port);
    console.log("http://localhost:4000");
}); 
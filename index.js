import express  from "express"; //ES6+

const app = express();
const port = 4000;  


app.get("/", (req, res) => {
    res.send(`<h1>Real state app</h1>`);
});

app.get("/pro", (req, res) => {
    res.json({
        "Hola": "Soy un master"});  
});


app.listen(port, () => {
    console.log("El server ya esta corriendo master en " + port);
    console.log("http://localhost:4000");
}); 
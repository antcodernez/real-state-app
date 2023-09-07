import express from "express";

const router = express.Router();


router.get("/login", (req, res) => {
    res.render(`auth/login`); //res.render(``); Se va a encargar de mostrar una vista, ../views/auth/login.pug ya no va a ser necesario poner la ruta asi porque ya indique que va a estar en views, en el archivo index.js 
});

export default router;
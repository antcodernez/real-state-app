import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
    res.send(`<h1>Real state app</h1>`);
});

router.get("/pro", (req, res) => {
    res.json({
        "Hola": "Soy un master"});  
});

router.post("/pro/:id", (req, res) =>
    {
        const body = req.body;
        res.status(201).json({
            "message": "Se guardo correctamente",
            "data": body
        });
    });

export default router;
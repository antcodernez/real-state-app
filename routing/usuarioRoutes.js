import express from "express";
import { formularioLogin } from "../controllers/usuarioController.js";
import { formularioRegister, register,formularioForgetpassword } from "../controllers/usuarioController.js";
const router = express.Router();


router.get("/login", formularioLogin);

router.get("/register",formularioRegister);
router.post("/register", register);

router.get("/forgot-password", formularioForgetpassword);

export default router;
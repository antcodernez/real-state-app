import express from "express";
import { formularioLogin } from "../controllers/usuarioController.js";
import { formularioRegister, formularioForgetpassword } from "../controllers/usuarioController.js";
const router = express.Router();


router.get("/login", formularioLogin);
router.get("/register",formularioRegister);
router.get("/forgot-password", formularioForgetpassword);

export default router;
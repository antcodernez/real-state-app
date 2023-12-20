import express from "express";
import { formularioLogin } from "../controllers/usuarioController.js";
import { formularioRegister,formularioForgetpassword, register, confirmAccount} from "../controllers/usuarioController.js";
const router = express.Router();


router.get("/login", formularioLogin);

router.get("/register",formularioRegister);
router.post("/register", register);

router.get("/confirm/:token", confirmAccount)
router.get("/forgot-password", formularioForgetpassword);

export default router;
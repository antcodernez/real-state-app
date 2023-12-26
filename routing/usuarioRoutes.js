import express from "express";
import { formularioLogin } from "../controllers/usuarioController.js";
import { formularioRegister,formularioForgetpassword, register, confirmAccount, resetPassword, checkToken, newPassword, autenticate} from "../controllers/usuarioController.js";
const router = express.Router();


router.get("/login", formularioLogin);
router.post("/login", autenticate);

router.get("/register",formularioRegister);
router.post("/register", register);

router.get("/confirm/:token", confirmAccount)

router.get("/forget-password", formularioForgetpassword);
router.post("/forget-password", resetPassword);

//Save new passoword
router.get("/forget-password/:token", checkToken);
router.post("/forget-password/:token", newPassword);

export default router;
import { check, validationResult} from "express-validator";
import { User } from "../models/Usuario.js";
import { generateId } from "../helpers/tokens.js";
import { emailRegister } from "../helpers/emails.js";

const formularioLogin = (req, res) =>
    {
        res.render(`auth/login`, {
            page: "Log in"
        }); 
    } 
    
const formularioRegister = (req, res) =>
    {
        res.render(`auth/register`, {
            page: "Create Account"
        }); 
    } 

const register = async (req, res) => 
    {
        console.log("Post about one users");
        console.log(req.body);
        //Agregando las validaciones
        await check('name').notEmpty().withMessage("The name can't be empty bro :D").run(req);
        await check('userEmail').isEmail().withMessage("This not a email mijo").run(req);
        await check('password').isLength({min: 8}).withMessage("The minimun lenght only can be 8 characters").run(req);
        await check('repeatPassword').equals(req.body.password).withMessage("The password must be equals").run(req);
        // run(req); lo que hace invocar la funcion, se puede hacer en el routing o en el controlador depende de gustos supongo

        // verificar resultados
    
        let errorsList = validationResult(req); 
        // validationResult va a validar las reglas que yo haya definido previamente
        if(!errorsList.isEmpty())
            {
                 return res.render(`auth/register`, {
                    page: "Create Account",
                    errors: errorsList.array(),
                    user: {
                        name: req.body.name,
                        userEmail: req.body.userEmail                    
                    }
                }); 
            }
        
        //Extraer datos
        const {name, userEmail, password} = req.body;
        // verifica que el usuario no este duplicado
        
        const userExist = await User.findOne({ where: {userEmail}});
        // console.log(`This user exists?: ${userExist}`)
        
        if(userExist)
            {
                return res.render(`auth/register`, {
                    page: "Create Account",
                    errors: [{msg: "This user is already registered"}],
                    user: {
                        name: req.body.name,
                        userEmail: req.body.userEmail                    
                    }
                }); 
            }
        //Save user
        const user = await User.create({
            name,
            userEmail,
            password,
            token: generateId()
        })
        
        //envia email de confirmacion
        emailRegister({
            name: user.name,
            email: user.userEmail,
            token: user.token 
        })
        // mostrar mensaje de confirmacion
        res.render("templates/message",{
            page: "Account created successfully",
            message: "We have sent a confirmation email, click the link below"
        })
    }


const confirmAccount = async (req, res) => {
    
    const {token} = req.params;

    //Verificar el token que sea valido
    const user = await User.findOne({where: {token}});
    
    if(!user)
        {
            return res.render("auth/confirm-account", {
                page: "Error to confirm your account",
                message: "We have an error to confirm your account try again",
                error: true
            });
        }
    
    // confirm your account
    user.token = null;
    user.confirmed = true;

    await user.save(); // save(); metodo para guardar mis cambios del objeto que hice en memoria y despues en la base de datos se guardan

    res.render("auth/confirm-account", {
        page: "Account confirmed 👍",
        message: "Your account is confirmed succesfully"
    });
    
}

const formularioForgetpassword = (req, res) =>
    {
        res.render(`auth/forgot-password`, {
            page: "Regain your access to real estate"
        }); 
    } 


export { 
        formularioLogin, 
        formularioRegister,
        formularioForgetpassword,
        register,
        confirmAccount
    }

// export default formularioLogin; esta manera solo me permitira exportar una cosa por archivo


//res.render(``); Se va a encargar de mostrar una vista, ../views/auth/login.pug ya no va a ser necesario poner la ruta asi porque ya indique que va a estar en views, en el archivo index.js 
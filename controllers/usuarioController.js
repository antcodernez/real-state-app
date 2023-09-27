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
const formularioForgetpassword = (req, res) =>
    {
        res.render(`auth/forgot-password`, {
            page: "Regain your access to real estate"
        }); 
    } 


export { 
        formularioLogin, 
        formularioRegister,
        formularioForgetpassword
    }

// export default formularioLogin; esta manera solo me permitira exportar una cosa por archivo


//res.render(``); Se va a encargar de mostrar una vista, ../views/auth/login.pug ya no va a ser necesario poner la ruta asi porque ya indique que va a estar en views, en el archivo index.js 
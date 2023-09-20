const formularioLogin = (req, res) =>
    {
        res.render(`auth/login`, {
            user: `Bienvenido usuario`
        }); 
    } 
    
const formularioRegister = (req, res) =>
    {
        res.render(`auth/register`, {
            user: `Bienvenido usuario`
        }); 
    } 


export { 
        formularioLogin, 
        formularioRegister 
    }

// export default formularioLogin; esta manera solo me permitira exportar una cosa por archivo


//res.render(``); Se va a encargar de mostrar una vista, ../views/auth/login.pug ya no va a ser necesario poner la ruta asi porque ya indique que va a estar en views, en el archivo index.js 
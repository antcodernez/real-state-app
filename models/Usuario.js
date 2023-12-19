// DataTypes hay dos formas para crear y definir los tipos de datos de mi modelos 1 .- Importando sequalize Sequelize.STRING === DataTypes.STRING la misma mamada
//2.- DataTypes, ver que no sea la version en singular ojo

import { DataTypes } from  "sequelize";
import bcrypt from "bcrypt";
import db from "../config/bd.js";

const User= db.define("tb_users",{
    name: {
        type: DataTypes.STRING,//defino el tipo de dato y cuantos caracteres va a tener
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,  //Si solo tengo un atributo sera asi <-------
    confirmed: DataTypes.BOOLEAN,
}, {
    hooks:
        {
            beforeCreate: async function(user) 
                {
                    const salt = await bcrypt.genSalt(10);
                    //. El "salt" es una cadena aleatoria única que se concatena con la contraseña antes de aplicar la función de hash. Esto agrega entropía a la contraseña y hace que sea más difícil realizar ataques de fuerza bruta y ataques de diccionario.
                    user.password = await bcrypt.hash(user.password, salt);
                    //hash() de la biblioteca bcrypt se utiliza para calcular el hash de una cadena de texto, que comúnmente se utiliza para almacenar contraseñas de manera segura. 
                }
        }
}) 
//definimos un nuevo modelo, el primer parametro que recibe es el nombre de la tabla donde se van a ir mis registros, hay que definir los atributos que seran las columnas de mi tabla

//Las columnas de la tabla si quiero agregar mas objetos atributos puedo pasarle un objeto dentre de si

export { User };
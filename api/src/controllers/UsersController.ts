import {Request, Response} from "express"
import { UserModel } from "../models/Users";

export default{
    signUp:async(req:Request, res:Response)=>{
        try {
            //Obtener informacion de la peticion
            const name = req.body.name;
            const password = req.body.password;
            const email = req.body.email;
            const rol = req.body.rol;

            //Validar que la informacion existe
            if (!name || !password || !email || !rol){
                res.status(400).json({msg:"Faltan parametros para crear un usuario"})
                return
            }
            //Creamos el registro en la base de datos
            await UserModel.create({
                name,
                password,
                email,
                rol
            })

            res.status(200).json({msg:"Usuario almacenado con exito"})
            return

        } catch (error) {
            console.log("El error ocurrido: ",error)
            res.status(500).json({msg:"Ocurrio un error al regustrar el usuario"})
            return
        }
    },
    signIn:async(req:Request, res:Response)=>{
        try {
            //Obtener los datos
            const email = req.body.email
            const password = req.body.password

            //Buscar al usuario por correo y contrasena
            const user = await UserModel.findOne({
                email,
                password   
            });

            //Validar que el usuario existe
            if (!user){
                res.status(400).json({msg:"No se encontro usuario con esas credenciales"})
                return
            }
            res.status(200).json({msg:"El usuario inicio sesion correctamente",user});
            return
        } catch (error) {
            console.log("El error ocurrido: ",error)
            res.status(500).json({msg:"Ocurrio un error al iniciar sesion"})
            return
        }
    }
}
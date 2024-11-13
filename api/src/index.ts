import app from "./app";
import mongoose from "mongoose"

async function main(){
    try {
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/proyectoindividual"
        )
        console.log("Conexion a la DB creada con exito")
        app.listen(4000, ()=>{
            console.log("Servidor corriendo con exito")
        })
    } catch (error){
        console.log("Ocurrio un error al inicializar la aplicacion")
    }
}

main()
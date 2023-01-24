const mongoose = require("mongoose");

const conexion = async() => {
    try {

        mongoose.set("strictQuery", false);
        
        await mongoose.connect("mongodb://localhost:27017/mi_blog");

        console.log("DB OK");
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos");
    }
}

module.exports = {
    conexion
}
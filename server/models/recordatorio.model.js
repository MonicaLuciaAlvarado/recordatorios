const mongoose = require("mongoose");

const EsquemaRecordatorio = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "Titulo es obligatorio"],
        minLength: [3, "Título debe tener al menos 3 caracteres"]
    },
    contenido: {
        type: String,
        required: [true, "Contenido es obligatorio"],
        minLength: [3, "Contenido debe tener al menos 3 caracteres"]
    },
    prioridad: {
        type: Number,
        min: [1, "Prioridad debe ser un número entre 1-10"],
        max: [10, "Prioridad debe de ser un número entre 1-10"]
    }
}, {timestamps: true, versionKey: false});

const Recordatorio = mongoose.model("recordatorios", EsquemaRecordatorio);//colección nombre
module.exports=Recordatorio;
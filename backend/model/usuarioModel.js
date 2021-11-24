const { Schema, model } = require('mongoose')

const usuario = new Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    identificacion: {
        type: Number,
        unique: true,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    },
    tipoUsuario:{
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    liderProyecto: [Number],
    inscripciones: [Number],
    avances: [{}]
    
})
module.exports = model('usuarios', usuario,"usuarios")
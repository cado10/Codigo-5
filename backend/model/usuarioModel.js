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
        type: Schema.Types.ObjectId,
        ref: 'tipoUsuario',
        required: true
    },
    estado: {
        type: Schema.Types.ObjectId,
        ref: 'estado',
        required: true
    },
    liderProyecto: [Number],
    inscripciones: [Number],
    avances: []
    
})
module.exports = model('usuarios', usuario,"usuarios")
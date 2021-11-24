const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Usuario{
        nombre: String
        apellido: String
        identificacion: Int
        estado: String
        email: String
        tipoUsuario: String
    }
    type Proyecto{
        lider: String
        facultad: String
        nombre:String
    }
    type Query{
        usuarios: [Usuario]
        usuario(nombre: String): Usuario
        
    }
    input UserInput{
        email: String
        identificacion:Int
        nombre: String
        apellido: String
        clave: String
        tipoUsuario: String
        estado: String
    }
    type Mutation{
        createUser(user:UserInput):String
        activeUser(identificacion:Int):String
        deleteUser(identificacion:Int):String
    }
`
module.exports = typeDefs
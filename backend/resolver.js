
const {createUser, 
    usuarios,
    usuario,
    activeUser,
    deleteUser} = require('./service/usuario.service');


const resolvers = {
    Query: {
        usuarios: async () => usuarios(),
        usuario: async (parent, args, context, info) => usuario(args.nombre),

    },
    Mutation: {
        
        createUser: (parent, args, context, info) => createUser(args.user),

        activeUser: (parent, args, context, info) => activeUser(args.identificacion),

        deleteUser: (parent, args, context, info) => deleteUser(args.identificacion),
        
    }
}
module.exports = resolvers
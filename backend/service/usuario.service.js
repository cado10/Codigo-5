const User = require('../model/usuarioModel')
var aes256 = require('aes256');
const key = 'CLAVEDIFICIL';


const createUser = (user) => {
    const { clave } = user;
            const nuevoUsuario = new User(user);
            const encryptedPlainText = aes256.encrypt(key, clave);
            nuevoUsuario.clave = encryptedPlainText
            return nuevoUsuario.save()
                .then(u => "usuario creado")
                .catch(err => "fallo la creacion");

}

const usuarios = async () => await User.find({})

const usuario = async (nombre) => await User.findOne({ nombre })

const activeUser = (identificacion) => {
    return User.updateOne({ identificacion: identificacion }, { estado: "Autorizado" })
                .then(u => "Usuario activo")
                .catch(err => "Fallo la activacion");
}

const deleteUser = (identificacion) => {
    return User.deleteOne({ identificacion: identificacion })
    .then(u => "Usuario eliminado")
    .catch(err => "Fallo la eliminacion");
}

module.exports = {
    createUser,
    usuarios,
    usuario,
    activeUser,
    deleteUser
}
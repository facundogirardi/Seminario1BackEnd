var User = require('../models/User.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

_this = this

// Recupero usuarios
exports.getUsers = async function (query, page, limit) {

    var options = {
        page,
        limit
    }
    try {
        var Users = await User.paginate(query, options)
        return Users;

    } catch (e) {
        console.log("error servicio", e)
        throw Error('Error en el paginado de usuarios');
    }
}

// Recupero Usuario por ID
exports.getUsuarioID = async function (query, page, limit) {
    var options = {
        page,
        limit
    }

    try {
        var Users = await User.paginate(query, options)
        return Users;

    } catch (e) {
        console.log("error servicio", e)
        throw Error('Error en el paginado de las Usuario por ID');
    }
}

// Creo usuarios
exports.createUser = async function (user) {
    var newUser = new User({
        pedido: user.pedido,
        nombre: user.nombre,
        apellido: user.apellido,
        dni: user.dni,
        telefono: user.telefono,
        obrasocial: user.obrasocial,
        provincia: user.provincia,
        estadopedido: user.estadopedido,
        date: new Date()

    })

    try {
        var savedUser = await newUser.save();
        var token = jwt.sign({
            id: savedUser._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        console.log(e)
        throw Error("Error while Creating User")
    }
}


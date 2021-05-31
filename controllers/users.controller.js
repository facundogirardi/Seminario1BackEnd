var UserService = require('../services/user.service');

_this = this;

// Traigo usuarios
exports.getUsers = async function (req, res, next) {

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 1000;
    try {
        var Users = await UserService.getUsers({}, page, limit)
        return res.status(200).json({ status: 200, data: Users, message: "Usuarios recuperados exitosamente" });
    } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Traigo Usuario por ID
exports.getUsuarioID = async function (req, res, next) {

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 1000;

    var filtro = {
        _id: req.body._id
    }
    try {
        var Users = await UserService.getUsers(filtro, page, limit)

        if (Users.total === 0)
            return res.status(201).json({ status: 201, data: Users, message: "No existe la Usuario por ID" });
        else
            return res.status(200).json({ status: 200, data: Users, message: "Usuario por ID recuperada exitosamente" });
    } catch (e) {

        console.log(e)
        return res.status(400).json({ status: 400, message: e.message });
    }
} 

// Creacion de usuarios
exports.createUser = async function (req, res, next) {

    var User = {
        pedido: req.body.pedido,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        telefono: req.body.telefono,
        obrasocial: req.body.obrasocial,
        provincia: req.body.provincia,
        estadopedido: req.body.estadopedido,

     }
    try {
        console.log(User)
        var createdUser = await UserService.createUser(User)
        return res.status(201).json({ createdUser, message: "Usuario generado existosamente" })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ status: 400, message: "Usuario no puedo generarse" })
    }
}


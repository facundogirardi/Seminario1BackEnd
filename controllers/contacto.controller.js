var ContactoService = require('../services/contacto.service');

_this = this;

exports.createContacto = async function (req, res, next) {

    var Contacto = {
        nombre: req.body.nombre,
        email: req.body.email,
        region: req.body.region,
        opinion: req.body.opinion

    }
    try {

        var createdContacto = await ContactoService.createContacto(Contacto)
        return res.status(201).json({ createdContacto, message: "Contacto creado existosamente" })
    } catch (e) {

        console.log(e)
        return res.status(400).json({ status: 400, message: "Contacto no pudo crearse" })
    }
}
var ContactoService = require('../services/contacto.service');

// Saving the context of this module inside the _the variable
_this = this;

exports.createContacto = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller de Contacto",req.body)
    var Contacto = {
        razonsocial: req.body.razonsocial,
        email: req.body.email,
        region: req.body.region,
        tamaño: req.body.tamaño
 
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdContacto = await ContactoService.createContacto(Contacto)
        return res.status(201).json({createdContacto, message: "Succesfully Created Contacto"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Contacto Creation was Unsuccesfull"})
    }
}
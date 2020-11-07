var EncuestaService = require('../services/encuesta.service');

// Saving the context of this module inside the _the variable
_this = this;

exports.createEncuesta = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller de Encuesta",req.body)
    var Encuesta = {
        titulo: req.body.titulo,
        Pregunta1: req.body.Pregunta1,
        Respuesta1: req.body.Respuesta1,
        Varlorref1: req.body.Varlorref1,
        Pregunta2: req.body.Pregunta2,
        Respuesta2: req.body.Respuesta2,
        Varlorref2: req.body.Varlorref2,
        Pregunta3: req.body.Pregunta3,
        Respuesta3: req.body.Respuesta3,
        Varlorref3: req.body.Varlorref3,
        Pregunta4: req.body.Pregunta4,
        Respuesta4: req.body.Respuesta4,
        Varlorref4: req.body.Varlorref4,
        Pregunta5: req.body.Pregunta5,
        Respuesta5: req.body.Respuesta5,
        Varlorref5: req.body.Varlorref5,
 
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdEncuesta = await EncuestaService.createEncuesta(Encuesta)
        return res.status(201).json({createdEncuesta, message: "Succesfully Created Encuesta"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Encuesta Creation was Unsuccesfull"})
    }
}
// Async Controller function to get the To do List
exports.getEncuesta = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Encuesta = await EncuestaService.getEncuesta({}, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Encuesta, message: "Succesfully Users Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}
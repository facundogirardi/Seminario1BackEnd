var EncuestaService = require('../services/encuesta.service');

// Saving the context of this module inside the _the variable
_this = this;

exports.createEncuesta = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller de Encuesta",req.body)
    var Encuesta = {
        titulo: req.body.titulo,
        sector: req.body.sector,
        tamaño: req.body.tamaño,

        pregunta1: req.body.pregunta1,
        P1respuesta1: req.body.P1respuesta1,
        P1opcion1: req.body.P1opcion1,
        P1respuesta2: req.body.P1respuesta2,
        P1opcion2: req.body.P1opcion2,
        P1valorref1: req.body.P1valorref1,
        /*
        P1respuesta3: req.body.P1respuesta3,
        P1opcion3: req.body.P1opcion3,
        P1respuesta4: req.body.P1respuesta4,
        P1opcion4: req.body.P1opcion4,
        P1respuesta5: req.body.P1respuesta5,
        P1opcion5: req.body.P1opcion5,
        P1valorref1P: req.body.P1varlorref1P,
        P1valorref1M: req.body.P1varlorref1M,
*/
 
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
    var limit = req.query.limit ? req.query.limit : 1000;
    try {
        var Encuesta = await EncuestaService.getEncuesta({}, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Encuesta, message: "Succesfully Users Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.updateEncuesta = async function (req, res, next) {

    // Id is necessary for the update
    if (!req.body.id) {
        return res.status(400).json({status: 400., message: "ID be present"})
    }
    //console.log("idsss",id)
    var Encuesta = {
      
        titulo: req.body.titulo ? req.body.titulo : null,
        sector: req.body.sector ? req.body.sector : null,
        tamaño: req.body.tamaño ? req.body.tamaño : null
    }
    try {
        var updatedEncuesta = await EncuestaService.updateEncuesta(Encuesta)
        return res.status(200).json({status: 200, data: updatedEncuesta, message: "Succesfully Updated Encuesta"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeEncuesta = async function (req, res, next) {
    console.log('estamos aca')
    console.log(req.body)
    var id = req.body.id;
    console.log(id);  
    try {
        var deleted = await EncuestaService.deleteEncuesta(id);
        return res.status(200).send("Succesfully Deleted... ");
        
        
    } catch (e) {
        console.log(e)
        return res.status(400).json({status: 400, message: e.message})
    }
}
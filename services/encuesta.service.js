// Gettign the Newly created Mongoose Model we just created 
var Encuesta = require('../models/Encuesta.model');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

exports.createEncuesta = async function (encuesta) {
    // Creating a new Mongoose Object by using the new keyword
     var newEncuesta = new Encuesta({
        titulo: encuesta.titulo,
        sector: encuesta.sector,
        tamaño: encuesta.tamaño,

        pregunta1: encuesta.pregunta1,
        P1respuesta1: encuesta.P1respuesta1,
        P1opcion1: encuesta.P1opcion1,
        P1respuesta2: encuesta.P1respuesta2,
        P1opcion2: encuesta.P1opcion2,
        P1valorref1: encuesta.P1valorref1,
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
    
        date: new Date()

    })

    try {
        // Saving the Encuesta 
        var savedEncuesta = await newEncuesta.save();
        var token = jwt.sign({
            id: savedEncuesta._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Encuesta")
    }
}

// Async function to get the Encuesta List
exports.getEncuesta = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Encuestas = await Encuesta.paginate(query, options)
        // Return the Encuesta list that was retured by the mongoose promise
        return Encuestas;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Encuesta');
    }
}

exports.updateEncuesta = async function (encuesta) {
    
    var ids = {id :encuesta.id}
    

    try {
        //Find the old User Object by the Id
        var oldEncuesta = await Encuesta.findOne(ids);
    } catch (e) {
        throw Error("Error occured while Finding the Encuesta")
    }
    // If no old User Object exists return false
    if (!oldEncuesta) {
        return false;
    }
    //Edit the User Object
    oldEncuesta.titulo = encuesta.titulo
    oldEncuesta.sector = encuesta.sector
    oldEncuesta.tamaño = encuesta.tamaño
 
    try {
        var savedEncuesta = await oldEncuesta.save()
        return savedEncuesta;
    } catch (e) {
        throw Error("And Error occured while updating the Encuesta");
    }
}

exports.deleteEncuesta = async function (id) {

    // Delete the Encuesta
    try {
        var deleted = await Encuesta.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("User Could not be deleted")
        }
        return deleted;
    } catch (e) {
        console.log(e)
        throw Error("Error Occured while Deleting the User")
    }
}
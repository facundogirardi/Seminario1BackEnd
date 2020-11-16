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
        respuesta1: encuesta.respuesta1,
        varlorref1: encuesta.varlorref1,

        pregunta2: encuesta.pregunta2,
        respuesta2: encuesta.respuesta2,
        varlorref2: encuesta.varlorref2,

        pregunta3: encuesta.pregunta3,
        respuesta3: encuesta.respuesta3,
        varlorref3: encuesta.varlorref3,

        pregunta4: encuesta.pregunta4,
        respuesta4: encuesta.respuesta4,
        varlorref4: encuesta.varlorref4,

        pregunta5: encuesta.pregunta5,
        respuesta5: encuesta.respuesta5,
        varlorref5: encuesta.varlorref5,
        
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
    
    var id = {titulo :encuesta.titulo}
    

    try {
        //Find the old User Object by the Id
        var oldEncuesta = await Encuesta.findOne(id);
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
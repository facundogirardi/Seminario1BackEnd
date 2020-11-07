// Gettign the Newly created Mongoose Model we just created 
var Encuesta = require('../models/Encuesta.model');
var bcrypt = require('bcryptjs');
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
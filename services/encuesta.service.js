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
        Pregunta1: encuesta.Pregunta1,
        Respuesta1: encuesta.Respuesta1,
        Varlorref1: encuesta.Varlorref1,
        Pregunta2: encuesta.Pregunta2,
        Respuesta2: encuesta.Respuesta2,
        Varlorref2: encuesta.Varlorref2,
        Pregunta3: encuesta.Pregunta3,
        Respuesta3: encuesta.Respuesta3,
        Varlorref3: rencuesta.Varlorref3,
        Pregunta4: encuesta.Pregunta4,
        Respuesta4: encuesta.Respuesta4,
        Varlorref4: encuesta.Varlorref4,
        Pregunta5: encuesta.Pregunta5,
        Respuesta5: encuesta.Respuesta5,
        Varlorref5: encuesta.Varlorref5,
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
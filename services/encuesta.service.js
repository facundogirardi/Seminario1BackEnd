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
        P1respuesta3: encuesta.P1respuesta3,
        P1opcion3: encuesta.P1opcion3,
        P1respuesta4: encuesta.P1respuesta4,
        P1opcion4: encuesta.P1opcion4,
        P1respuesta5: encuesta.P1respuesta5,
        P1opcion5: encuesta.P1opcion5,
        P1valorref1: encuesta.P1valorref1,

        pregunta2: encuesta.pregunta2,
        P2respuesta1: encuesta.P2respuesta1,
        P2opcion1: encuesta.P2opcion1,
        P2respuesta2: encuesta.P2respuesta2,
        P2opcion2: encuesta.P2opcion2,
        P2respuesta3: encuesta.P2respuesta3,
        P2opcion3: encuesta.P2opcion3,
        P2respuesta4: encuesta.P2respuesta4,
        P2opcion4: encuesta.P2opcion4,
        P2respuesta5: encuesta.P2respuesta5,
        P2opcion5: encuesta.P2opcion5,
        P2valorref1: encuesta.P2valorref1,
        
        pregunta3: encuesta.pregunta3,
        P3respuesta1: encuesta.P3respuesta1,
        P3opcion1: encuesta.P3opcion1,
        P3respuesta2: encuesta.P3respuesta2,
        P3opcion2: encuesta.P3opcion2,
        P3respuesta3: encuesta.P3respuesta3,
        P3opcion3: encuesta.P3opcion3,
        P3respuesta4: encuesta.P3respuesta4,
        P3opcion4: encuesta.P3opcion4,
        P3respuesta5: encuesta.P3respuesta5,
        P3opcion5: encuesta.P3opcion5,
        P3valorref1: encuesta.P3valorref1,

        pregunta4: encuesta.pregunta4,
        P4respuesta1: encuesta.P4respuesta1,
        P4opcion1: encuesta.P4opcion1,
        P4respuesta2: encuesta.P4respuesta2,
        P4opcion2: encuesta.P4opcion2,
        P4respuesta3: encuesta.P4respuesta3,
        P4opcion3: encuesta.P4opcion3,
        P4respuesta4: encuesta.P4respuesta4,
        P4opcion4: encuesta.P4opcion4,
        P4respuesta5: encuesta.P4respuesta5,
        P4opcion5: encuesta.P4opcion5,
        P4valorref1: encuesta.P4valorref1,

        pregunta5: encuesta.pregunta5,
        P5respuesta1: encuesta.P5respuesta1,
        P5opcion1: encuesta.P5opcion1,
        P5respuesta2: encuesta.P5respuesta2,
        P5opcion2: encuesta.P5opcion2,
        P5respuesta3: encuesta.P5respuesta3,
        P5opcion3: encuesta.P5opcion3,
        P5respuesta4: encuesta.P5respuesta4,
        P5opcion4: encuesta.P5opcion4,
        P5respuesta5: encuesta.P5respuesta5,
        P5opcion5: encuesta.P5opcion5,
        P5valorref1: encuesta.P5valorref1,

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
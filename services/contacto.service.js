// Gettign the Newly created Mongoose Model we just created 
var Contacto = require('../models/Contacto.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

exports.createContacto = async function (contacto) {
    // Creating a new Mongoose Object by using the new keyword
     var newContacto = new Contacto({
        razonsocial: contacto.razonsocial,
        email: contacto.email,
        region: contacto.region,
        tamaño: contacto.tamaño,
        date: new Date(),

    })

    try {
        // Saving the Contacto 
        var savedContacto = await newContacto.save();
        var token = jwt.sign({
            id: savedContacto._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Contacto")
    }
}
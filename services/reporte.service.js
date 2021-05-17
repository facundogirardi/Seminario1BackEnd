var Reporte = require('../models/Reporte.model');
var jwt = require('jsonwebtoken');

_this = this

// Creo reporte
exports.createReporte = async function (reporte) {
    var newReporte = new Reporte({
        droga: reporte.droga,
        marca: reporte.marca,
        presentacion: reporte.presentacion,
        precio: reporte.precio,
        laboratorio: reporte.laboratorio,
        mes1: reporte.mes1,
        mes2: reporte.mes2,
        mes3: reporte.mes3,
        date: new Date()

    })

    try {
        var savedReporte = await newReporte.save();
        var token = jwt.sign({
            id: savedReporte._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        console.log(e)
        throw Error("Error al crear la reporte")
    }
}

// Recupero Reporte
exports.getReporte = async function (query, page, limit) {

    var options = {
        page,
        limit
    }

    try {
        var Reportes = await Reporte.paginate(query, options)
        return Reportes;

    } catch (e) {
        console.log("error servicio", e)
        throw Error('Error en el paginado de las Reporte');
    }
}

// Recupero Reporte por ID
exports.getReporteID = async function (query, page, limit) {
    var options = {
        page,
        limit
    }

    try {
        var Reportes = await ReporteResp.paginate(query, options)
        return Reportes;

    } catch (e) {
        console.log("error servicio", e)
        throw Error('Error en el paginado de las reportes por ID');
    }
}
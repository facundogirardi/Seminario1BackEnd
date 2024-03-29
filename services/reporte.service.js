var Reporte = require('../models/Reporte.model');
var jwt = require('jsonwebtoken');

_this = this

// Creo reporte
exports.createReporte = async function (reporte) {
    var newReporte = new Reporte({
        droga: reporte.droga,
        marca: reporte.marca,
        pedido: reporte.pedido,
        codigopedido: reporte.codigopedido,
        presentacion: reporte.presentacion,
        precio: reporte.precio,
        cantidadvendida: reporte.cantidadvendida,
        acuerdo: reporte.acuerdo,
        valoracuerdo: reporte.valoracuerdo,
        laboratorio: reporte.laboratorio,
        moroso: reporte.moroso,
        valormoroso: reporte.valormoroso,
        cronologico: reporte.cronologico,
        valorcronologico: reporte.valorcronologico,
        resultado: reporte.resultado,
        valorresultado: reporte.valorresultado,
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
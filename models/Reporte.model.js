var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var ReporteSchema = new mongoose.Schema({
    droga: String,
    pedido: String,
    codigodroducto: String,
    marca: String,
    presentacion: String,
    laboratorio: String,
    precio: Number,

    cantidadvendida: Number,

    acuerdo: String,
    valoracuerdo: Number,

    mososo: String,
    valormoroso: Number,

    cronologico: String,
    valorcronologico: Number,
  
    resultado: String,
    valorresultado: Number,

    date: Date
})

ReporteSchema.plugin(mongoosePaginate)
const Reporte = mongoose.model('Reporte', ReporteSchema)

module.exports = Reporte;
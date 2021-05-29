var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var ReporteSchema = new mongoose.Schema({
    droga: String,
    marca: String,
    presentacion: String,
    laboratorio: String,
    precio: Number,
    cantidad: Number,
    mes1: Number,
    mes2: Number,
    mes3: Number,
    resultado: String,
    date: Date
})

ReporteSchema.plugin(mongoosePaginate)
const Reporte = mongoose.model('Reporte', ReporteSchema)

module.exports = Reporte;
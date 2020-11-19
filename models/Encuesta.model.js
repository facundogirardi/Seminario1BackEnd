var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var EncuestaSchema = new mongoose.Schema({
    titulo: String,
    sector: String,
    tamaño: String,

    pregunta1: String,
    P1respuesta1: String,
    P1opcion1: String,
    P1respuesta2: String,
    P1opcion2: String,
    P1valorref1: String,
    /*
    P1respuesta3: String,
    P1opcion3: String,
    P1respuesta4: String,
    P1opcion4: String,
    P1respuesta5: String,
    P1opcion5: String,
    
    P1valorref1M: String,*/

})

EncuestaSchema.plugin(mongoosePaginate)
const Encuesta = mongoose.model('Encuesta', EncuestaSchema)

module.exports = Encuesta;
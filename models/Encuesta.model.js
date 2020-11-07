var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var EncuestaSchema = new mongoose.Schema({
    titulo: String,
    Pregunta1: String,
    Respuesta1: String,
    Varlorref1: String,
    Pregunta2: String,
    Respuesta2: String,
    Varlorref2: String,
    Pregunta3: String,
    Respuesta3: String,
    Varlorref3: String,
    Pregunta4: String,
    Respuesta4: String,
    Varlorref4: String,
    Pregunta5: String,
    Respuesta5: String,
    Varlorref5: String
})

EncuestaSchema.plugin(mongoosePaginate)
const Encuesta = mongoose.model('Encuesta', EncuestaSchema)

module.exports = Encuesta;
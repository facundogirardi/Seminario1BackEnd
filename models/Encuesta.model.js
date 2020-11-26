var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var EncuestaSchema = new mongoose.Schema({
    titulo: String,
    sector: String,
    tamaño: String,

    pregunta1: String,
    P1respuesta1: Number,
    P1opcion1: Number,
    P1respuesta2: Number,
    P1opcion2: Number,
    P1respuesta3: Number,
    P1opcion3: Number,
    P1respuesta4: Number,
    P1opcion4: Number,
    P1respuesta5: Number,
    P1opcion5: Number,
    P1valorref1: Number,


    pregunta2: String,
    P2respuesta1: Number,
    P2opcion1: Number,
    P2respuesta2: Number,
    P2opcion2: Number,
    P2respuesta3: Number,
    P2opcion3: Number,
    P2respuesta4: Number,
    P2opcion4: Number,
    P2respuesta5: Number,
    P2opcion5: Number,
    P2valorref1: Number,

    pregunta3: String,
    P3respuesta1: Number,
    P3opcion1: Number,
    P3respuesta2: Number,
    P3opcion2: Number,
    P3respuesta3: Number,
    P3opcion3: Number,
    P3respuesta4: Number,
    P3opcion4: Number,
    P3respuesta5: Number,
    P3opcion5: Number,
    P3valorref1: Number,

    pregunta4: String,
    P4respuesta1: Number,
    P4opcion1: Number,
    P4respuesta2: Number,
    P4opcion2: Number,
    P4respuesta3: Number,
    P4opcion3: Number,
    P4respuesta4: Number,
    P4opcion4: Number,
    P4respuesta5: Number,
    P4opcion5: Number,
    P4valorref1: Number,

    pregunta5: String,
    P5respuesta1: Number,
    P5opcion1: Number,
    P5respuesta2: Number,
    P5opcion2: Number,
    P5respuesta3: Number,
    P5opcion3: Number,
    P5respuesta4: Number,
    P5opcion4: Number,
    P5respuesta5: Number,
    P5opcion5: Number,
    P5valorref1: Number,

    date: Date

})

EncuestaSchema.plugin(mongoosePaginate)
const Encuesta = mongoose.model('Encuesta', EncuestaSchema)

module.exports = Encuesta;
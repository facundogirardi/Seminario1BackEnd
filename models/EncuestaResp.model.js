var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var EncuestaRespSchema = new mongoose.Schema({
    titulo: String,
    sector: String,
    tamaño: String,

    pregunta1: String,
    P1respuesta: String,
    P1valorref: String,

    pregunta2: String,
    P2respuesta: String,
    P2valorref: String,

    pregunta3: String,
    P3respuesta: String,
    P3valorref: String,

    pregunta4: String,
    P4respuesta: String,
    P4valorref: String,

    pregunta5: String,
    P5respuesta: String,
    P5valorref: String,
    
    date: Date

})

EncuestaRespSchema.plugin(mongoosePaginate)
const EncuestaResp = mongoose.model('EncuestaResp', EncuestaRespSchema)

module.exports = EncuestaResp;
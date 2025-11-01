const mongoose = require('mongoose')
const Schema = mongoose.Schema

const interaccionSchema = new Schema({
  userId: {
    type: String,
    required: true // username del usuario que ejecuta la acción
  },
  songId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cancion',
    required: true // referencia al _id de la canción
  },
  action: {
    type: String,
    enum: ['play', 'like', 'skip'], // tipo de acción
    required: true
  },
  ts: {
    type: Date,
    default: Date.now // fecha y hora exacta del evento
  }
}, { timestamps: true })

module.exports = mongoose.model('Interaccion', interaccionSchema)

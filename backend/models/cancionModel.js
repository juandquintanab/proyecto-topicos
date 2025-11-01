const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cancionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: [String], // lista de artistas o intérpretes
    required: true
  },
  album: {
    type: String, // puede ser null si es un sencillo
    default: null
  },
  genres: {
    type: [String], // géneros musicales asociados
    required: true
  },
  year: {
    type: Number, // año de lanzamiento
    required: true
  },
  tags: {
    type: [String], // palabras clave o descriptores
    default: []
  }
}, { timestamps: true })

module.exports = mongoose.model('Cancion', cancionSchema)

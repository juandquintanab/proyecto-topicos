const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true // no puede repetirse ni ser null
  },
  password: {
    type: String,
    required: true // texto plano o encriptado según decisión actual
  },
  name: {
    type: String,
    required: true // nombre real o visible del usuario
  },
  favoriteArtists: {
    type: [String],
    default: [] // lista de artistas favoritos
  },
  favoriteGenres: {
    type: [String],
    default: [] // lista de géneros musicales favoritos
  },
  friends: {
    type: [String],
    default: [] // usernames de amigos
  }
}, { timestamps: true })

module.exports = mongoose.model('Usuario', usuarioSchema)

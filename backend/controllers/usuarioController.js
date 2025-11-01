const Usuario =  require('../models/usuarioModel')


// Crear usuario
const createUsuario = async (req, res) => {
  const {
    username,
    password,
    name,
    favoriteArtists,
    favoriteGenres,
    friends
    } = req.body

  try{
    const usuario = await Usuario.create({
      username,
      password,
      name,
      favoriteArtists: favoriteArtists || [],
      favoriteGenres: favoriteGenres || [],
      friends: friends || []
    })
    res.status(200).json(usuario)
  }catch (error){
    res.status(400).json({error: error.message})
  }
}

module.exports = {createUsuario}
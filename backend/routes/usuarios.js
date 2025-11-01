const express = require('express')
const { 
  createCancion 
} = require('../controllers/cancionController')
const router = express.Router()

// GET 
router.get('/', (req, res) => {
  res.json({mssg: 'lista de usuarios'})
})

// GET
router.get('/:id', (req, res) => {
  res.json({mssg: 'Un solo usuario'})
})

// POST 
router.post('/', createCancion)

// DELETE 
router.delete('/:id', (req, res) => {
  res.json({mssg: 'Eliminar un usuario'})
})

// UPDATE a workout
//router.patch('/:id', (req, res) => {
//  res.json({mssg: 'UPDATE a workout'})
//})

module.exports = router
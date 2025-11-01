const express = require('express')

const router = express.Router()

// GET all interactions
router.get('/', (req, res) => {
  res.json({mssg: 'GET all interactions'})
})

// GET a single interaction
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET an individual interaction'})
})

// POST a new interaction
router.post('/', (req, res) => {
  res.json({mssg: 'POST a new interaction'})
})

// DELETE a interaction
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE an interaction'})
})

// UPDATE a interaction
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a interaction'})
})

module.exports = router
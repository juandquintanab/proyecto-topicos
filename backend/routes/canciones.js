const express = require('express');
const router = express.Router();

//Para obtener la lista de canciones completa
router.get('/', (req, res) => {
    res.json({mssg: 'Lista de canciones'});
});

//Para obtener una canción específica por su ID
router.get('/:id', (req, res) => {
   res.json({mssg: 'Detalles de la canción con ID' });
});

module.exports = router;
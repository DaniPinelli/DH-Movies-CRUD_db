const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');

//Creación

router.get('/crear', peliculasController.crear);

router.post('/crear', peliculasController.guardado);

//Lectura

router.get('/', peliculasController.listado);

//Detalle

router.get('/:id', peliculasController.detalle);

module.exports = router;
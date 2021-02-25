const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');

//Creación

router.get('/crear', peliculasController.crear);

router.post('/crear', peliculasController.guardado);

//Lectura

router.get('/', peliculasController.listado);


module.exports = router;
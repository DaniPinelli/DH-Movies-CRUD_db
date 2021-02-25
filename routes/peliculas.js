const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');

//Creación

router.get('/crear', peliculasController.crear);

router.post('/crear', peliculasController.crear);


module.exports = router;
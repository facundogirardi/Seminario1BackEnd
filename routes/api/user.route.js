var express = require('express')
var router = express.Router()
var ContactoController = require('../../controllers/contacto.controller');
var ReporteController = require('../../controllers/reporte.controller');
var UserController = require('../../controllers/users.controller');
var Authorization = require('../../auth/authorization');

// Endpoints usuarios
router.post('/creopedido', UserController.createUser)
router.get('/tusuarios', UserController.getUsers)
router.post('/usuarioid', UserController.getUsuarioID)

// Endpoints contacto
router.post('/contacto', ContactoController.createContacto)

// Endpoints reporte
router.post('/reporte', ReporteController.createReporte)
router.get('/treporte', ReporteController.getReporte)
router.post('/reporteid', ReporteController.getReporteID)

module.exports = router;
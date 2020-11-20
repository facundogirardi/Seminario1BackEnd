var express = require('express')
var router = express.Router()
var UserController = require('../../controllers/users.controller');
var ContactoController = require('../../controllers/contacto.controller');
var EncuestaController = require('../../controllers/encuesta.controller');
var Authorization = require('../../auth/authorization');

// Endpoints usuarios
router.post('/registration', Authorization, UserController.createUser)
router.post('/login/', UserController.loginUser)
router.get('/tusuarios', Authorization, UserController.getUsers)
router.put('/actualizacion', UserController.updateUser)
router.post('/usr', Authorization, UserController.removeUser)

// Endpoints contacto
router.post('/contacto', Authorization, ContactoController.createContacto)

// Endpoints encuesta
router.post('/encuesta', EncuestaController.createEncuesta)
router.get('/tencuesta', Authorization, EncuestaController.getEncuesta)
router.post('/bencuesta', Authorization, EncuestaController.removeEncuesta)
router.post('/encuestaid', EncuestaController.getEncuestaID)

module.exports = router;
var express = require('express')
var router = express.Router()
var UserController = require('../../controllers/users.controller');
var ContactoController = require('../../controllers/contacto.controller');
var EncuestaController = require('../../controllers/encuesta.controller');
var UploadController = require('../../controllers/upload.controller');
var MailController = require('../../controllers/mail.controller');
var Authorization = require('../../auth/authorization');

// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/user.routes');
  });
router.post('/registration', UserController.createUser)
router.post('/login/', UserController.loginUser)
router.get('/tusuarios', Authorization, UserController.getUsers)
router.get('/',Authorization, UserController.getUsers)
router.post('/userByMail', Authorization, UserController.getUsersByMail)
router.put('/actualizacion', UserController.updateUser)
router.delete('/deleteo', UserController.removeUser)
router.post('/guardarImgUser',UserController.guardarImagenUser)
router.post('/uploadImg',UploadController.uploadFilesImgUser);
router.post('/imgUserByMail',Authorization,UserController.getImagenUserByMail)
router.post('/sendMail',MailController.sendEmail)

router.post('/contacto', ContactoController.createContacto)

router.post('/encuesta', Authorization, EncuestaController.createEncuesta)
router.get('/tencuesta', Authorization, EncuestaController.getEncuesta)
/*router.get('/',Authorization, UserController.getUsers)*/ /*Temporal le quito seguridad*/

// Export the Router
module.exports = router;
const express =require('express');
const router =express.Router();
const controller = require ('../controllers/usersControllers');
const{validationRegister,validationLogin} = require('../middleware/UserValidations')
const guestMiddleware = require('../middleware/guestMiddleware');



router.get('/',guestMiddleware,controller.register),
router.post('/',validationRegister,controller.ProcessRegister)


router.get('/login',guestMiddleware,controller.login)
router.post('/login',validationLogin,controller.processLogin)


router.get('/logout', controller.logout);

    module.exports =router;
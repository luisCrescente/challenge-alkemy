const express =require('express');
const router =express.Router();
const controller = require ('../controllers/usersControllers');
const validations = require('../middleware/RegisterValidations')
const guestMiddleware = require('../middleware/gustMiddelware')

router.get('/',guestMiddleware,controller.register),
router.post('/',validations,controller.ProcessRegister)


router.get('/login',guestMiddleware,controller.login)
router.post('/login',controller.processLogin)



    module.exports =router;
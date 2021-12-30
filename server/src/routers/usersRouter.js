const express =require('express');
const router =express.Router();
const controller = require ('../controllers/usersControllers');
const validations = require('../middleware/RegisterValidations')


router.get('/',controller.register),
router.post('/',validations,controller.ProcessRegister)


router.get('/login',controller.login)
router.post('/login',controller.processLogin)



    module.exports =router;
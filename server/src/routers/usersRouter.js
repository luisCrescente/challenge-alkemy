const express =require('express');
const router =express.Router();
const controller = require ('../controllers/usersApiControllers');
const validations = require('../middleware/userValidations')


router.get('/',controller.register),
router.post('/',validations,controller.ProcessRegister)


router.get('/login',controller.login)
router.post('/login',controller.processLogin)



    module.exports =router;
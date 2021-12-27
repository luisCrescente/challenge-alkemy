const express =require('express');
const router =express.Router();
const controller = require ('../controllers/usersApiControllers');



router.get('/', controller.register),
router.post('/',controller.ProcessRegister)


router.get('/login',controller.login)
router.post('/login',controller.processLogin)



    module.exports =router;
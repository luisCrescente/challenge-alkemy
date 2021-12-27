const express =require('express');
const router =express.Router();
const controller = require ('../controllers/usersApiControllers');



router.get('/register', controller.register),
router.post('/register',controller.ProcessRegister)


router.get('/login',controller.login)
router.post('/login',controller.processLogin)


router.get('profile/:id',controller.profile)

    module.exports =router;
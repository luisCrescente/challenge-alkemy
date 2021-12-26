const express =require('express');
const router =express.Router();
const controller = require ('../controllers/usersApiControllers')


    router.get('/list',controller.show)

    router.get ('/list/:id', controller.showApi)


    router.post ('/register', controller.create)


    router.post ('/login', controller.login)



    router.get('/logout', controller.logout);


    module.exports = router;
const express =require('express');
const router =express.Router();
const controller = require ('../controllers/operationsApiController')


    router.get('/list',controller.show)

    router.post('/create', controller.create)

    //router.put ('/list/:id', controller.edit)

    router.delete('/list/:id', controller.destroy)


    module.exports =router;
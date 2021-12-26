const express =require('express');
const router =express.Router();
const controller = require ('../controllers/operationsApiController')



router.get('/',controller.create)

router.post('/',controller.storage)


router.get('/edit/:id',controller.edit);

router.post('/edit/:id',controller.update);

router.post('/delete/:id', controller.destroy);


    module.exports =router;
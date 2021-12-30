const express =require('express');
const router =express.Router();
const controller = require ('../controllers/operationsController')


router.get('/',controller.table);


router.get('/create',controller.create)
router.post('/create',controller.storage)


router.get('/edit/:id',controller.edit);
router.post('/edit/:id',controller.update);

router.post('/delete/:id',controller.destroy);


    module.exports =router;
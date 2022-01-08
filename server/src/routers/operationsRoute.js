const express =require('express');
const router =express.Router();
const controller = require ('../controllers/operationsController');
const authMiddleware = require('../middleware/authUser');

router.get('/',authMiddleware,controller.table);


router.get('/create',authMiddleware,controller.create)
router.post('/create',controller.storage)


router.get('/edit/:id',authMiddleware,controller.edit);
router.post('/edit/:id',controller.update);

router.post('/delete/:id',controller.destroy);


    module.exports =router;
const express = require('express');
const router = express.Router();
const controller = require('../controller/operationControllers')


//router.get('/list',controller.show)

router.get("/api/operations", controller.conection);

router.get('/api/operations', controller.insert);

router.get('/list', controller.detailApi)


module.exports = router;
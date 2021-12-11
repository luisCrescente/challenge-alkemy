const express = require('express');
const router = express.Router();
const controller = require('../controllers/operationsApiController');


router.get('/operations', controller.detailApi);



module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controllers/operationsApiController');


router.get('/all', controller.detailApi);



module.exports = router;
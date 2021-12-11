const express = require('express');
const router = express.Router();
const controller = require('../controllers/typeApiController');

    router.get('/types', controller.detail)

module.exports = router;
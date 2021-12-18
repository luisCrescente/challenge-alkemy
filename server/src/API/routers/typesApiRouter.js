const express = require('express');
const router = express.Router();
const controller = require('../controllers/typeApiController');

router.get('/api/types', controller.conection);

router.get('/show', controller.detail)

module.exports = router;
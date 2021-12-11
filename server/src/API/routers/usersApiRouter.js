const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersApiControllers');



    router.get('/users',controller.list)
    


module.exports = router;
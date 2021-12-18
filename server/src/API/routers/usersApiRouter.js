const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersApiControllers')


router.get("/api/users", controller.conection);

router.post("/api/insert", controller.insert);

router.post("/api/login", controller.login);

router.get('/list', controller.show);


router.get('/list/:id', controller.showApi);


module.exports = router;
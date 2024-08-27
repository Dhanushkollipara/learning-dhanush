var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users')


router.get('/', usersController.getUserss);
router.post("/",usersController.createuser)
router.post("/login",usersController.login)



module.exports = router;

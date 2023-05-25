var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/register', userController.renderRegistrationForm);
router.post('/register', userController.register);
router.get('/login', userController.renderLogin);

router.post('/login', userController.login);
router.get('/logout', userController.logout);

router.get('/viewAll', userController.renderChoices);
module.exports = router;

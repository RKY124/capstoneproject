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
router.get('/view', userController.renderResult);
router.get('/viewPaper', userController.renderResultPaper);
router.get('/viewScissors', userController.renderResultScissors);
router.get('/choices', userController.renderChoicesMedium);
router.get('/result', userController.renderResultMedium);
router.get('/turn', function(req, res) {
  let playerChoice = req.query.choice;
  let pcChoice = getPcChoice(['rock', 'paper', 'scissors']);
  let winner = pickWinner(playerChoice, pcChoice);
  res.render('medium/result', {
    playerChoice: playerChoice,
    pcChoice: pcChoice,
    winner: winner
  });
});

module.exports = router;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getPcChoice(options){
  let choiceIndex = getRandomInt(3);
  return options[choiceIndex];
}

function pickWinner(playerChoice, pcChoice){
  if (playerChoice === pcChoice){
    return 'draw';
  }
  if (playerChoice === 'rock'){
    if (pcChoice === 'paper'){
      return 'pc';
    }
    if (pcChoice === 'scissors'){
      return 'player';
    }
  }
  if (playerChoice === 'paper'){
    if (pcChoice === 'rock'){
      return 'player';
    }
    if (pcChoice === 'scissors'){
      return 'pc';
    }
  }
  if (playerChoice === 'scissors'){
    if (pcChoice === 'rock'){
      return 'pc';
    }
    if (pcChoice === 'paper'){
      return 'player';
    }
  }
  return 'invalid';
}

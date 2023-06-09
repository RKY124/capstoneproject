const {User} = require('../models');
const md5 = require('md5');
const passport = require('passport');

module.exports.renderRegistrationForm = async function(req, res){
    res.render('users/register');
};
module.exports.register = async function(req, res){
    await User.create({
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password)
    });
    res.redirect('/login')
};
module.exports.renderLogin = function(req, res){
    res.render('users/login')
};

module.exports.login = passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect: '/login',
    failureMessage: true
});

module.exports.logout = function(req, res){
    req.logout();
    res.redirect('/login');
};

module.exports.renderChoices = async function(req, res){
    res.render('easy/viewAll');
};

module.exports.renderResult = async function(req, res){
    res.render('easy/view');
};

module.exports.renderResultPaper = async function(req, res){
    res.render('easy/viewPaper');
};

module.exports.renderResultScissors = async function(req, res){
    res.render('easy/viewScissors');
};

module.exports.renderChoicesMedium = async function(req, res){
    res.render('medium/choices');
};

module.exports.renderResultMedium = async function(req, res){
    res.render('medium/result');
};
const {User} = require('../models');
const md5 = require('md5');

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

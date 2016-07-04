var Router = require('express').Router();
var verifyUser = require('./auth').verifyUser;
var controller = require('./authController');

// before we send back a jwt, lets check
// user's email and password match what is in the DB
Router.post('/signin', verifyUser(), controller.signin);

module.exports = Router;

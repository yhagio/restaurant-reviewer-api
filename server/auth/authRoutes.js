var Router = require('express').Router();
var verifyUser = require('./auth').verifyUser;
var decodeToken = require('./auth').decodeToken;
var getSignedInUserData = require('./auth').getSignedInUserData;
var controller = require('./authController');

// before we send back a jwt, lets check
// user's email and password match what is in the DB
Router.post('/signin', verifyUser(), controller.signin);

// Get user data for already-signed-in user
Router.get('/userdata', decodeToken(), getSignedInUserData());

module.exports = Router;

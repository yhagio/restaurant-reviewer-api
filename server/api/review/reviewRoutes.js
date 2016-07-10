var Router = require('express').Router();
var controller = require('./reviewController');
var auth = require('../../auth/auth');

var checkUser = [auth.decodeToken(), auth.getFreshUser()];

// Router.route('/restaurants/:id')
//   .post(controller.createReview);

Router.route('/create-review')
  .post(checkUser, controller.createReview);

module.exports = Router;

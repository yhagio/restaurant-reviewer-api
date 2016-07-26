var express = require('express');
var app = express();
var config = require('./config/config');
var auth = require('./auth/authRoutes');
var api = require('./api/api');

// Database setup
var mongoose = require('mongoose');

console.log('config!!', config);
mongoose.connect(config.db.url, function() {
  console.log('Connected Database URL: '+ config.db.url);
});

require('./config/middlewares')(app);

// setup the api
app.use('/api', api);
app.use('/auth', auth);

// Global Error Handling
app.use(function(err, req, res, next) {
  // if error thrown from jwt validation check
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }
  res.status(500).send('Something went wrong.');
});

module.exports = app;

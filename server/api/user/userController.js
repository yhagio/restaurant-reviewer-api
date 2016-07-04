var User = require('./userModel');
var signToken = require('../../auth/auth').signToken;

exports.saveUser = function(req, res, next) {
  console.log('Coming!');

  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  // Check if any fields are empty
  if (!username || !email || !password) {
    return res
            .status(422)
            .send({ error: 'Username, email, and password are required.' });
  }

  // Check if email already exists
  User.findOne({ email: email}, function(err, existingUser) {
    if (err) return next(err);

    // if the email exists return error
    if (existingUser) {
      return res
              .status(422)
              .send({ error: 'The email is already registered.' });
    }

    // Create a new user object
    var newUser = new User({
      username: username,
      email: email,
      password: password
    });

    // Save the new user into the database
    newUser.save(function(err, userData) {
      if (err) return next(err);

      // Respond to request indicating that the user was created
      res.json({ token: signToken(userData._id) });
    });

  });
};

exports.getUser = function(req, res, next) {
  User.findById(req.params.id)
    .select('-password')
    .exec()
    .then(function(user) {
      if (!user) {
        next(new Error('No user with that id'));
      } else {
        res.json(user);
      }
    }, function(err) {
      next(err);
    });
};

var Review = require('./reviewModel');
var Restaurant = require('../restaurant/restaurantModel');

exports.createReview = function(req, res, next) {
  console.log('[createReview user]', req.user);
  console.log('[createReview params]', req.params);
  console.log('[createReview body]', req.body);

  var comment = req.body.comment;
  var author = req.user._id;
  var restaurant = req.params.id;
  var rating = req.body.rating;


  var newReview = new Review({
    comment: comment,
    author: author,
    restaurant: restaurant,
    rating: rating
  });

  // Save review
  newReview.save(function(err, review) {
    console.log('Review Save ERR', err);
    if (err) return next(err);

    // Increment the restaurant's total rating and add new one in reviews array
    var query = {_id: restaurant};
    var update = {
      $inc: { total_ratings: rating},
      $addToSet: { reviews: review._id }
    };

    Restaurant.findOneAndUpdate(query, update, function(error, result) {
      console.log('Review Save > Res Update ERROR', error);
      if (error) return next(error);
      return res.json(review);
    });

  });
}

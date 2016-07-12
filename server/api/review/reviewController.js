var Review = require('./reviewModel');
var Restaurant = require('../restaurant/restaurantModel');

exports.createReview = function(req, res, next) {
  console.log('[createReview user]', req.user);
  console.log('[createReview params]', req.params);
  console.log('[createReview body]', req.body);

  var comment = req.body.comment;
  var author = req.user._id;
  var restaurant = req.params.id || 1;
  var rating = req.body.rating;


  var newReview = new Review({
    comment: comment,
    author: author,
    restaurant: restaurant,
    rating: rating
  });

  newReview.save(function(err, review) {
    if (err) return next(err);
    
    // Update the restaurant's total rating
    var query = {_id: restaurant};
    var update = {$inc: { total_ratings: rating}};
    Restaurant.findOneAndUpdate(query, update, function(error, result) {
      if (error) return next(error);
      return res.json(review);
    });

  });
}

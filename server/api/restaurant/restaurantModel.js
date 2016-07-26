var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  photo: {
    type: String,
    required: true
  },

  hours: {
    mon_start: { type: Number, default: 10},
    mon_end: { type: Number, default: 21},
    tue_start: { type: Number, default: 10},
    tue_end: { type: Number, default: 21},
    wed_start: { type: Number, default: 10},
    wed_end: { type: Number, default: 21},
    thu_start: { type: Number, default: 11},
    thu_end: { type: Number, default: 21},
    fri_start: { type: Number, default: 11},
    fri_end: { type: Number, default: 23},
    sat_start: { type: Number, default: 11},
    sat_end: { type: Number, default: 23},
    sun_start: { type: Number, default: 11},
    sun_end: { type: Number, default: 21}
  },

  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'review'
  }],

  total_ratings: {
    type: Number,
    default: 0
  },

  category: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('restaurant', RestaurantSchema);

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
    type: String
  },

  hours: {
    mon_start: { type: Number },
    mon_end: { type: Number },
    tue_start: { type: Number },
    tue_end: { type: Number },
    wed_start: { type: Number },
    wed_end: { type: Number },
    thu_start: { type: Number },
    thu_end: { type: Number },
    fri_start: { type: Number },
    fri_end: { type: Number },
    sat_start: { type: Number },
    sat_end: { type: Number },
    sun_start: { type: Number },
    sun_end: { type: Number }
  },

  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'review'
  }]

});

module.exports = mongoose.model('restaurant', RestaurantSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  comment: {
    type: String,
    required: true
  },

  created: {
    type: Date,
    default: Date.now
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },

  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'restaurant'
  },

  rating: {
    type: Number,
    required: true
  }
});

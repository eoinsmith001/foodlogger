var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MealEntrySchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  meal: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('MealEntry', MealEntrySchema);

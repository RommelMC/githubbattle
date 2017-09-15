// require mongoose
var mongoose = require('mongoose');
// create the schema
var UserSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  score: {type: Number},
  image: {type: String}
},{timestamp: true})
// register the schema as a model

var User = mongoose.model('User', UserSchema);
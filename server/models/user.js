var mongoose = require('mongoose');

var schema = mongoose.Schema;

var userSchema = new schema({
    date: {
      type: String,
      required: [true, "date is reqiered"]
    },
    provider: {
      type: String,
      required: [true, "provider required"]
    },
    name: {
      type: String,
      min: [5, 'name length must be at least 5'],
      max: [20, 'name length cant be more then 20'],
      required: [true, "name cant be empty"]
    },
    email: {
      type: String,
      min: [10, 'email length must be at least 10'],
      max: [30, 'email length cant be more then 30'],
      required: [true, "email cant be empty"]
    },
    profileImg: {
      type: String,
      required: [true, "profileImg cant be empty"]
    },
    role: {
      type: String,
      required: [true, "user must have a role"]
    }, 
    isbanned: {
      type: Boolean,
      required: [true, "user must have an is banned value"]
    },
  })
  
  var user = mongoose.model('User', userSchema, 'users');

  module.exports = user;
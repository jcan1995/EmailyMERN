const mongoose = require('mongoose');
/* 'mongoose' has a property called Schema.
  Take it out and assign it to this variable.
  Some ES6 destructuring for ya.*/
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);

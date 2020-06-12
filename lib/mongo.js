const mongoose = require('mongoose');
mongoose.connect('blabla')

exports.default = {
  instance: function () {
    return mongoose;
  }
}
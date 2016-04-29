'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('appModel', {
  string : {type : String, default: ''}
});

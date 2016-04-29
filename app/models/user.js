//get instance of mongoose and mongoose schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//setup mongoose model and pass to module.exports

module.exports = mongoose.model('User', new Schema({
    username: String,
    password : String,
    firstname : String,
    lastname : String,
    phone : String,
    streetaddress : String,
    city : String,
    state : String,
    zip : String,
    admin : Boolean
}));
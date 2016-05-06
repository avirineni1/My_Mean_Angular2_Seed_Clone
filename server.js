'use strict';

// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User   = require('./app/models/user'); // get our mongoose model


// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.use(express.static(__dirname + '/public'));
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// =======================
// routes ================
// =======================
// basic route
//app.get('/', function(req, res) {
//   res.send('Hello! The API is at http://localhost:' + port + '/api');
//});

app.get('/setup', function(req, res) {
  var hash = bcrypt.hashSync('ajay', salt);
  // create a sample user
  var ajay = new User({
    username: 'avirineni',
    firstname: 'ajay',
    lastname: 'averineni',
    password: hash,
    admin: true
  });

  // save the sample user
  ajay.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

// API ROUTES -------------------
// get an instance of the router for api routes
var apiRoutes = express.Router();

// TODO: route to authenticate a user (POST http://localhost:8080/api/authenticate)

// TODO: route middleware to verify a token


// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function(req, res) {
  //if (req.body.hasOwnProperty('email') && req.body.hasOwnProperty('password')) {
    // find the user
    User.findOne({
      name: req.body.name
    }, function (err, user) {

      if (err) throw err;

      if (!user) {
        res.json({success: false, message: 'Authentication failed. User not found.'});
      } else if (user) {

        // check if password matches
        if (!(bcrypt.compareSync(req.body.password, user.password))) {
          res.json({success: false, message: 'Authentication failed. Wrong password.'});
        } else {

          // if user is found and password is right
          // create a token
          var token = jwt.sign(user, app.get('superSecret'), {
            expiresIn: 1440 // expires in 24 hours
          });

          // return the information including token as JSON
          res.json({
            success_message: true,
            message: 'Enjoy your token!',
            token_id: token
          });
        }

      }

    });
});

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});


// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/logout', function(req, res) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        //token.setValue('');
        return res.json({ success: true, message: 'Logged put succesfully.' });
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
});

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// application -------------------------------------------------------------
/*app.get('*', function(req, res) {
    res.sendfile('public/app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  //res.sendfile('./public/app/index.html');
});*/

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
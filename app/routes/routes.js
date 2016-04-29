'use strict';

var appModel = require('../models/app-model');

module.exports = function(app) {

  app.get("*", function(req, res) {
    // Angular will handle the page changes on front-end
    res.sendFile('public/index.html', {'root': './'});
  });

  // Use your model on the others routes
};

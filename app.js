var express, app;

(function(){
  "use strict"
  express = require('express');
  app = express();
})();

// Get Routes
var routes = require('./routes');

// Handle Errors
var errors = require('./controllers/errors');

// Start The Server
var startServer = require('./server');

// set up handlebars view engine
(routes.viewEngine(app));

// static
(app.use(express.static('public')));

(app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  next();
}));

// exp: (app.get) functions
(routes.getFunc(app));

// custom 404 page
(app.use(errors.notFound));

// custom 500 page
(app.use(errors.internalServer));

(startServer(app));
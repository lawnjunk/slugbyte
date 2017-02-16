'use strict';


// init and export express app 
let app = module.exports = require('express')();

// register app middleware
app.use(require('cors')());
app.use(require('morgan')(process.env.LOG_FORMAT));

// register app routes
app.use(require('./route/tutorial.js'));

// register app error middleware
app.use(require('./middleware/error-handler.js'));

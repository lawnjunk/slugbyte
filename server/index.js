'use strict';


let express = require('express');
let app = module.exports = require('express')();

// register app middleware
app.use(require('cors')());
app.use(require('morgan')(process.env.LOG_FORMAT));

// register app routes
app.use(require('./route/tutorial.js'));
app.use(require('./route/github-webhook.js'));
app.use(express.static(`${__dirname}/../build`));
app.get('*', (req, res) =>  res.redirect('/'));

// register app error middleware
app.use(require('./middleware/error-handler.js'));

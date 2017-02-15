'use strict';

// import npm modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); 

// init and export express app 
let app = module.exports = express();

// register app middleware
app.use(cors());
app.use(morgan(process.env.LOG_FORMAT));

// register app routes

// register app error middleware

'use strict';

const {Router} = require('express');
const error = require('http-errors');

let router = module.exports = new Router();

router.get('/api/tutorial', (req, res, next) => {
  res.json({boo: 'yeah!'});
});


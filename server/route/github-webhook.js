'use strict'

let {Router} = require('express');
let router = module.exports = new Router();

router.get('/api/github-webhook', (req, res, next) => {
  res.send('Boooooyea!');
});

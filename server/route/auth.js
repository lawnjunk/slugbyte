'use strict'

let {Router} = require('express')
let token = require('../lib/token.js')
let basic = require('../middleware/basic.js')

let router = module.exports = new Router()

router.get('/api/login', basic, (req, res, next) => {
  token.create()
  .then(token => res.send(token))
  .catch(next)
})

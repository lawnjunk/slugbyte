'use strict'

let error = require('http-errors')
let password = require('../lib/password.js')

module.exports = (req, res, next) => {
  if(!req.headers.authorization)
    return next(error(401, 'no auth header'))
  
  let encoded = req.headers.authorization.split('Basic ')[1]
  if(!encoded) 
    return next(error(401, 'no basic auth'))

  let decoded = new Buffer(encoded, 'base64').toString()
  if(!decoded) 
    return next(error(401, 'invalid basic auth'))

  let [user, pass] = decoded.split(':')

  if(!user || !pass)
    return next(error(401, 'user || pass was missing'))

  if(user !== process.env.ADMIN_ACCOUNT)
    return next(error(401, `${user} is not admin`))

  password.compare(pass)
  .then(() => {
    next()
  })
  .catch(next)
}

'use strict'

let jwt = require('jsonwebtoken')
let error = require('http-errors')

let token = module.exports = {}
token.create = function(){
  return new Promise((resolve, reject) => {
    jwt.sign({timeStamp: Date.now()}, process.env.APP_SECRET, {}, (err, encoded) => {
      if(err) return reject(err)
      resolve(encoded)
    })
  })
}

token.validate = function(_token){
  return new Promise((resolve, reject) => {
    let hourAgoInMiliseconds = Date.now() - 3600000

    jwt.verify(_token, process.env.APP_SECRET, (err, decoded) => {
      if(err) return reject(error(401, err.message))
      if(decoded.timeStamp < hourAgoInMiliseconds)
        return reject(error(401, 'token in old'))
      resolve()
    })
  })
}

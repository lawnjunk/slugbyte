'use strict'

let crypto = require('crypto')
let expect = require('expect')
let error = require('http-errors')

const password = module.exports = {}

password.hash = (password) => {
  return new Promise((resolve, reject) => {
    let hmac = crypto.createHmac('sha256', process.env.APP_SECRET)
    hmac.on('readable', () => {
      let data = hmac.read()
      if(data)
        return resolve(data.toString('hex'))
      reject(error(500, 'unable to hash password'))
    })

    hmac.write(password)
    hmac.end()
  })
}

password.compare = (pass) => {
  return password.hash(pass)
  .then(hash => {
    expect(hash).toEqual(process.env.ADMIN_KEY)
  })
  .catch(err => { throw err })
}

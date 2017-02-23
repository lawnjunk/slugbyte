'use strict'

require('./lib/mock-env.js')

let $ = require('superagent')
let expect = require('expect')
let token = require('../lib/token.js')
let server = require('./lib/server-control.js')

let API_URL = process.env.API_URL
let TEMP_TOKEN

describe('auth router', () => {
  before(server.start)
  after(server.stop)

  it('should respond with a 200 status and token', (done) => {
    $.get(`${API_URL}/login`)
    .auth('testuser', 'helloworld')
    .then(res => {
      expect(res.status).toEqual(200)
      return token.validate(res.text)
    })
    .then(() => done())
    .catch(done)
  })

})

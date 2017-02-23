'use strict';

let app = require('../../index.js')
let server

let serverControl = module.exports = {}

serverControl.start = (done) => {
  if (app.isOn)
    return done()
  server = app.listen(process.env.PORT, () => {
    console.log('serverControl.start', process.env.PORT)
    app.isOn = true
    done()
  })
}

serverControl.stop = (done) => {
  if (!app.isOn)
    return done()
  server.close(() => {
    console.log('serverControl.stop')
    app.isOn = false
    done()
  })
}

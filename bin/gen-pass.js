'use strict'

require('dotenv').config()
let {hash} = require('../server/lib/password.js')

hash(process.argv[2])
.then(console.log)
.catch(console.error)

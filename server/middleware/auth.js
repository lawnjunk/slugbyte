'use strict';

let errors = require('http-errors')

module.exports = function(req, res, next){
  let {Authorization} = req.headers;
  if (Authorization !== process.env.ADMIN_TOKEN)  
    next(errors(401, 'Bad secret'));
  next();
}

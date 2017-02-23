'use strict';

module.exports = (err, req, res, next) => {
  console.log(err)
  if(err.status)
    return res.status(err.status).send(msg);
  return res.sendStatus(500);
};

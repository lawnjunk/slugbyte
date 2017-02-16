'use strict';

module.exports = (err, req, res, next) => {
  if(err.status)
    return res.status(err.status).send(msg);
  return res.sendStatus(500);
};

'use strict';


const {readFile} = require('fs');
const jwt = require('jsonwebtoken');
const request = require('superagent');
const iss = 1409;

console.log('reading');
readFile(`${__dirname}/../slugbyte-content.2017-02-15.private-key.pem`, (err, data) => {
  console.log('read data');
  if (err) return console.error(err);
  let payload = {
    iat: Date.now(),
    exp: Date.now() + 3600,
    iss,
  };
  console.log('wert', data);
  jwt.sign(payload, data.toString(), { algorithm: 'RS256'} , (err, token) => {
    console.log('token', token);
    if (err) return console.error(err);
    request.post(`https://api.github.com/installations/${iss}/access_tokens`)
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/vnd.github.full+json')
      .then(res => {
        console.log('res.status', res.status);
        console.log('booye', res.body);
      })
      .catch(console.error)

  });
})


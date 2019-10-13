'use strict';

const express = require('express');
const request = require('request');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});
app.get('/simple',(req,res) => {
    res.sendFile(path.join(__dirname+'/simple.html'));
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


// const req = http.request(options, (res) => {
//   console.log('res');
// });

request(`http://${HOST}:${PORT}`, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
  console.log(res.body);
});
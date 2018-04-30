// This is  NOT for actual production use.
// This is just useful for hosting the minified production build for
// local debugging purposes.

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coded for simplicity
  res.json([
    {"id": 1, "firstName": "Shruti", "lastName": "Gaikwad", "email": "shruti@gmail.com"},
    {"id": 2, "firstName": "Shruti1", "lastName": "Gaikwad", "email": "shruti2@gmail.com"},
    {"id": 3, "firstName": "Shruti2", "lastName": "Gaikwad", "email": "shruti3@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:'+ port);
  }
});

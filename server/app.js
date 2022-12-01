const express = require('express');
const controller = require('./controller');

const app = express.Router();

app.get('/path/*', controller);
app.get('/', (req, res) => {
  res.send('Please Initialize the explorer using localhost:8000/path/');
});

module.exports = app;

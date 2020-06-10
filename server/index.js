const express = require('express');
const path = require('path');
const db = require('mysql');
const form = require('formidable');
const morgan = require('morgan');

const app = express();
const port = 3000;
const dbPath = path.resolve(__dirname, '..', 'database');
const publicPath = path.resolve(__dirname, '..', 'public');
const clientPath = path.resolve(__dirname, '..', 'client', 'public');

app.use(express.static('clientPath'));
app.use(express.static('publicPath'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).sendFile(clientPath+'/index.html');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



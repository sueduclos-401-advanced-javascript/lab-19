const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3001');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('Homepage');
});

app.listen(3000, () => {
  console.log('App Server is up and running on port 3000');
});
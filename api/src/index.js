require('dotenv/config');
require('./database');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const port = process.env.PORT || 3333;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
  req.io = io;
  return next();
});
app.use(express.json());
app.use(cors());
app.use(routes);

server.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

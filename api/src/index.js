require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const port = process.env.PORT || 3333;
const mongoUrl = process.env.MONGO_URL;
const app = express();

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

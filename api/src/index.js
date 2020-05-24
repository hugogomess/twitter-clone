require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3333;
const mongoUrl = process.env.MONGO_URL;
const app = express();

mongoose.connect(mongoUrl, { useNewUrlParser: true });

app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

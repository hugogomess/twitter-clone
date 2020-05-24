require('dotenv/config');
const express = require('express');

const port = process.env.PORT || 3333;
const app = express();

app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

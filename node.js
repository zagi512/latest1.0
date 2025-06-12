const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send('Hello Bilal Lillah');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/hello`);
});
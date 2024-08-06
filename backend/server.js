const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

app.get('/pulse', (_req, res) => {
  res.status(200).json({
    msg: 'ok',
  });
});

app.listen(port);
console.log(`Server listening on port ${port}`);

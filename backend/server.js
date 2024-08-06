const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 8080;
const app = express();

// Defaults to allow all origins.
app.use(cors());

app.get('/pulse', (_req, res) => {
  res.status(200).json({
    msg: 'ok',
  });
});

app.listen(port);
console.log(`Server listening on port ${port}`);

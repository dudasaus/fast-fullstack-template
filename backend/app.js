import express from 'express';
import cors from 'cors';

const app = express();

// Defaults to allow all origins.
app.use(cors());

app.get('/pulse', (_req, res) => {
  res.status(200).json({
    msg: 'ok',
  });
});

export { app };

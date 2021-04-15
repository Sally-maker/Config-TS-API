import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('fala gay');
});

app.listen(3000);

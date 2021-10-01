import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.debug('ping');
  res.json('Hello!');
});

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Server listening on ${port}...`);
});

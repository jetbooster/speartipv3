import express from 'express';
import { resolve, join } from 'path';

const app = express();

const clientDir = resolve(__dirname, '../../client/build');

console.log(clientDir);

app.use('/', express.static(clientDir));
app.get('/api/*', (req, res) => {
  console.log(req.path);
  res.json({ test: true });
});
app.get('*', (req, res) => {
  res.sendFile(join(clientDir, 'index.html'));
});

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Server listening on ${port}...`);
});

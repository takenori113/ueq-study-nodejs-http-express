import express from 'express';
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/hello', (req, res) => {
  res.json({
    "message": "hello"
  });
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:3001/${port}`)
});
// expressでWebサーバーを実装
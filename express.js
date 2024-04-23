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
  console.log(`Example app listening on port ${port}`)
});
// expressでWebサーバーを実装
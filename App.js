const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
}, (err) => {
  if (err) throw err;
});

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '6230d9984781158228edb25b',
  };
  next();
});

app.use(router);
app.listen(PORT, () => {
  console.log(`Ссылка на сервер: http://localhost:${PORT}`);
});
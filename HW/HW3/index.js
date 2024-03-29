const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const jsonPath = path.join(__dirname, 'pageViews.json');

let pageViews = {};

app.use((req, res, next) => {
  console.log('Поступил запрос', req.method, req.url);

  if (req.url === '/' || req.url === '/index.html') {
    pageViews['index'] = (pageViews['index'] || 0) + 1;
    fs.writeFile(jsonPath, JSON.stringify(pageViews), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(pageViews);
    });
  } else if (req.url === '/about' || req.url === '/about.html') {
    pageViews['about'] = (pageViews['about'] || 0) + 1;
    fs.writeFile(jsonPath, JSON.stringify(pageViews), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(pageViews);
    });
  }

  next();
});

app.get('/pageViews', (req, res) => {
  fs.readFile(jsonPath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const pageViews = JSON.parse(data);
    res.json(pageViews);
  });
});

app.use(express.static('static'));

const port = 3001;

app.listen(port, () => console.log(`Сервер запущен на порту ${port}`));

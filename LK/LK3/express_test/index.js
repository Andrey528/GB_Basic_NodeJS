const express = require('express');
const path = require('path');

const app = express();

// Промежуточный обработчик
app.use(express.static('static')); // Видит все статичные файлы по директории

app.use((req, res, next) => {
  console.log('Поступил запрос', req.method, req.url);
  next(); // Говорит о том, что нужно вызвать основной обработчик
});

app.get('/', (req, res) => res.sendFile('static/index.html'));

// app.get('/', (req, res) => res.send('<h1>Добро пожаловать на мой сайт!</h1>'));
// app.get('/about', (req, res) => res.send('<h1>Страница обо мне</h1>'));
// app.get('/document', (req, res) =>
//   res.sendFile(path.join(__dirname, 'static/index.html'))
// );

const port = 3001;

app.listen(port, () => console.log(`Сервер запущен на порту ${port}`));

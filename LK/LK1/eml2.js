// Простой пример сервера, который слушает запросы и отправляет ответы
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Запрос получен');

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=UTF-8',
  });
  res.end('<h1>Добро пожаловать на мой сайт!</h1>');
});

const port = 3001;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
// Команда запуска node ./eml2.js
// Остановка ctrl + c

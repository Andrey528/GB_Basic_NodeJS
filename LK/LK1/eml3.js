// Простой пример сервера, который слушает запросы и отправляет ответы по разным URL без обработки 404
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Запрос получен');

  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end('<h1>Добро пожаловать на мой сайт!</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end('<h1>About</h1>');
  }
});

const port = 3001;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
// Команда запуска node ./eml3.js
// Остановка ctrl + c

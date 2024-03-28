// Простой пример сервера, который слушает запросы
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Запрос получен');
});

const port = 3001;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
// Команда запуска node ./eml1.js

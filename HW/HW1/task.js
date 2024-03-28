/** Напишите HTTP сервер и реализуйте два обработчика, где:
— По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
— А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
— Также реализуйте обработку несуществующих роутов (404).
— * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.
 */

let mainPageViews = 0;
let aboutPageViews = 0;

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Запрос получен');

  if (req.url === '/') {
    mainPageViews++;
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end(
      `<h1>Добро пожаловать на мой сайт!</h1><p>Просмотры: ${mainPageViews}</p><a href="/about">About page</a>`
    );
  } else if (req.url === '/about') {
    aboutPageViews++;
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end(
      `<h1>About</h1><p>Просмотры: ${aboutPageViews}</p><a href="/">Main page</a>`
    );
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end('<h1>Страница не найдена!</h1>');
  }
});

const port = 3001;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
// Команда запуска node ./eml4.js
// Остановка ctrl + c

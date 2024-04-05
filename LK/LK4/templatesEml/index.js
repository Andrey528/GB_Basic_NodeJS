const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

const articles = [
  { title: 'Article 1', description: 'First awesome article', bold: true },
  { title: 'Article 2', description: 'Second awesome article', bold: false },
  { title: 'Article 3', description: 'Third awesome article', bold: true },
];

app.engine('handlebars', engine()); // Указываем express какой движок генерации будет использован
app.set('view engine', 'handlebars'); // Переменная окружения движка
app.set('views', './views'); // Директория для шаблонов

app.get('/', (req, res) => {
  res.render('home', { layout: 'index', title: 'Home', articles }); // Передаем параметры в шаблон: название файла, данные
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});

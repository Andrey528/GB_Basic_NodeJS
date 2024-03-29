// Инициализируйте проект NPM. Установите библиотеку express. Создайте файл index.js. В файле напишите код который реализует два обработчика по URL “/” и URL “/about”. В каждом обработчике верните HTML код, в котором есть заголовок и ссылка на соседнюю страницу.
const express = require('express');

const app = express();

app.use(express.static('static'));

// app.get('/', (req, res) => res.send(''));
// app.get('/about', (req, res) => res.send(''));

app.listen(3001, () => console.log('Server is running on port 3001'));

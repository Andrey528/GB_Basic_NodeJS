const express = require('express');
const { checkBody, checkParams } = require('./validation/validator');
const { articleSchema, idSchema } = require('./validation/scheme');

const app = express();

let uniqueID = 0;
const articles = [];

app.use(express.json());

/**
 * Получить все статьи
 */
app.get('/articles', (req, res) => {
  res.send({ articles });
});

/**
 * Получить конкретную статью по id
 */
app.get('/articles/:id', checkParams(idSchema), (req, res) => {
  const article = articles.find((a) => a.id === parseInt(req.params.id));
  if (article) {
    res.send(article);
  } else {
    res.status(404);
    res.send({ article: null });
  }
});

/**
 * Добавить новую статью
 */
app.post('/articles', checkBody(articleSchema), (req, res) => {
  uniqueID += 1;
  articles.push({ id: uniqueID, ...req.body });
  res.send({ id: uniqueID });
});

/**
 * Изменить статью по id
 */
app.put(
  '/articles/:id',
  checkParams(idSchema),
  checkBody(articleSchema),
  (req, res) => {
    const article = articles.find((a) => a.id === parseInt(req.params.id));

    if (article) {
      article.title = req.body.title;
      article.content = req.body.content;
      res.send({ article });
    } else {
      res.status(404);
      res.send({ article: null });
    }
  }
);

/**
 * Удалить статью по id
 */
app.delete('/articles/:id', checkParams(idSchema), (req, res) => {
  const article = articles.find((a) => a.id === parseInt(req.params.id));

  if (article) {
    const articleIndex = articles.indexOf(article);
    articles.splice(articleIndex, 1);
    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null });
  }
});

/**
 * Ошибка 404
 */
app.use((req, res) => {
  res.status(404);
  res.send({ error: 'Not found' });
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});

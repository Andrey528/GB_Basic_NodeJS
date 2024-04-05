const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const { checkBody, checkParams } = require('./validation/validator');
const { userSchema, idSchema } = require('./validation/scheme');

const usersDbPath = path.join(__dirname, 'users.json');

const app = express();

app.use(express.json());

/**
 * Получить всех пользователей
 */
app.get('/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync(usersDbPath));
  res.send({ users });
});

/**
 * Получить конкретного пользователя по id
 */
app.get('/users/:id', checkParams(idSchema), (req, res) => {
  const users = JSON.parse(fs.readFileSync(usersDbPath));
  const findUser = users.find((user) => user.id === +req.params.id);

  if (findUser) res.send({ user: findUser });
  else res.status(404).send({ user: null });
});

/**
 * Добавить нового пользователя
 */
app.post('/users', checkBody(userSchema), (req, res) => {
  const users = JSON.parse(fs.readFileSync(usersDbPath));
  const uniqueId = uuidv4();

  users.push({ id: uniqueId, ...req.body });
  fs.writeFileSync(usersDbPath, JSON.stringify(users));
  res.send({ id: uniqueId });
});

/**
 * Изменить пользователя по id
 */
app.put(
  '/users/:id',
  checkParams(idSchema),
  checkBody(userSchema),
  (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersDbPath));
    const findUser = users.find((user) => user.id === +req.params.id);
    if (findUser) {
      users.splice(users.indexOf(findUser), 1, { ...findUser, ...req.body }); // splice() - это метод массива JavaScript, который позволяет изменять содержимое массива, удаляя или добавляя элементы, 1 - это количество элементов, которые мы хотим удалить из массива users, { ...findUser, ...req.body } - это новый объект, который мы хотим добавить в массив users. Мы используем оператор spread (троеточие), чтобы скопировать свойства из объектов findUser и req.body и объединить их в один новый объект. Таким образом, мы изменяем существующий объект findUser, заменяя его свойства на новые свойства из req.body.
      fs.writeFileSync(usersDbPath, JSON.stringify(users));
      res.send({ user: users.find((user) => user.id === +req.params.id) });
    } else {
      res.status(404).send({ user: null });
    }
  }
);

/**
 * Удалить пользователя по id
 */
app.delete('/users/:id', checkParams(idSchema), (req, res) => {
  const users = JSON.parse(fs.readFileSync(usersDbPath));
  const findUser = users.find((user) => user.id === +req.params.id);

  if (findUser) {
    users.splice(users.indexOf(findUser), 1);
    fs.writeFileSync(usersDbPath, JSON.stringify(users));
    res.send({ id: req.params.id });
  } else res.status(404).send({ user: null });
});

/**
 * Ошибка 404
 */
app.use((req, res) => {
  res.status(404).send({ error: 'Not found' });
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});

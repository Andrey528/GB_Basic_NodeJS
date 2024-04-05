const express = require('express');
const fs = require('fs');
const path = require('path');
const joi = require('joi');

const app = express();
app.use(express.json());
const userDbPath = path.join(__dirname, 'user.json');
const usersSchema = joi.object({
  firstName: joi.string().min(2).required(),
  lastName: joi.string().min(2).required(),
  age: joi.number().min(0).required(),
  city: joi.string().min(2),
});

app.get('/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbPath));
  res.send({ users });
});

app.get('/users/:id', (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbPath));
  const findUser = users.find((user) => user.id === +req.params.id);
  res.send({ user: findUser });
});

app.post('/users', (req, res) => {
  const result = usersSchema.validate(req.body);
  if (result.error) {
    return res.status(404).send({ error: result.error.details });
  }

  const users = JSON.parse(fs.readFileSync(userDbPath));
  const uniqueId = users[users.length - 1].id + 1;
  users.push({ id: uniqueId, ...req.body });
  fs.writeFileSync(userDbPath, JSON.stringify(users));
  res.send({ id: uniqueId });
});

app.put('/users/:id', (req, res) => {
  const result = usersSchema.validate(req.body);
  if (result.error) {
    return res.status(404).send({ error: result.error.details });
  }

  const users = JSON.parse(fs.readFileSync(userDbPath));
  const findUser = users.find((user) => user.id === +req.params.id);
  if (findUser) {
    users.splice(users.indexOf(findUser), 1, { ...findUser, ...req.body }); // splice() - это метод массива JavaScript, который позволяет изменять содержимое массива, удаляя или добавляя элементы, 1 - это количество элементов, которые мы хотим удалить из массива users, { ...findUser, ...req.body } - это новый объект, который мы хотим добавить в массив users. Мы используем оператор spread (троеточие), чтобы скопировать свойства из объектов findUser и req.body и объединить их в один новый объект. Таким образом, мы изменяем существующий объект findUser, заменяя его свойства на новые свойства из req.body.
    fs.writeFileSync(userDbPath, JSON.stringify(users));
    res.send({ user: users.find((user) => user.id === +req.params.id) });
  } else {
    res.status(404).send({ error: 'User not found' });
  }
});

app.delete('/users/:id', (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbPath));
  const findUser = users.find((user) => user.id === +req.params.id);
  if (findUser) {
    users.splice(users.indexOf(findUser), 1);
    fs.writeFileSync(userDbPath, JSON.stringify(users));
    res.send({ id: req.params.id });
  } else {
    res.status(404).send({ error: 'User not found' });
  }
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});

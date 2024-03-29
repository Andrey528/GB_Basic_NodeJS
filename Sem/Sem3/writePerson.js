// Создайте файл writePerson.js. Напишите код, который создаст файл person.json в директории запускаемого скрипта и запишет в файл следующий объект.

/**
Подсказки:
- Для преобразования объекта в текст используйте функцию JSON.stringify()
- Для определения пути к файлу, используйте модуль path и его метод .join(), а также глобальное свойство __dirname
- Используйте синхронный метод записи в файл
 */

const path = require('path');
const fs = require('fs');

// const person = {
//   name: 'Ivan',
//   surname: 'Ivanov',
//   age: 30,
//   city: 'Moscow',
// };

// Напишите код, который прочитает файл person.json, уменьшит возраст на 10, изменит город на “Ekaterinburg”, перезапишет исходный файл person.json

const jsonPath = path.join(__dirname, 'person.json');
console.log(jsonPath);

let person;

try {
  person = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
} catch (error) {
  console.error(error);
}

person.age -= 10;
person.city = 'Ekaterinburg';

try {
  fs.writeFileSync(jsonPath, JSON.stringify(person, null, 2));
} catch (error) {
  console.error(error);
}

const baz = require('./baz');
const bar = require('./bar');

console.log(baz);
console.log(bar);

console.log(__dirname); // Путь до директории запускаемого файла
console.log(__filename); // Путь до файла запуска
console.log(process.cwd()); // Путь до директории, из которой запустили код

const fs = require('fs');

// fs.readFile(__filename, 'utf8', (err, data) => {
//   if (err) console.error(err);
//   else console.log(data);
// });

// fs.writeFile(__filename, 'console.log("Hello!")', (err) => {
//   if (err) console.error(err);
//   console.log('The file was saved');
// });

// fs.appendFile(__filename, '\nconsole.log("Hello!");', (err) => {
//   if (err) console.error(err);
//   console.log('The file was saved');
// });

// console.log("Hello!");

// Блокируют поток выполнения скрипта
// try {
//   const result = fs.readFileSync(__filename, 'utf8');
//   console.log(result);
// } catch (err) {
//   console.error(err);
// }

// try {
//   const result = fs.appendFileSync(__filename, '\nconsole.log("Hello!");');
//   console.log('The file was saved!');
// } catch (err) {
//   console.error(err);
// }

// console.log('Hello!');

const path = require('path');
console.log(path.join('/User/Student', 'Desktop/index.js')); // Объединение путей
console.log(path.parse('/User/Student/Desktop/index.js')); // Разбор на объект root, dir, base, ext, name
console.log(path.dirname('/User/Student/Desktop/index.js')); // Возвращает директорию
console.log(path.extname('/User/Student/Desktop/index.js')); // Возвращает расширение файла

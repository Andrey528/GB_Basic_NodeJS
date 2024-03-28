/**
 * Функция возвращает сумму ряда натуральных чисел
 */
function sumOfNumbers(n) {
  if (n === 1) {
    return 1; // базовый случай: сумма для n = 1 равна 1
  } else {
    return n + sumOfNumbers(n - 1); // рекурсивный вызов суммы для n - 1
  }
}

const n = 4;
const sum = sumOfNumbers(n);
console.log('Сумма ряда натуральных чисел до ', n, ':', sum);

/**
 * Call stack
 * 1.
 * 2. sumOfNumbers(4)
 * 3. sumOfNumbers(4), sumOfNumbers(3)
 * 4. sumOfNumbers(4), sumOfNumbers(3), sumOfNumbers(2)
 * 5. sumOfNumbers(4), sumOfNumbers(3), sumOfNumbers(2), sumOfNumbers(1)
 * 6. sumOfNumbers(4), sumOfNumbers(3), sumOfNumbers(2)
 * 7. sumOfNumbers(4), sumOfNumbers(3)
 * 8. sumOfNumbers(4)
 * 9. console.log(...)
 * 10.
 */

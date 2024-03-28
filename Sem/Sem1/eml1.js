// Необходимо описать состояние стека вызовов по мере выполнения скрипта
function calculateDiscriminant(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
}

const a = 1,
  b = -3,
  c = 2;

const discriminant = calculateDiscriminant(a, b, c);
console.log('Дискриминант: ', discriminant);

/**
 * Call stack
 * 1.
 * 2. calculateDiscriminant(a, b, c)
 * 3. calculateDiscriminant(a, b, c), Math.pow(b, 2)
 * 4. calculateDiscriminant(a, b, c)
 * 5. console.log('Дискриминант: ', discriminant)
 * 6.
 */

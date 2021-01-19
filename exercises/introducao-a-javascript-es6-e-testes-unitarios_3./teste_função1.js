const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
const expected = sum(0, 0);
assert.strictEqual(expected, 0, 'esperava o valor 0');
/// implemente seus testes aqui
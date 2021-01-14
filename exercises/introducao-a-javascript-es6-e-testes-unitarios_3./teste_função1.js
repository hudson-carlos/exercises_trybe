const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
const expected = sum(4, 5);
assert.strictEqual(expected, 9, 'esperava o valo 9');
/// implemente seus testes aqui
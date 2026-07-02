// tests.mjs
import assert from 'node:assert';
import test from 'node:test';

test('that 1 is equal 1', () => {
  assert.strictEqual(1, 1);
});

test('that 1 is not equal to 2', () => {
  assert.notStrictEqual(1, 2);
});

// run with `node tests.mjs`

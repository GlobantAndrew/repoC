const test = require('node:test');
const assert = require('node:assert/strict');

const { createGreeting } = require('../index');

test('createGreeting uses default name', () => {
  assert.equal(createGreeting(), 'Hello, World!');
});

test('createGreeting uses provided name', () => {
  assert.equal(createGreeting('Node.js'), 'Hello, Node.js!');
});

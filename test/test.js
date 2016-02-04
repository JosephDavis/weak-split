const assert = require('assert');
const weakSplit = require('../index');

function testCase(string, separator, expected) {
  const actual = weakSplit(string, separator);
  assert(actual.length === expected.length);
  for (var i = 0; i < expected.length; i++) {
    assert(actual[i] === expected[i]);
  }
}

try {
  testCase('/one/two', '/', ['one', 'two']);
  testCase('one/two/', '/', ['one', 'two']);
  testCase('/one/two/', '/', ['one', 'two']);
  testCase('.1.2.3.', /\./, ['1', '2', '3']);
  testCase('Banana, Orange, Apple,', /,\s?/, ['Banana', 'Orange', 'Apple']);

  console.log('Tests passed.');
} catch (e) {
  console.log(`Test failed: ${e}`);
}

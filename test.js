const assert = require('assert')
const formatEmailAddress = require('./')

/**
 * @type {[formatEmailAddress.Input, string][]}
 */
const testCases = [
  [{ address: 'foo@example.com' }, 'foo@example.com'],
  [{ name: '', address: 'foo@example.com' }, 'foo@example.com'],
  [{ name: 'John', address: 'john@example.com' }, 'John <john@example.com>'],
  [{ name: 'John Smith', address: 'john@example.com' }, 'John Smith <john@example.com>'],
  [{ name: 'Jack Sparrow, CPA', address: 'jack@example.com' }, '"Jack Sparrow, CPA" <jack@example.com>'],
  [{ name: 'Linus Unnebäck', address: 'linus@folkdatorn.se' }, '=?utf-8?Q?Linus_Unneb=C3=A4ck?= <linus@folkdatorn.se>']
]

for (const testCase of testCases) {
  assert.equal(formatEmailAddress(testCase[0]), testCase[1])
}

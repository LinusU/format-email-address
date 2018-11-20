# Format Email Address

Format an email address before sending email to it. Useful when sending emails with e.g. [Amazon SES](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html).

Will handle Q-encoding for you, so that unicode characters in the name part show up properly.

## Installation

```sh
npm install --save format-email-address
```

## Usage

```js
const formatEmailAddress = require('format-email-address')

console.log(formatEmailAddress({ name: '', address: 'foo@example.com' }))
//=> foo@example.com

console.log(formatEmailAddress({ name: 'John', address: 'john@example.com' }))
//=> John <john@example.com>

console.log(formatEmailAddress({ name: 'John Smith', address: 'john@example.com' }))
//=> John Smith <john@example.com>

console.log(formatEmailAddress({ name: 'Jack Sparrow, CPA', address: 'jack@example.com' }))
//=> "Jack Sparrow, CPA" <jack@example.com>

console.log(formatEmailAddress({ name: 'Linus Unnebäck', address: 'linus@folkdatorn.se' }))
//=> =?utf-8?Q?Linus_Unneb=C3=A4ck?= <linus@folkdatorn.se>
```

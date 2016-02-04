# Weak Split

Split a string, discarding empty leading and trailing elements in the output.

## Example

```js
const string = 'Banana, Orange, Apple,';
string.split(/,\s?/); // ['Banana', 'Orange', 'Apple', '']

const weakSplit = require('weak-split');
weakSplit(string, /,\s?/); // ['Banana', 'Orange', 'Apple']
```

## Install

```sh
npm install weak-split --save
```

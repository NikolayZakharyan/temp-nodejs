const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

console.log(readFileSync);

const firstPath = path.join('./content/', 'first.txt');

const first = readFileSync(firstPath, 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync(
  './content/result.txt',
  `this is a first - ${first} and alo second ${second}`,
  { flag: 'a' }
);

console.log(second);

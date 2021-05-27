const path = require('path');

const filePath = path.join('/contnent/', 'subcontnent', 'text.txt');

const base = path.basename(filePath);

const absolute = path.resolve(__dirname, 'content', 'subcontnent', 'text.txt');

console.dir(__dirname);

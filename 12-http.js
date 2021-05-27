const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome HOME page');
  }
  if (req.url === '/about') {
    res.end('welcome ABOUT page');
  }
  if (req.url === '/contacts') {
    res.end('welcome CONTACTS page');
  }
  res.end(`
  <h1>OPPs !!!</h1>`);
});

server.listen(5001);
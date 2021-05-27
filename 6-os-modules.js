const {
  userInfo,
  version,
  type,
  totalmem,
  tmpdir,
  platform,
  hostname,
  freemem,
  uptime,
} = require('os');

console.log(' - - -- - - -- - - - uptime');
console.log(uptime());

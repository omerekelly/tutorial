const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/first.txt','utf8');

writeFileSync('./content/result.txt',`Here is the result of: ${first} , ${second},

`,
{flag:'a',}
)
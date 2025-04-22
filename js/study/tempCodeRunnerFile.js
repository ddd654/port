const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync(0, "utf-8").toString().trim().split('\n');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let L = +input[0];

if (L % 5 === 0) {
  console.log(L / 5);
} else {
  console.log(Math.floor(L / 5) + 1);
}
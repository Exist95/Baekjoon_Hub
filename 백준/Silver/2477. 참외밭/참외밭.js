const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const C = +input.shift();
let A = input.map((el) => el.split(" ").map(Number));
let maxW = 0;
let maxH = 0;
let w = 0;
let h = 0;

//짝수는 세로 H
//홀수는 가로 W
for (let i = 0; i < 6; i++) {
  if (i % 2 === 0) {
    if (maxH < A[i][1]) {
      maxH = A[i][1];
    } //50
  } else {
    if (maxW < A[i][1]) {
      maxW = A[i][1];
    } //160
  }
}

for (let i = 0; i < 6; i++) {
  if (i % 2 === 0) {
    //160은 100 이랑 60이랑 비교
    //근데 A[i][1] = 50, 30, 20이 나옴
    //따라서 W와 비교해야 함
    //0, 2, 4
    if (maxW == A[(i + 5) % 6][1] + A[(i + 1) % 6][1]) {
      //51 13 35
      w = A[i][1];
    }
  } else {
    //1, 3, 5
    if (maxH === A[(i + 5) % 6][1] + A[(i + 1) % 6][1]) {
      h = A[i][1];
    }
  }
}
console.log((maxH * maxW - h * w) * C);
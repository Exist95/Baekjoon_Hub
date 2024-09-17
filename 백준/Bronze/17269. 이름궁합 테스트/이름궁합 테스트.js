const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [A, B] = input[1].split(" ");

// 알파벳에 대한 획수 정의
const strokes = {
  'A': 3, 'B': 2, 'C': 1, 'D': 2, 'E': 4,
  'F': 3, 'G': 1, 'H': 3, 'I': 1, 'J': 1,
  'K': 3, 'L': 1, 'M': 3, 'N': 2, 'O': 1,
  'P': 2, 'Q': 2, 'R': 2, 'S': 1, 'T': 2,
  'U': 1, 'V': 1, 'W': 1, 'X': 2, 'Y': 2,
  'Z': 1,
};

// 두 이름을 번갈아가며 결합
let newArr = [];
const minLen = Math.min(N, M);

for (let i = 0; i < minLen; i++) {
  newArr.push(A[i], B[i]); // A와 B의 각 문자를 번갈아 추가
}

// 남은 문자 추가
if (N > M) {
  newArr.push(...A.slice(minLen));
} else if (N < M) {
  newArr.push(...B.slice(minLen));
}

// 각 문자의 획수를 숫자로 변환
let newNum = newArr.map(char => strokes[char]);

// 합산 및 변환 과정
while (newNum.length > 2) {
  let temp = [];
  for (let k = 1; k < newNum.length; k++) {
    let tempNum = newNum[k - 1] + newNum[k];
    if (tempNum >= 10) {
      tempNum -= 10; // 10 이상일 경우 일의 자리만
    }
    temp.push(tempNum);
  }
  newNum = temp; // temp로 업데이트
}

// 최종 결과 출력
const finalResult = newNum[0] * 10 + newNum[1];
console.log(`${finalResult}%`);
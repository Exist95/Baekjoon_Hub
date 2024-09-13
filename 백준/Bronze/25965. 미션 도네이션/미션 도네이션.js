const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let index = 0;
const N = parseInt(input[index++]);

const results = [];

for (let i = 0; i < N; i++) {
  const M = parseInt(input[index++]);

  const missions = [];
  for (let j = 0; j < M; j++) {
    const [K, D, A] = input[index++].split(" ").map(Number);
    missions.push([K, D, A]);
  }
  const [k, d, a] = input[index++].split(" ").map(Number);

  let totalDonation = 0;

  for (const [K, D, A] of missions) {
    let tmp = 0;
    tmp += K * k;
    tmp -= D * d;
    tmp += A * a;

    if (tmp > 0) {
      totalDonation += tmp;
    }
  }

  results.push(totalDonation);
}

results.forEach((result) => console.log(result));
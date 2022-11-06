function solution(n, lost, reserve) {
  const clothes = Array(n).fill(1);

  lost.map((lost) => {
    clothes[lost - 1] = 0;
  });

  reserve.map((reserve) => {
    clothes[reserve - 1] += 1;
  });

  for (let i = 0; i < n; i++) {
    if (clothes[i] === 0 && clothes[i - 1] === 2) {
      clothes[i] = 1;
      clothes[i - 1] = 1;
    } else if (clothes[i] === 0 && clothes[i + 1] === 2) {
      clothes[i] = 1;
      clothes[i + 1] = 1;
    }
  }

  return clothes.filter((c) => c > 0).length;
}
function solution(sizes) {
  let w = sizes.map(el => el[0]);
  let h = sizes.map(el => el[1]);

  for (let i = 0; i < sizes.length; i++) {
    if (w[i] < h[i]) {
      let tmp = w[i];
      w[i] = h[i];
      h[i] = tmp;
    }
  };
  const maxW = Math.max(...w);
  const maxH = Math.max(...h);
  
  const answer = maxW * maxH;
  return answer;
}
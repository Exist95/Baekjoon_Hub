function solution(brown, yellow) {
  let total = brown + yellow; //12
  for (let height = 3; height <= brown; height++) {
    //3 => 12/3 === 0 => weight = 4 => 1*2 === 2
    if (total % height === 0) {
      let weight = total / height;
      if ((height - 2) * (weight - 2) === yellow) {
        return [weight, height];
      }
    }
  }
}
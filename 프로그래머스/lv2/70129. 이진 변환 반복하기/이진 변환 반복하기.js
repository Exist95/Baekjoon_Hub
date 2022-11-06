function solution(s) {
  let zerocnt = 0;
  let loopcnt = 0;

  while (s !== "1") {
    let templeng = [...s].reduce((total, string) => {
      if (string === "0") {
        zerocnt++;
        return total;
      }
      return total + 1;
    }, 0);
    s = templeng.toString(2);
    loopcnt++;
  }
  return [loopcnt, zerocnt];
}
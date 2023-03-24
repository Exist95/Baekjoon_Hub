function solution(chicken) {
  let service = 0;
  let ticket = 0;
  for (let i = chicken; i > 0; i--) {
    ticket++;
    if (ticket === 10) {
      ticket = 1;
      service += 1;
    }
  }
  return service;
}
function solution(cacheSize, cities) {
  cities = cities.map((x) => x.toUpperCase());
  let answer = 0;
  let cache = [];
  if (cities.length === 0) return 0;
  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    let idx = cache.findIndex((x) => x === cities[i]);
    if (idx !== -1) {
      cache.splice(idx, 1);
      answer++;
    } else if (cache.length === cacheSize) {
      answer += 5;
      cache.shift();
    } else {
      answer += 5;
    }
    cache.push(cities[i]);
  }

  
  
  return answer;
}
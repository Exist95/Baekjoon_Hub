const solution = (my_string) =>
  my_string
    .split("")
    .map(Number)
    .filter((el) => !isNaN(el))
    .sort((a, b) => a - b);

console.log(solution("hi12392"));

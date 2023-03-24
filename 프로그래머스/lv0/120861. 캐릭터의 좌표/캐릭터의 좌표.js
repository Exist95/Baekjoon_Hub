function solution(keyinput, board) {
  let wall = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
  let pos = [0, 0];
  let key = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };
  keyinput.forEach((el) => {
    if (
      Math.abs(pos[0] + key[el][0]) <= wall[0] &&
      Math.abs(pos[1] + key[el][1]) <= wall[1]
    ) {
      pos[0] += key[el][0];
      pos[1] += key[el][1];
    }
  });

  return pos;
}
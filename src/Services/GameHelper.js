export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
export const stageCreate = () => {
  return Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
};
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let i = 0; i < player.tetromino.length; i++) {
    for (let j = 0; j < player.tetromino[i].length; j++) {
      if (player.tetromino[i][j] !== 0) {
        if (
          !stage[i + player.pos.y + moveY] ||
          !stage[i + player.pos.y + moveY][j + player.pos.x + moveX] ||
          stage[i + player.pos.y + moveY][j + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};

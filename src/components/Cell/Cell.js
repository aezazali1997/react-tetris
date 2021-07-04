import React, { memo } from "react";
import { StyledCell } from "./Cell.style";
import { TETROMINOS } from "../../Services/tetrominos";
const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>;
};

export default memo(Cell);

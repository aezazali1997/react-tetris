import React from "react";
import Cell from "../Cell/Cell";
import { StyledStage } from "./Stage.style";
const Stage = ({ stage }) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row) => {
        return row.map((cell, x) => {
          return <Cell key={x} type={cell[0]} />;
        });
      })}
    </StyledStage>
  );
};

export default Stage;

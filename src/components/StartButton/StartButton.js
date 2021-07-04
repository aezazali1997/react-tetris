import React from "react";
import { StyledStartButton } from "./StartButton.style";
const StartButton = ({ callback }) => {
  return <StyledStartButton onClick={callback}>start game</StyledStartButton>;
};

export default StartButton;

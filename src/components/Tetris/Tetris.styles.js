import style from "styled-components";
import bgImage from "../../Assets/img/bg.png";
export const StyledTetrisWrapper = style.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage});
  background-size: cover;
  overflow: hidden;
`;
export const StyledTetris = style.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 900px;
  aside {
    width: 100%;
    display: block;
    padding: 0 20px;
    max-width: 200px;
  }
`;

import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/icons/ArrowIcon.svg";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 96px;
  width: 100%;
  padding: var(--padding);
`;
const Container = styled.div`
  margin-top: 32px;
  width: 100%;
  max-width: 1440px;
  position: relative;
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 10px;
`;

const Arrows = styled.div``;

Arrows.Left = styled(Arrow)`
  height: 50px;
  width: 50px;
  & path {
    fill: black;
  }
  position: absolute;
  transform: translate(-50%, -50%);
  left: -80px;
  top: 50%;
  padding: 18px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  background-color: #ffffff20;
  :active {
    background-color: #ffffff60;
  }

  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
`;
Arrows.Right = styled(Arrow)`
  height: 50px;
  width: 50px;
  & path {
    fill: black;
  }
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: green;
  transform: rotate(180deg);
  right: -80px;
  top: 50%;
  padding: 18px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  background-color: #ffffff20;
  :active {
    background-color: #ffffff60;
  }
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
`;
export { Container, Wrapper, Items, Arrows };

import styled from "styled-components";

import { ReactComponent as Arrow } from "../../../assets/icons/ArrowIcon.svg";
const Container = styled.div`
  height: 571px;
  position: relative;
  background-color: black;
`;

const Arrows = styled.div``;

Arrows.Left = styled(Arrow)`
  height: 50px;
  width: 50px;
  color: white;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 32px;
  top: 50%;
  padding: 18px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  background-color: #ffffff20;
  :active {
    background-color: #ffffff60;
  }
`;
Arrows.Right = styled(Arrow)`
  height: 50px;
  width: 50px;
  color: white;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: green;
  transform: rotate(180deg);
  right: 32px;
  top: 50%;
  padding: 18px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  background-color: #ffffff20;
  :active {
    background-color: #ffffff60;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 570px;
  z-index: 0;
  filter: brightness(30%);
`;
const Content = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

Content.Title = styled.div`
  font-family: Montserrat;
  font-size: 44px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: white;
  margin-bottom: 8px;
`;
Content.Subtitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  margin-bottom: 26px;
  color: #ffffff;
`;
Content.Scils = styled.div`
  width: 337px;
  height: 47px;
  border: 2px solid blueItems;
  margin-bottom: 24px;
  gap: 24px;
  display: flex;
`;
Content.Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  margin-bottom: 55px;
  /* identical to box height, or 129% */

  letter-spacing: -0.02em;

  color: #ffffff;
`;
const Items = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  background-color: red;
`;

export { Container, Arrows, Image, Content, Items };

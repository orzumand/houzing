import styled from "styled-components";
import { ReactComponent as Bath } from "../../../assets/icons/bath.svg";
import { ReactComponent as Car } from "../../../assets/icons/car.svg";
import { ReactComponent as Bed } from "../../../assets/icons/bed.svg";
import { ReactComponent as Size } from "../../../assets/icons/ruler.svg";
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
  min-width: 1440px;
  overflow: hidden;
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
  width: 357px;
  height: 57px;
  margin-bottom: 24px;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Icons = styled.div`
  &path {
    fill: white;
  }
`;

Icons.Bath = styled(Bath)`
  margin-top: -2px;
  padding-bottom: 4px;
  & path {
    fill: #ffffff;
  }
`;
Icons.Car = styled(Car)`
  & path {
    fill: #ffffff;
  }
`;
Icons.Bed = styled(Bed)`
  & path {
    fill: #ffffff;
  }
`;
Icons.Size = styled(Size)`
  & path {
    fill: #ffffff;
  }
`;
export { Container, Arrows, Image, Content, Items, Icons };

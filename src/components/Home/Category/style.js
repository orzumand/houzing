import styled from "styled-components";
import { ReactComponent as Calculator } from "../../../assets/icons/calculator.svg";
import { ReactComponent as Home } from "../../../assets/icons/house 1.svg";
import { ReactComponent as Map } from "../../../assets/icons/maps.svg";
import { ReactComponent as Discord } from "../../../assets/icons/discord.svg";
import { ReactComponent as Arrow } from "../../../assets/icons/ArrowIcon.svg";
import { ReactComponent as CategHome } from "../../../assets/icons/CategoryHome.svg";
const Wrapper = styled.div`
  width: 100%;
  padding: 96px 130px;
`;
const Container = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
  max-width: 1440px;
  position: relative;
`;
const Content = styled.div`
  margin-bottom: 32px;
`;
const Card = styled.img`
  max-width: 280px;
  min-width: 230px;
  width: 100%;
  height: 350px;

  filter: brightness(30%);
`;
const CardWrapper = styled.div`
  position: relative;
  max-width: 280px;
  min-width: 230px;
  width: 100%;
`;
const Icon = styled.div``;
Icon.Home = styled(Home)`
  margin-bottom: 16px;
`;
Icon.Calculator = styled(Calculator)`
  margin-bottom: 16px;
`;
Icon.Map = styled(Map)`
  margin-bottom: 16px;
`;
Icon.Discord = styled(Discord)`
  margin-bottom: 16px;
`;
const Title = styled.div`
  position: absolute;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  top: 229px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
const Arrows = styled.div``;

Arrows.Left = styled(Arrow)`
  height: 50px;
  width: 50px;
  position: absolute;
  left: -78px;
  top: 55%;
  padding: 18px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  background-color: #ffffff;
  box-shadow: 0px 20px 50px rgba(13, 38, 59, 0.3);
  :active {
    background-color: #ffffff60;
  }
  & path {
    fill: black;
  }
`;
Arrows.Right = styled(Arrow)`
  height: 50px;
  width: 50px;
  position: absolute;

  transform: rotate(180deg);
  right: -78px;
  top: 55%;
  padding: 18px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  background-color: #ffffff;
  box-shadow: 0px 20px 50px rgba(13, 38, 59, 0.3);
  :active {
    background-color: #ffffff60;
  }
  & path {
    fill: black;
  }
`;

const IconH = styled(CategHome)`
  & path {
    fill: white;
  }
  z-index: 1;
  width: 60px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export {
  Container,
  Wrapper,
  Content,
  Card,
  Icon,
  Title,
  CardWrapper,
  Arrows,
  IconH,
};

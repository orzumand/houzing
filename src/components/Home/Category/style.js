import styled from "styled-components";
import { ReactComponent as Calculator } from "../../../assets/icons/calculator.svg";
import { ReactComponent as Home } from "../../../assets/icons/house 1.svg";
import { ReactComponent as Map } from "../../../assets/icons/maps.svg";
import { ReactComponent as Discord } from "../../../assets/icons/discord.svg";
const Wrapper = styled.div`
  width: 100%;
  height: 434px;
  margin-top: 80px;
  padding: 48px 130px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  max-width: 1180px;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
  gap: 20px;
`;
const Card = styled.img`
  max-width: 280x;
  min-width: 230px;
  width: 100%;
  height: 350px;
  filter: brightness(30%);
`;
const CardWrapper = styled.div`
  position: relative;
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
export { Container, Wrapper, Content, Card, Icon, Title, CardWrapper };

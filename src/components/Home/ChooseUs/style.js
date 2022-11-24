import styled from "styled-components";
import { ReactComponent as Calculator } from "../../../assets/icons/calculator.svg";
import { ReactComponent as Home } from "../../../assets/icons/house 1.svg";
import { ReactComponent as Map } from "../../../assets/icons/maps.svg";
import { ReactComponent as Discord } from "../../../assets/icons/discord.svg";
const Wrapper = styled.div`
  width: 100%;
  height: 434px;
  background: #f5f7fc;
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
`;
const Card = styled.div`
  width: 229px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;
  height: 100%;
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
export { Container, Wrapper, Content, Card, Icon };

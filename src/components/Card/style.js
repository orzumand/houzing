import styled from "styled-components";
import { ReactComponent as Bath } from "../../assets/icons/bath.svg";
import { ReactComponent as Car } from "../../assets/icons/car.svg";
import { ReactComponent as Bed } from "../../assets/icons/bed.svg";
import { ReactComponent as Size } from "../../assets/icons/ruler.svg";
import { ReactComponent as Resize } from "../../assets/icons/resize.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
const Container = styled.div`
  width: 380px;
  height: 429px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e9ec;
  /* filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06)); */
  position: relative;
  background-color: white;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
  height: 100%;
`;

const Body = styled.div`
  padding: 24px 20px 16px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Scils = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
`;
Scils.Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.div`
  height: 60px;
  width: 100%;
  border-top: 3px solid #e6e9ec;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

Footer.Item = styled.div`
  display: ${({ flex }) => flex};
`;
const Icon = styled.div`
  height: 35px;
  width: 35px;
  margin-right: 5px;
  border-radius: 25px;
  background: #f6f8f9;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
const User = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  /* background-color: black; */
  position: absolute;
  top: 52%;
  right: 0;
  border: 2px solid white;
  transform: translate(-50%, -50%);
`;
const Icons = styled.div``;

Icons.Bath = styled(Bath)`
  margin-top: -2px;
  padding-bottom: 4px;
`;
Icons.Car = styled(Car)``;
Icons.Bed = styled(Bed)``;
Icons.Size = styled(Size)``;
Icons.Resize = styled(Resize)``;
Icons.Heart = styled(Heart)`
  margin-bottom: -4px;
  :active {
    & path {
      fill: red;
      background-color: red;
    }
  }
`;
export { Container, Img, Body, Footer, Scils, Icon, User, Icons };

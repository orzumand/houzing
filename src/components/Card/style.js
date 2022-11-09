import styled from "styled-components";

const Container = styled.div`
  width: 380px;
  height: 429px;
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  margin: 100px;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
`;

const Body = styled.div`
  padding: 24px 20px 16px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
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
  background-color: gray;
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
  margin-right: 4px;
  background-color: gray;
`;
const User = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  top: 52%;
  right: 0;
  border: 2px solid white;

  transform: translate(-50%, -50%);
`;
export { Container, Img, Body, Footer, Scils, Icon, User };

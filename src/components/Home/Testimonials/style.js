import styled from "styled-components";

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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  width: 380px;
  height: 197px;
  background: #ffffff;
  /* Box - Shadow */

  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
  /* Font */
  /* Paragraph/Medium/Regular */

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  /* Text / Color */

  color: #696969;

  position: relative;
`;

Card.User = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  top: 115%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Ava = styled.img`
  border: 3px solid white;
  border-radius: 50%;
  width: 40px;
`;
export { Container, Wrapper, Content, Card, Ava };

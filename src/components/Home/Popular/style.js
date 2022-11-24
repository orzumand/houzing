import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 138px;
  min-width: 1440px;
`;
const Image = styled.img`
  width: 100%;
  height: 571px;
  overflow: hidden;
  filter: brightness(30%);
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  gap: 48px;
`;
const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  /* or 129% */
  width: 577px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
`;
export { Wrapper, Image, Content, Title };

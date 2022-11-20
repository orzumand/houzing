import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 30px;
  width: 580px;
  height: 666px;
`;
const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 44px;
  /* identical to box height, or 156% */

  /* Color/2 */

  color: #0d263b;
`;

const Input = styled.input`
  width: 100%;
  /* height: 40px; */
  font-size: 14px;
  color: #696969;
  border: none;
  margin-bottom: 35px;
  border-bottom: 1px solid #e6e9ec;
`;
export { Input, Title, Container, Wrapper };

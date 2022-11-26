import styled from "styled-components";

const Wrapper = styled.div`
  height: 417px;
  background-color: #0d263b;
`;
const Container = styled.div`
  padding: var(--padding);
  padding-top: 48px;
  width: 100%;
  min-width: 1440px;

  display: flex;
  justify-content: space-between;
`;
const Part = styled.div`
  display: flex;
  flex-direction: column;
`;

Part.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;
Part.Subtitle = styled.a`
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  /* Color / 5 */
  margin-bottom: 20px;
  color: #ffffff;
`;
const BottomCon = styled.div`
  margin: var(--padding);
  border-top: 1px solid rgba(255, 255, 255, 0.3); ;
`;
export { BottomCon, Container, Wrapper, Part };

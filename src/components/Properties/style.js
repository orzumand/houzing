import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--padding);
  margin-top: 64px;
`;
const Container = styled.div`
  margin-top: 64px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  width: 100%;
  max-width: 1440px;
`;

export { Container, Wrapper };

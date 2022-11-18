import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--padding);
`;
const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  width: 100%;
  max-width: 1440px;
`;

export { Container, Wrapper };

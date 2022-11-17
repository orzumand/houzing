import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
`;
const Container = styled.div`
  /* margin: var(--padding); */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  /* max-width: 1440px; */
`;

export { Container, Wrapper };

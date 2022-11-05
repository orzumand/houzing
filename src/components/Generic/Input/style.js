import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #ffff ",
        color: "#ffff",
      };

    case "light":
      return {
        background: "white",
        border: "1px solid #E6E9EC ",
        color: "#0D263B",
      };
    default:
      return {
        background: "#0061DF",
        border: "1px solid #0061DF ",
        color: "#ffff",
      };
  }
};
const Container = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  min-width: 120px;
  border-radius: 2px;
  outline: none;
  border: 1px solid #e6e9ec;
  padding-left: ${({ icon }) => (icon ? "44px" : "16px")};
  color: var(--colorPrimary);

  /* ${getType} */
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(-50%, -50%);
`;

export { Container, Wrapper, Icon };

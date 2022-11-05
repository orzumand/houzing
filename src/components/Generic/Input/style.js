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
  padding-left: 16px;

  /* :active {
    transform: scale(0.98);
    opacity: 0.9;
  } */
  /* ${getType} */
`;

export { Container };

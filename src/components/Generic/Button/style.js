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
const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "120px")};
  min-width: 120px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  :active {
    transform: scale(0.98);
    opacity: 0.9;
  }
  ${getType}
`;

export { Container };

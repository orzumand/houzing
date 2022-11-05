import React from "react";
import { Container } from "./style";

const Button = ({ children, type, onClick, width, heigth }) => {
  return (
    <Container onClick={onClick} type={type} width={width} heigth={heigth}>
      {children || "Generic"}
    </Container>
  );
};

export default Button;

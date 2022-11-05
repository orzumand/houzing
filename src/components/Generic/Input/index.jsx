import React from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = ({
  type,
  onChange,
  placeholder,
  width,
  name,
  defaultValue,
  value,
  height,

  icon,
}) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container
        icon={icon}
        placeholder={placeholder}
        width={width}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        height={height}
      />
    </Wrapper>
  );
};

export default Input;

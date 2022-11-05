import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  onChange,
  placeholder,
  width,
  name,
  defaultValue,
  value,
  height,
}) => {
  return (
    <Container
      placeholder={placeholder}
      width={width}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      type={type}
      height={height}
    />
  );
};

export default Input;

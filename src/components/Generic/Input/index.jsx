import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = forwardRef(
  (
    {
      type,
      onChange,
      placeholder,
      width,
      name,
      defaultValue,
      value,
      height,
      mxwidth,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          mxwidth={mxwidth}
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
  }
);

export default Input;

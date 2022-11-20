import React from "react";
import { Button } from "../Generic";
import { Container, Input, Title, Wrapper } from "./style";

const Register = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Registration</Title>
        <Input placeholder="Login" />
        <Input placeholder="Firs name" />
        <Input placeholder="Last name" />
        <Input placeholder="Email" />
        <Input placeholder="User role" />
        <Input placeholder="Password" />
        <Input placeholder="Re-enter Password" />
        <Button width={520}>Register</Button>
      </Container>
    </Wrapper>
  );
};

export default Register;

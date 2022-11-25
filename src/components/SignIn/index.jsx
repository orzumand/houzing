import React from "react";
import { Button } from "../Generic";
import { Container, Input, Title, Wrapper } from "./style";

const SignIn = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Sign In</Title>
        <Input placeholder="Login" />
        <Input placeholder="Password" />
        <Button width={520}>SignIn</Button>
      </Container>
    </Wrapper>
  );
};

export default SignIn;

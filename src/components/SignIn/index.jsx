import React from "react";
import { Button } from "../Generic";
import { Con, Container, Input, Title, Wrapper } from "./style";

const SignIn = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Sign In</Title>
        <Input placeholder="Login" />
        <Input placeholder="Password" />
        <Con>
          <div>
            <input type="checkbox" />
            Remember me
          </div>
          <a href="/">Forgot</a>
        </Con>
        <Button width={520}>SignIn</Button>
      </Container>
    </Wrapper>
  );
};

export default SignIn;

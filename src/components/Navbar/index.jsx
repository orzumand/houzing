import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Section, Wrapper } from "./style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Section>Simple</Section>
        <Section>2</Section>
        <Section>3</Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;

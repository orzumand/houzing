import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";
import { Container, NavbarWrapper, Logo, Section, Wrapper } from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <NavbarWrapper>
          <Section className="logo" onClick={() => navigate("/home")}>
            <Logo />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map((value, index) => {
              return (
                !value.hidden && (
                  <NavLink key={index} to={value.path}>
                    {value.title}
                  </NavLink>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/signin")} type="dark">
              SignIn
            </Button>
          </Section>
        </NavbarWrapper>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;

import React from "react";
import { BottomCon, Container, Part, Wrapper } from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Part>
          <Part.Title>Contact Us</Part.Title>
          <Part.Subtitle>
            329 Queensberry Street, North
            <br /> Melbourne VIC 3051, Australia.
          </Part.Subtitle>
          <Part.Subtitle>1234567890</Part.Subtitle>
          <Part.Subtitle>support@houzing.com</Part.Subtitle>
          <Part.Subtitle></Part.Subtitle>
        </Part>
        <Part>
          <Part.Title>Discover</Part.Title>
          <Part.Subtitle>Chicago</Part.Subtitle>
          <Part.Subtitle>Los Angeles</Part.Subtitle>
          <Part.Subtitle>Miami</Part.Subtitle>
          <Part.Subtitle>New York</Part.Subtitle>
        </Part>
        <Part>
          <Part.Title>Lists by Category</Part.Title>
          <Part.Subtitle>Apartment</Part.Subtitle>
          <Part.Subtitle>Condos</Part.Subtitle>
          <Part.Subtitle>Houses</Part.Subtitle>
          <Part.Subtitle>Offices</Part.Subtitle>
          <Part.Subtitle>Retail</Part.Subtitle>
          <Part.Subtitle>Villas</Part.Subtitle>
        </Part>
        <Part>
          <Part.Title>Lists by Category</Part.Title>
          <Part.Subtitle>About Us</Part.Subtitle>
          <Part.Subtitle>Terms & Conditions</Part.Subtitle>
          <Part.Subtitle>Support Center</Part.Subtitle>
          <Part.Subtitle>Contact Us</Part.Subtitle>
        </Part>
      </Container>
      <BottomCon></BottomCon>
    </Wrapper>
  );
};

export default Footer;

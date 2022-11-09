import React from "react";
import { Body, Container, Footer, Icon, Img, Scils, User } from "./style";
import noimg from "../../assets/img/noimage.png";
const Card = ({ url, title, subtitle }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Body>
        <div className="title">{title || "New Apartment Nice Wiew"}</div>
        <div className="subtitle">
          {subtitle || "Quincy St, Brooklyn, NY, USA"}
        </div>
        <Scils>
          <Scils.Item>4 Beds</Scils.Item>
          <Scils.Item> 5 Baths</Scils.Item>
          <Scils.Item>1 Garage</Scils.Item>
          <Scils.Item>1200 Sq Ft</Scils.Item>
        </Scils>
      </Body>
      <User />
      <Footer>
        <Footer.Item>
          <div className="deleted">$2,800/mo</div>
          <div className="title">$7,500/mo</div>
        </Footer.Item>
        <Footer.Item flex={"flex"}>
          <Icon />
          <Icon />
        </Footer.Item>
      </Footer>
    </Container>
  );
};

export default Card;

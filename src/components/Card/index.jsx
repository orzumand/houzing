import React from "react";
import {
  Body,
  Container,
  Footer,
  Icon,
  Img,
  Scils,
  User,
  Icons,
} from "./style";
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
          <Scils.Item>
            <Icons.Bed />4 Beds
          </Scils.Item>
          <Scils.Item>
            <Icons.Bath /> 5 Baths
          </Scils.Item>
          <Scils.Item>
            <Icons.Car />1 Garage
          </Scils.Item>
          <Scils.Item>
            <Icons.Size />
            1200 Sq Ft
          </Scils.Item>
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

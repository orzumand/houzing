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
import user from "../../assets/icons/user.png";
const Card = ({
  url,
  title,
  subtitle,
  bed,
  bath,
  garage,
  size,
  userimg,
  sale,
  price,
}) => {
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
            <Icons.Bed />
            {bed || "4 Beds"}
          </Scils.Item>
          <Scils.Item>
            <Icons.Bath /> {bath || "5 Baths"}
          </Scils.Item>
          <Scils.Item>
            <Icons.Car />
            {garage || "1 Garage"}
          </Scils.Item>
          <Scils.Item>
            <Icons.Size />
            {size || "1200 Sq Ft"}
          </Scils.Item>
        </Scils>
      </Body>
      <User src={userimg || user} />
      <Footer>
        <Footer.Item>
          <div className="deleted">{sale || "$2, 800 / mo"}</div>
          <div className="title">{price || "$7,500/mo"}</div>
        </Footer.Item>
        <Footer.Item flex={"flex"}>
          <Icon>
            <Icons.Resize />
          </Icon>
          <Icon>
            <Icons.Heart />
          </Icon>
        </Footer.Item>
      </Footer>
    </Container>
  );
};

export default Card;

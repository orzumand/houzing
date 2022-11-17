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
const Card = ({ data }) => {
  const {
    attachments,
    city,
    country,
    description,
    address,
    userimg,
    salePrice,
    price,
    houseDetails,
  } = data;
  return (
    <Container>
      <Img src={attachments[0]?.imgPath || noimg} />
      <Body>
        <div className="title">
          {city},{country},{description}
        </div>
        <div className="subtitle inline">
          {address || "Quincy St, Brooklyn, NY, USA"}
        </div>
        <Scils>
          <Scils.Item>
            <Icons.Bed />
            {houseDetails?.beds + "Beds" || "4 Beds"}
          </Scils.Item>
          <Scils.Item>
            <Icons.Bath /> {houseDetails?.bath + "Baths" || "5 Baths"}
          </Scils.Item>
          <Scils.Item>
            <Icons.Car />
            {houseDetails?.garage + "Garage" || "1 Garage"}
          </Scils.Item>
          <Scils.Item>
            <Icons.Size />
            {houseDetails?.area + "Sq Ft" || "1200 Sq Ft"}
          </Scils.Item>
        </Scils>
      </Body>
      <User src={userimg || user} />
      <Footer>
        <Footer.Item>
          <div className="deleted">{salePrice || "$2, 800 / mo"}</div>
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

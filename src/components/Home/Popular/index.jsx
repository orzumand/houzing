import React from "react";
import { Content, Image, Title, Wrapper } from "./style";
import img from "../../../assets/img/img2.png";
import { Button } from "../../Generic";
const Popular = () => {
  return (
    <Wrapper>
      <Image src={img} />
      <Content>
        <Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Title>
        <Button width={180}>Read More</Button>
      </Content>
    </Wrapper>
  );
};

export default Popular;

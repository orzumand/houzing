import { Carousel } from "antd";
import React from "react";
import { useRef } from "react";
import { Button } from "../../Generic";
import { Arrows, Container, Content, Image, Items } from "./style";
import img from "../../../assets/img/img1.png";
import img2 from "../../../assets/img/img2.png";
const CarouselComponent = () => {
  const slider = useRef();

  return (
    <Container>
      <Arrows.Right onClick={() => slider.current.next()} />
      <Arrows.Left onClick={() => slider.current.prev()} />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Subtitle>
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Subtitle>
        <Content.Scils>
          <Items></Items>
          <Items></Items>
          <Items></Items>
          <Items></Items>
        </Content.Scils>
        <Content.Price>5,250/Mo</Content.Price>
        <Button type={"dark"}>Read More</Button>
      </Content>
      <Carousel ref={slider} autoplay autoplaySpeed={10000}>
        <Image src={img} />
        <Image src={img2} />
        <Image src={img} />
        <Image src={img2} />
      </Carousel>
    </Container>
  );
};

export default CarouselComponent;

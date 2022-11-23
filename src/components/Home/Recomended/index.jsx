import { Carousel } from "antd";
import React from "react";
import { Container, Items, Wrapper, Arrows } from "./style";
import Card from "../../Card";
import { useRef } from "react";
const Recomended = () => {
  const slider = useRef();

  return (
    <Wrapper>
      <div className="maintitle">Recomended</div>
      <div className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        cupiditate.
      </div>
      <Container>
        <Arrows.Right onClick={() => slider.current.next()} />
        <Arrows.Left onClick={() => slider.current.prev()} />
        <Carousel dots={true} ref={slider} className="carosel">
          <div>
            <Items>
              <Card />
              <Card />
              <Card />
            </Items>
          </div>
          <div>
            <Items>
              <Card />
              <Card />
              <Card />
            </Items>
          </div>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default Recomended;

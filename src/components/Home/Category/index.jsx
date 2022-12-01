import React from "react";
import {
  Card,
  CardWrapper,
  Container,
  Content,
  Title,
  Wrapper,
  Arrows,
  IconH,
} from "./style";
import appartment from "../../../assets/img/appartment.png";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import { useRef } from "react";

const { REACT_APP_BASE_URL: url } = process.env;
const settings = {
  className: "center",
  dots: true,
  centerMode: true,
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 4,
  speed: 500,
  arrows: false,
  width: "100%",
};
const Category = () => {
  const slider = useRef();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/v1/categories/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);

  return (
    <Wrapper>
      <Container>
        <Content>
          <div className="maintitle">Category</div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            harum.
          </div>
        </Content>

        <Arrows.Right onClick={() => slider.current.slickNext()} />
        <Arrows.Left onClick={() => slider.current.slickPrev()} />
        <Slider ref={slider} {...settings}>
          {data.map(({ name, id }) => {
            return (
              <CardWrapper key={id}>
                <IconH />
                <Title>{name}</Title>
                <Card src={appartment} />
              </CardWrapper>
            );
          })}
        </Slider>
      </Container>
    </Wrapper>
  );
};

export default Category;

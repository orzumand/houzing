import React from "react";
import {
  Card,
  CardWrapper,
  Container,
  Content,
  // Icon,
  Title,
  Wrapper,
} from "./style";
import appartment from "../../../assets/img/appartment.png";
const Category = () => {
  return (
    <Wrapper>
      <Container>
        <div className="maintitle">Category</div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, harum.
        </div>
        <Content>
          <CardWrapper>
            <Title>House</Title>
            <Card src={appartment} />
          </CardWrapper>
          <CardWrapper>
            <Title>House</Title>
            <Card src={appartment} />
          </CardWrapper>
          <CardWrapper>
            <Title>House</Title>
            <Card src={appartment} />
          </CardWrapper>
          <CardWrapper>
            <Title>House</Title>
            <Card src={appartment} />
          </CardWrapper>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Category;

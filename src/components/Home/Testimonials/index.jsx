import React from "react";
import { Ava, Card, Container, Content, Wrapper } from "./style";
import Marvin from "../../../assets/img/Marvin.png";
const Testimonials = () => {
  return (
    <Wrapper>
      <Container>
        <div className="maintitle">Testimonials</div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, harum.
        </div>
        <Content>
          <Card>
            “ I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            “
            <Card.User>
              <Ava src={Marvin} />
              <div className="title">Marvin McKinney</div>
              <div className="subtitle">Designer</div>
            </Card.User>
          </Card>
          <Card>
            “ I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            “
            <Card.User>
              <Ava src={Marvin} />
              <div className="title">Marvin McKinney</div>
              <div className="subtitle">Designer</div>
            </Card.User>
          </Card>
          <Card>
            “ I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            “
            <Card.User>
              <Ava src={Marvin} />
              <div className="title">Marvin McKinney</div>
              <div className="subtitle">Designer</div>
            </Card.User>
          </Card>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Testimonials;

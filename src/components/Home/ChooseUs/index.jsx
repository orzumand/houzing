import React from "react";
import { Card, Container, Content, Icon, Wrapper } from "./style";

const ChooseUs = () => {
  return (
    <Wrapper>
      <Container>
        <div className="maintitle">Why Choose Us ?</div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, harum.
        </div>
        <Content>
          <Card>
            <Icon.Discord />
            <div className="title">Trusted by Thousands</div>
            <div className="subtitle">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </div>
          </Card>
          <Card>
            <Icon.Home />
            <div className="title">Wide Renge Of Properties</div>
            <div className="subtitle">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </div>
          </Card>
          <Card>
            <Icon.Calculator />
            <div className="title">Financing Made Easy</div>
            <div className="subtitle">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </div>
          </Card>
          <Card>
            <Icon.Map />
            <div className="title">See Neighborhoods</div>
            <div className="subtitle">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </div>
          </Card>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default ChooseUs;

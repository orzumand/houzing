import React from "react";
import { Container, Wrapper, Icons } from "./style";
import { Button, Input } from "../Generic";
import { Dropdown } from "antd";

const Filter = () => {
  return (
    <Wrapper>
      <Container>
        <Input
          icon={<Icons.Home />}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        />
        <Dropdown
          arrow={{ pointAtCenter: true }}
          overlay={<h1>test</h1>}
          placement="bottomRight"
        >
          <div>
            <Button type={"light"}>
              <Icons.Group /> Avanced
            </Button>
          </div>
        </Dropdown>
        <Button>
          <Icons.Search />
          Search
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Filter;

import React from "react";
import {
  Container,
  Wrapper,
  Icons,
  MenuWrapper,
  BottomSection,
  Sec,
  MenuTitle,
} from "./style";
import { Button, Input } from "../Generic";
import { Popover } from "antd";
import { useRef } from "react";
const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipcodeRef = useRef();

  const menu = (
    <MenuWrapper>
      <MenuTitle>Adress</MenuTitle>
      <Sec>
        <Input ref={countryRef} placeholder={"Country"} mxwidth={200} />
        <Input ref={regionRef} placeholder={"Region"} mxwidth={200} />
        <Input ref={cityRef} placeholder={"City"} mxwidth={200} />
        <Input ref={zipcodeRef} placeholder={"Zip code"} mxwidth={200} />
      </Sec>
      <MenuTitle>Appartment Info</MenuTitle>
      <Sec>
        <Input placeholder={"Rooms"} mxwidth={200} />
        <Input placeholder={"Size"} mxwidth={200} />
        <Input placeholder={"Sort"} mxwidth={200} />
      </Sec>
      <MenuTitle>Price</MenuTitle>
      <Sec>
        <Input placeholder={"Min price"} mxwidth={200} />
        <Input placeholder={"Max price"} mxwidth={200} />
      </Sec>
      <BottomSection>
        <Button type={"light"}> Cancel</Button>
        <Button>Submit</Button>
      </BottomSection>
    </MenuWrapper>
  );
  return (
    <Wrapper>
      <Container>
        <Input
          icon={<Icons.Home />}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        />
        <Popover
          style={{ padding: "0px" }}
          placement="bottomRight"
          content={menu}
          trigger="click"
        >
          <div>
            <Button type={"light"}>
              <Icons.Group /> Avanced
            </Button>
          </div>
        </Popover>

        <Button>
          <Icons.Search />
          Search
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Filter;

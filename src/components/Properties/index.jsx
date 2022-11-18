import React from "react";
import { useEffect } from "react";
import { Container, Wrapper } from "./style";
import Card from "../Card";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;
const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    fetch(`${url}/v1/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        console.log(res);
      });
  }, [search]);
  return (
    <Wrapper>
      {/* <div className="maintitle">Properties</div>
      <div className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        amet.
      </div> */}
      <Container>
        {data?.map((value) => {
          return <Card key={value.id} data={value} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default Properties;

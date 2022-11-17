import React from "react";
import { useEffect } from "react";
import { Container } from "./style";
import Card from "../Card";
import { useState } from "react";
const { REACT_APP_BASE_URL: url } = process.env;
const Properties = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/v1/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        console.log(res);
      });
  }, []);
  return (
    <Container>
      {data.map((value) => {
        return <Card key={value.id} data={value} />;
      })}
    </Container>
  );
};

export default Properties;

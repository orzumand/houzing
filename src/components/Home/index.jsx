import { useState } from "react";
import { Input } from "../Generic";
import { Container } from "./style";

const Home = () => {
  const [title, setTitle] = useState("");
  return (
    <Container>
      <Input
        onChange={(e) => setTitle(e.target.value)}
        placeholder={"home"}
        width={200}
      />
      <h1>{title}</h1>
    </Container>
  );
};

export default Home;

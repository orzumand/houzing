import { Container } from "./style";
import CarouselComponent from "./Carousel";
import Recomended from "./Recomended";

const Home = () => {
  return (
    <Container>
      <CarouselComponent />
      <Recomended />
    </Container>
  );
};

export default Home;

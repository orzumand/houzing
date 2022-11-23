import { Container } from "./style";
import CarouselComponent from "./Carousel";
import Recomended from "./Recomended";
import ChooseUs from "./ChooseUs";

const Home = () => {
  return (
    <Container>
      <CarouselComponent />
      <Recomended />
      <ChooseUs />
    </Container>
  );
};

export default Home;

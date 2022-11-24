import { Container } from "./style";
import CarouselComponent from "./Carousel";
import Recomended from "./Recomended";
import ChooseUs from "./ChooseUs";
import Category from "./Category";
import Popular from "./Popular";

const Home = () => {
  return (
    <Container>
      <CarouselComponent />
      <Recomended />
      <ChooseUs />
      <Category />
      <Popular />
    </Container>
  );
};

export default Home;

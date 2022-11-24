import { Container } from "./style";
import CarouselComponent from "./Carousel";
import Recomended from "./Recomended";
import ChooseUs from "./ChooseUs";
import Category from "./Category";
import Popular from "./Popular";
import Recent from "./Recent";

const Home = () => {
  return (
    <Container>
      <CarouselComponent />
      <Recomended />
      <ChooseUs />
      <Category />
      <Popular />
      <Recent />
    </Container>
  );
};

export default Home;

import { Container } from "./style";
import CarouselComponent from "./Carousel";
import Recomended from "./Recomended";
import ChooseUs from "./ChooseUs";
import Category from "./Category";

const Home = () => {
  return (
    <Container>
      <CarouselComponent />
      <Recomended />
      <ChooseUs />
      <Category />
    </Container>
  );
};

export default Home;

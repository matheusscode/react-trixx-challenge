import ExploreCard from "../../components/ExploreCard";
import Navbar from "../../components/NavBar";
import ServicesCard from "../../components/ServicesCard";
import { exploreCards, servicesCards } from "./data";
import * as C from "./styles";

export default function Home() {
  return (
    <C.Container>
      <Navbar />
      {Map()}
      {Services()}
      {Explore()}
      <C.Footer />
    </C.Container>
  );
}

function Map() {
  return (
    <C.SectionContainer animation="fadeInLeft" delay={300}>
      <C.SectionHeader>
        <C.Title>Localização</C.Title>
      </C.SectionHeader>
      <C.Map source={require("../../../assets/images/map.png")} />
      <C.MapButton>
        <C.MapButtonText>Ativar o GPS</C.MapButtonText>
      </C.MapButton>
    </C.SectionContainer>
  );
}

function Services() {
  return (
    <C.SectionContainer animation="fadeInLeft" delay={500}>
      <C.SectionHeader>
        <C.Title>Serviços e Reservas Proxímas</C.Title>
      </C.SectionHeader>
      <C.Carousel horizontal>
        {servicesCards.map((item) => (
          <ServicesCard
            key={item.id}
            image={item.image}
            placeName={item.placeName}
          />
        ))}
      </C.Carousel>
    </C.SectionContainer>
  );
}

function Explore() {
  return (
    <C.SectionContainer animation="fadeInLeft" delay={700}>
      <C.SectionHeader>
        <C.Title>Explore</C.Title>
      </C.SectionHeader>
      <C.Carousel horizontal>
        {exploreCards.map((item) => (
          <ExploreCard
            key={item.id}
            image={item.image}
            categoryName={item.categoryName}
          />
        ))}
      </C.Carousel>
    </C.SectionContainer>
  );
}

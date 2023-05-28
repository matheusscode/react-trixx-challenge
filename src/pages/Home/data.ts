import { ImageSourcePropType } from "react-native";
import service1 from "../../../assets/images/services-images/service-1.png";
import service2 from "../../../assets/images/services-images/service-2.png";
import service3 from "../../../assets/images/services-images/service-3.png";
import service4 from "../../../assets/images/services-images/service-4.png";
import service5 from "../../../assets/images/services-images/service-5.png";

import category1 from "../../../assets/images/explore-icons/category-1.png";
import category2 from "../../../assets/images/explore-icons/category-2.png";
import category3 from "../../../assets/images/explore-icons/category-3.png";
import category4 from "../../../assets/images/explore-icons/category-4.png";
import category5 from "../../../assets/images/explore-icons/category-5.png";
import category6 from "../../../assets/images/explore-icons/category-6.png";
import category7 from "../../../assets/images/explore-icons/category-7.png";
import category8 from "../../../assets/images/explore-icons/category-8.png";
import category9 from "../../../assets/images/explore-icons/category-9.png";

interface ServicesCardProps {
  id: number;
  placeName: string;
  image: ImageSourcePropType;
}

interface ExploreCardProps {
  id: number;
  categoryName: string;
  image: ImageSourcePropType;
}

export const servicesCards: ServicesCardProps[] = [
  {
    id: 1,
    placeName: "Prato Pronto",
    image: service1,
  },
  {
    id: 2,
    placeName: "Salão espaço Glamour",
    image: service2,
  },
  {
    id: 3,
    placeName: "Espace Inove",
    image: service3,
  },
  {
    id: 4,
    placeName: "Studio Tattoo",
    image: service4,
  },
  {
    id: 5,
    placeName: "Studio Spa",
    image: service5,
  },
];

export const exploreCards: ExploreCardProps[] = [
  {
    id: 1,
    categoryName: "Pizzaria",
    image: category1,
  },
  {
    id: 2,
    categoryName: "Restaurantes",
    image: category2,
  },
  {
    id: 3,
    categoryName: "Esportes",
    image: category3,
  },
  {
    id: 4,
    categoryName: "Salão",
    image: category4,
  },
  {
    id: 5,
    categoryName: "Barbearia",
    image: category5,
  },
  {
    id: 6,
    categoryName: "Tatuagem",
    image: category6,
  },
  {
    id: 7,
    categoryName: "Massagem",
    image: category7,
  },
  {
    id: 8,
    categoryName: "Estética",
    image: category8,
  },
  {
    id: 9,
    categoryName: "Ver todos",
    image: category9,
  },
];

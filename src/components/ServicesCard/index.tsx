import * as C from "./styles";
import { ImageSourcePropType } from "react-native";
import { useState } from "react";

interface Props {
  placeName: string;
  image: ImageSourcePropType;
}

export default function ServicesCard({ placeName, image }: Props) {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <C.CardContainer onPress={handlePress} isPressed={isPressed}>
      <C.CardImage source={image} resizeMode="cover" />
      <C.CardTitle>{placeName}</C.CardTitle>
      <C.CardSubTitle isPressed={isPressed}>Ver mais</C.CardSubTitle>
    </C.CardContainer>
  );
}

import * as C from "./styles";
import { ImageSourcePropType } from "react-native";

interface Props {
  categoryName: string;
  image: ImageSourcePropType;
}

export default function ExploreCard({ categoryName, image }: Props) {
  return (
    <C.CardContainer>
      <C.IconContainer>
        <C.Icon source={image}/>
      </C.IconContainer>
      <C.CardTitle>{categoryName}</C.CardTitle>
    </C.CardContainer>
  );
}

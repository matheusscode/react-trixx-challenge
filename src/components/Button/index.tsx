import { ButtonProps } from "../../types";
import * as C from "./styles";

export default function Button({ text, reverse, event, margin }: ButtonProps) {
  return (
    <C.Touchable
      style={{ marginTop: margin }}
      reverse={reverse}
      onPress={event}
    >
      <C.TouchableText reverse={reverse}>{text}</C.TouchableText>
    </C.Touchable>
  );
}

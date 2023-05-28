import { ReactNode } from "react";

export type ButtonProps = {
  text: string | ReactNode;
  reverse: boolean;
  event?: () => void;
  margin?: number;
};

import { ReactNode } from "react";

export type TextType = {
  bold?: boolean;
  children?: ReactNode;
  color?: string;
  size?: string;
  style?: string;
};

export type LabelType = {
  htmlFor?: string;
  isRequired?: boolean;
  style?: string;
  text: string | JSX.Element;
};

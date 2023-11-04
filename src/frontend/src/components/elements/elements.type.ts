export type FullScreenContainerType = {
  children: React.ReactNode;
  position?: "center" | "start" | "end";
  width?: string;
};

export type TextType = {
  bold?: boolean;
  children?: React.ReactNode;
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

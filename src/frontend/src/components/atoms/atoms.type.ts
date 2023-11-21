export type FullScreenContainerType = {
  children: React.ReactNode;
  position?: "center" | "start" | "end";
  width?: string;
};

export type InputAttributeType =
  | "text"
  | "checkbox"
  | "tel"
  | "password"
  | "email"
  | "address"
  | "time"
  | "number"
  | "date"
  | "datetime"
  | "datetime-local";

export type InputType = {
  autoComplete?: "off" | "on" | "email" | "current-password" | "new-password";
  className?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string | JSX.Element;
  maxLength?: number;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: InputAttributeType;
  value?: string | number | boolean;
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

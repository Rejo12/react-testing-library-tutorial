import { GreetProps } from "./Greet.type";

export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>;
};

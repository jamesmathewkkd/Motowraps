import { StyledSubmit } from "./styles";
import { ButtonProps } from "../types";

export const Submit = ({
  color,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledSubmit color={'#ff825c'} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledSubmit>
);

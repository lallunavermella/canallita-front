import styled from "styled-components";
import { ButtonProps } from "../../types/ButtonProps";

const StyledButton = styled.button`
  background-color: darkred;
  color: white;
  width: 110px;
  height: 40px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  :hover {
    cursor: pointer;
    background-color: greenyellow;
  }
`;

const Button = ({ text, action }: ButtonProps) => (
  <StyledButton type="submit" onClick={action}>
    {text}
  </StyledButton>
);
export default Button;

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";

const NavBarStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: lightgrey;
  width: 100%;
  top: 0;
  height: 70px;
  padding-right: 30px;
  z-index: 100;
  div {
    margin: 10px;
  }
`;

const NavBar = (): JSX.Element => {
  const navigate = useNavigate();
  const navigateToLoginPage = () => {
    navigate(`/login`);
  };
  return (
    <NavBarStyled>
      <div>
        <Button text="Log In" action={navigateToLoginPage} />
      </div>
    </NavBarStyled>
  );
};

export default NavBar;

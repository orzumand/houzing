import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  background-color: var(--colorPrimary);
  padding: var(--padding);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  color: white;
  height: 64px;

  font-size: 16px;
  max-width: 1440px;

  .logo {
    cursor: pointer;
  }
`;
const Section = styled.div`
  display: flex;
  align-items: center;

  .active {
    color: #00dddf;
  }
  a {
    text-decoration: none;
    margin: 0px 32px;
    color: white;
  }
`;
const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  text-align: center;
`;
Section.Title = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;
export { NavbarWrapper, Container, Wrapper, Section, Logo };

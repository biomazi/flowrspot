import React from 'react';
import { NavLink } from 'react-router-dom';
import UserLogin from 'components/user/UserLogin';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/logo.svg'
import { ReactComponent as BurgerButton } from 'assets/mm_hamburger.svg'
import { useMenuContext } from 'hooks/useMenuContext';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 80px;

  a {
    text-decoration: none;
  }
`;

const StyledBurgerWrapper = styled.label`
  margin-right: 28px;
  transition: 0.4s;
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

const StyledLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 169px;
  height: 30px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 14px;
  color: #EAA79E;
  padding-left: 23px;
  margin-right: auto;

  svg {
    margin-right: 10px;
    width: 30px;
    height: 30px;
  }
`;


const StyledMenu = styled.div`
  width: 50%;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    margin: 0;
    margin-top: 80px;
    padding-top: 120px;
    width: 100%;
    height: 100vh;
    background: #FFF;
    right: ${props => props.isOpen ? '0' : '-100%'};
    top: 0;
    text-align: center;
    line-height: normal;
    transition: 0.4s;
    z-index: 1003;

    & > * {
      margin-left: 31px;
      margin-bottom: 56px;
    }
  }
`;

const StyledCheckbox = styled.input`
  position: absolute;
  visibility: hidden;
  z-index: -1000;
`;
const StyledNavLink = styled(NavLink)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;  
  text-align: right;
  color: #949EA0;

  &:hover {
    opacity: 0.7;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 24px;
  height: 24px;

  &:hover {
    opacity: 0.7
  }

  &::before,::after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 24px;
    width: 2px;
    background-color: #949EA0;
  }

  &::before {
    transform: rotate(135deg);
  }
  &::after {
    transform: rotate(-135deg);
  }
`

const style = {
  fontWeight: 600,
};

const NavBar = () => {
  const { setMobileMenu, mobileMenu } = useMenuContext();
  return (
    <StyledNav>
      <StyledLogo to="/">
        <Logo />
      FlowRSpot
    </StyledLogo>
      <StyledCheckbox type="checkbox" id="burgerCheckbox" onChange={() => setMobileMenu(state => !state)} />
      {!mobileMenu && (
        <StyledBurgerWrapper htmlFor="burgerCheckbox">
          <BurgerButton />
        </StyledBurgerWrapper>
      )}
      {mobileMenu && (
        <StyledBurgerWrapper htmlFor="burgerCheckbox">
          <CloseButton />
        </StyledBurgerWrapper>
      )}
      <StyledMenu isOpen={mobileMenu}>
        <StyledNavLink to="/flowers" activeStyle={style} onClick={() => setMobileMenu(false)}>
          Flowers
        </StyledNavLink>
        <StyledNavLink to="/sightings" activeStyle={style} onClick={() => setMobileMenu(false)}>
          Latest Sightings
        </StyledNavLink>
        <StyledNavLink to="/favorites" activeStyle={style} onClick={() => setMobileMenu(false)}>
          Favorites
        </StyledNavLink>
        <UserLogin />
      </StyledMenu>
    </StyledNav>
  )
}

export default NavBar;

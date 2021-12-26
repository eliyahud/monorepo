import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Shadows, Sizes, Transitions } from '../global/styles';
import { HeaderContainer } from './base/base';
import logo from '../assets/images/keyring-network-logo.png';
import { AccountButton } from './account/AccountButton';

export function TopBar() {
  return (
    <Header>
      <HeaderContainer>
        <HeaderNav>
          <ToMain href="/">
            <LogoImage src={logo} />
            <span>Keyring Network</span>
          </ToMain>
          <HeaderNavLinks>
            <HeaderLink activeClassName="active-page" to="/identity">
              My Identity
            </HeaderLink>
          </HeaderNavLinks>
        </HeaderNav>
      </HeaderContainer>
      <AccountButton />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  width: 100%;
  height: ${Sizes.headerHeight};
  background-color: ${Colors.White};
  box-shadow: ${Shadows.main};
  z-index: 100;
  padding: 0 20px;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
`;

const LogoImage = styled.img`
  height: 50px;
  width: 50px;
`;

const ToMain = styled.a`
  display: flex;
  flex-direction: row;
  width: fit-content;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  align-items: center;
  transition: ${Transitions.all};

  &:hover {
    color: ${Colors.Yellow[500]};
  }
`;

const ToMainBottom = styled.span`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  font-size: 10px;
  line-height: 14px;
  font-weight: 500;
`;

const Handshaking = styled.span`
  letter-spacing: -0.3em;
`;

const HeaderNavLinks = styled.div`
  display: flex;
  margin-left: 50px;
`;

const HeaderLink = styled(NavLink)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  font-size: 12px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: ${Transitions.all};
  white-space: nowrap;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 20px);
    height: 2px;
    background-color: ${Colors.Yellow[500]};
    transform: scaleX(0);
    transform-origin: 50% 50%;
    transition: ${Transitions.all};
  }

  &:hover {
    color: ${Colors.Yellow[500]};

    &:after {
      transform: scaleX(1);
    }
  }
  &.active-page {
    &:after {
      transform: scaleX(1);
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const Wrapper = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 999;
`;

const Branding = styled.h1`
  margin: 0;
`;

const LogoImg = styled.img`
  height: 40px;
  margin: 10px;
  vertical-align: middle;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Branding>
        <LogoImg src={logo} alt="Social network logo" className="Logo" />
        Social Network
      </Branding>
    </Wrapper>
  );
};

export default Header;

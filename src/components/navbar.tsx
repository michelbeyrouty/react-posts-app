import { Auth } from 'aws-amplify';
import React from 'react';
import styled from 'styled-components';
import { BaseButton } from './atoms';

const NavWrapper = styled.div`
  background: #63d471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

// const CustomSignout = styled(AmplifySignOut)`
//   position: relative;
//   font-family: ${({ theme }) => theme.fonts[0]};
//   cursor: pointer;
//   text-decoration: none;
//   font-style: normal;
//   text-align: center;
//   line-height: 1;
//   margin: 0px;
//   font-weight: 600;
//   width: auto;
//   font-size: 0.875rem;
//   min-height: 2.625rem;
//   min-width: 2.625rem;
//   padding: 0px 1rem;
// `;

const Navbar: React.FC = () => {
  return (
    <NavWrapper>
      <>Abou el mich</>
      <BaseButton onClick={() => Auth.signOut()}>Sign out</BaseButton>
    </NavWrapper>
  );
};

export default Navbar;

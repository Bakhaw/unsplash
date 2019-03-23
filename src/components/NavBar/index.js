import React from 'react';
import styled from 'styled-components';

import NavLinks from './NavLinks';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 100vw;
  background: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

function NavBar() {
  return (
    <Wrapper>
      <NavLinks />
    </Wrapper>
  );
}

export default NavBar;

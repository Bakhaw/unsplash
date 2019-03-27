import React from 'react';
import styled from 'styled-components';

import NavBrand from './NavBrand';
import NavLinks from './NavLinks';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 64px;
  background: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

function NavBar() {
  return (
    <Wrapper>
      <NavBrand />
      <NavLinks />
    </Wrapper>
  );
}

export default NavBar;

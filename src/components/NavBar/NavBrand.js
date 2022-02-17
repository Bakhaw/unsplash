import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BrandLogo from '../../assets/images/logo.png';

const Logo = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`;

function NavBrand() {
  return (
    <Link to='/'>
      <Logo alt='Brand logo' src={BrandLogo} />
    </Link>
  );
}

export default NavBrand;

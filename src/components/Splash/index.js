import React from 'react';
import LazyLoad from 'react-lazy-load';
import styled from 'styled-components';

const Photo = styled.img`
  height: 100%;
  width: 100%;
  &:hover  {
    cursor: zoom-in;
  }
`;

function Splash({ height, src }) {
  return (
    <LazyLoad height={height}>
      <Photo alt='Unsplash img' src={src} />
    </LazyLoad>
  );
}

export default Splash;

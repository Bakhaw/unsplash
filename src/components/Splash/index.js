import React from 'react';
import LazyLoad from 'react-lazy-load';
import styled from 'styled-components';
import SplashDetail from './SplashDetail';

const Photo = styled.img`
  height: 100%;
  width: 100%;
`;

const SplashWrapper = styled.div`
  cursor: zoom-in;
  &:hover .SplashDetail {
    opacity: 1;
    transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;
    visibility: visible;
  }
`;

function Splash({ height, splash }) {
  return (
    <SplashWrapper>
      <LazyLoad height={height}>
        <Photo alt='Unsplash img' src={splash.urls.regular} />
      </LazyLoad>
      <SplashDetail splash={splash} />
    </SplashWrapper>
  );
}

export default Splash;

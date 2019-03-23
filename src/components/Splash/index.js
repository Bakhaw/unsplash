import React from 'react';
import LazyLoad from 'react-lazy-load';
import styled from 'styled-components';
import Detail from './Detail';

const Wrapper = styled.div`
  &:hover .SplashDetail {
    opacity: 1;
    transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;
    visibility: visible;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

function Splash({ height, splash }) {
  return (
    <Wrapper>
      <LazyLoad height={height}>
        <Image alt='Unsplash img' src={splash.urls.regular} />
      </LazyLoad>
      <Detail splash={splash} />
    </Wrapper>
  );
}

export default Splash;

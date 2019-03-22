import React from 'react';
import LazyLoad from 'react-lazy-load';
import styled from 'styled-components';

const Photo = styled.img`
  height: 100%;
  width: 100%;
`;

const PhotoDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0,
    rgba(0, 0, 0, 0.199) 3.5%,
    rgba(0, 0, 0, 0.195) 7%,
    rgba(0, 0, 0, 0.19) 10.35%,
    rgba(0, 0, 0, 0.182) 13.85%,
    rgba(0, 0, 0, 0.174) 17.35%,
    rgba(0, 0, 0, 0.165) 20.85%,
    rgba(0, 0, 0, 0.155) 24.35%,
    rgba(0, 0, 0, 0.145) 27.85%,
    rgba(0, 0, 0, 0.135) 31.35%,
    rgba(0, 0, 0, 0.126) 34.85%,
    rgba(0, 0, 0, 0.118) 38.35%,
    rgba(0, 0, 0, 0.11) 41.85%,
    rgba(0, 0, 0, 0.105) 45.35%,
    rgba(0, 0, 0, 0.1) 48.85%,
    rgba(0, 0, 0, 0.103) 52.35%,
    rgba(0, 0, 0, 0.112) 55.85%,
    rgba(0, 0, 0, 0.126) 59.35%,
    rgba(0, 0, 0, 0.144) 62.85%,
    rgba(0, 0, 0, 0.165) 66.35%,
    rgba(0, 0, 0, 0.188) 69.85%,
    rgba(0, 0, 0, 0.213) 73.35%,
    rgba(0, 0, 0, 0.237) 76.85%,
    rgba(0, 0, 0, 0.262) 80.35%,
    rgba(0, 0, 0, 0.285) 83.85%,
    rgba(0, 0, 0, 0.306) 87.35%,
    rgba(0, 0, 0, 0.324) 90.85%,
    rgba(0, 0, 0, 0.338) 94.35%,
    rgba(0, 0, 0, 0.347) 97.85%,
    rgba(0, 0, 0, 0.35)
  );
  opacity: 0;
  &:not(:hover) {
    visibility: hidden;
    transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;
  }
`;

const DetailTop = styled.div`
  align-self: flex-end;
`;

const DetailBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserDetail = styled.div`
  display: flex;
  align-items: center;
  & img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  & span {
    color: #fff;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PhotoWrapper = styled.div`
  cursor: zoom-in;
  &:hover ${PhotoDetail} {
    opacity: 1;
    transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;
    visibility: visible;
  }
`;

function Splash({ height, src }) {
  return (
    <PhotoWrapper>
      <LazyLoad height={height}>
        <Photo alt='Unsplash img' src={src} />
      </LazyLoad>
      <PhotoDetail>
        <DetailTop>
          <button>Like</button>
          <button>+ Collect</button>
        </DetailTop>
        <DetailBottom>
          <UserDetail>
            <img
              alt='Analise Benevides avatar'
              src='https://images.unsplash.com/profile-1524155089871-20769af667b3?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff'
            />
            <span>Analise Benevides</span>
          </UserDetail>
          <button>Télécharger</button>
        </DetailBottom>
      </PhotoDetail>
    </PhotoWrapper>
  );
}

export default Splash;

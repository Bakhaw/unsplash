import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import GalleryAPI from '../../../api/gallery';
import Loader from '../../../components/Loader';
import UnsplashLink from '../../../components/UnsplashLink';

import Form from './Form';

const HeroWrapper = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${props =>
    `linear-gradient(#000 0%, rgba(0, 0, 0, 0.65) 0%), url('${
      props.background
    }')`};
  height: calc(100vh - (64px + 10vw));
  padding: 10vw 15vw 0 15vw;
  margin-bottom: 40px;
  & h1 {
    margin-bottom: 25px;
  }
  & h2:last-of-type {
    margin-bottom: 10px;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 46px;
  line-height: 1.2;
  text-align: left;
`;

const Subtitle = styled.h2`
  margin: 0;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
`;

const Credit = styled.div`
  position: absolute;
  left: 15px;
  bottom: 15px;
  & span {
    color: #999;
  }
  & a {
    color: #fff;
    border-color: #fff;
    &:hover {
      color: #fff;
    }
  }
`;

function Hero() {
  const [randomPhoto, setRandomPhoto] = useState(undefined);
  const getRandomPhoto = async () => {
    const newRandomPhoto = await GalleryAPI.methods.photos.getRandomPhoto();
    await setRandomPhoto(newRandomPhoto);
  };

  useEffect(() => {
    getRandomPhoto();
  }, []);

  if (typeof randomPhoto === 'undefined')
    return <Loader wrapperHeight='fullscreen' />;

  const { urls, user } = randomPhoto;

  return (
    <HeroWrapper background={urls.regular}>
      <Title>React Gallery</Title>
      <Subtitle>Beautiful, free photos.</Subtitle>
      <Subtitle>
        Gifted by the world’s most generous community of photographers. 🎁
      </Subtitle>
      <Form />
      <Credit>
        <UnsplashLink user={user} />
      </Credit>
    </HeroWrapper>
  );
}

export default Hero;

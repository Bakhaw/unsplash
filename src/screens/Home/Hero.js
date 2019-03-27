import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import GalleryAPI from 'api/gallery';
import Input from 'components/Input';
import Loader from 'components/Loader';
import UnsplashLink from 'components/UnsplashLink';

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

function Hero(props) {
  const [randomPhoto, setRandomPhoto] = useState(undefined);
  const getRandomPhoto = async () => {
    const newRandomPhoto = await GalleryAPI.methods.photos.getRandomPhoto();
    await setRandomPhoto(newRandomPhoto);
  };

  useEffect(() => {
    getRandomPhoto();
  }, []);

  const [search, setSearch] = useState('');

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const { push } = props.history;
    if (search === '') return;

    push(`/search/photos/${search}`);
  };

  const onClear = e => {
    setSearch('');
    document.getElementById('InputComponent').focus();
  };
  if (typeof randomPhoto === 'undefined')
    return <Loader wrapperHeight='fullscreen' />;

  return (
    <HeroWrapper background={randomPhoto.urls.regular}>
      <Title>React Gallery</Title>
      <Subtitle>Beautiful, free photos.</Subtitle>
      <Subtitle>
        Gifted by the world’s most generous community of photographers. 🎁
      </Subtitle>
      <form onSubmit={onSubmit}>
        <Input
          onChange={handleInputChange}
          onClear={onClear}
          onSubmit={onSubmit}
          placeholder='Search free high-resolution photos'
          value={search}
        />
      </form>
      <Credit>
        <UnsplashLink user={randomPhoto.user} />
      </Credit>
    </HeroWrapper>
  );
}

export default withRouter(Hero);

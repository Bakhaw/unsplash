import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import GalleryAPI from 'api/gallery';
import Loader from 'components/Loader';
import UnsplashLink from 'components/UnsplashLink';

import BottomBar from './BottomBar';
import Related from './Related';
import TopBar from './TopBar';

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 64px);
`;

const Splash = styled.img`
  cursor: zoom-in;
  background-color: ${props => props.background};
  height: ${props => props.height};
  width: 350;
`;

function Photo({ match }) {
  const [splash, setSplash] = useState(null);

  const getPhoto = async () => {
    const { photoId } = match.params;
    const splash = await GalleryAPI.methods.photos.getPhotoById(photoId);
    await setSplash(splash);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  if (!splash) return <Loader wrapperHeight='fullscreen' />;

  const { color, height, urls, user, width } = splash;
  const splashHeight = 350 * (height / width);

  return (
    <PhotoWrapper>
      <TopBar splash={splash} />
      <a href={urls.raw} rel='noopener noreferrer' target='_blank'>
        <Splash
          alt={`Splash by ${user.name}`}
          background={color}
          height={splashHeight}
          src={urls.raw}
        />
      </a>
      <UnsplashLink user={user} />
      <BottomBar splash={splash} />
      <Related splash={splash} />
    </PhotoWrapper>
  );
}

export default Photo;

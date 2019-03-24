import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import GalleryAPI from 'api/gallery';
import Loader from 'components/Loader';
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

  if (splash === null) return <Loader wrapperHeight='fullscreen' />;

  const height = 350 * (splash.height / splash.width);

  return (
    <PhotoWrapper>
      <TopBar splash={splash} />
      <img
        alt='Splash'
        src={splash.urls.raw}
        style={{
          backgroundColor: splash.color,
          height,
          width: 350
        }}
      />
      <BottomBar splash={splash} />
      <Related splash={splash} />
    </PhotoWrapper>
  );
}

export default Photo;

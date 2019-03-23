import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import GalleryAPI from 'api/gallery';
import BottomBar from './BottomBar';
import TopBar from './TopBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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

  if (splash === null) return <div>Loading ...</div>;

  const height = 350 * (splash.height / splash.width);

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Photo;

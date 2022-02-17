import React, { useEffect } from 'react';

import Loader from '../../components/Loader';
import Masonry from '../../components/Masonry';
import { withContext } from '../../context';
import Hero from './Hero';

function Home({ contextActions, contextState }) {
  const getPhotos = async () => {
    const { getData } = contextActions;
    await getData({ type: 'photos', name: 'getAllPhotos' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPhotos();
  }, []);

  const { isLoading, photos } = contextState;

  if (photos.length === 0) return <Loader wrapperHeight='fullscreen' />;

  return (
    <>
      <Hero />
      <Masonry
        cellCount={photos.length}
        isLoading={isLoading}
        onBottomFired={getPhotos}
        photos={photos}
      />
      {isLoading && <Loader />}
    </>
  );
}

export default withContext(Home);

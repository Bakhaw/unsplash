import React from 'react';
import { GalleryProvider } from '../../context';
import { usePhotos } from '../../hooks';

function Page({ children }) {
  const photos = usePhotos();

  return (
    <GalleryProvider
      value={{
        photos
      }}
    >
      {children}
    </GalleryProvider>
  );
}

export default Page;

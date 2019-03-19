import React from 'react';
import { GalleryProvider } from '../../context';

function Page({ children }) {
  return (
    <GalleryProvider
      value={{
        username: 'Faissal'
      }}
    >
      <h1>Page component</h1>
      {children}
    </GalleryProvider>
  );
}

export default Page;

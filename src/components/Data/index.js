import React, { useContext } from 'react';
import { GalleryContext } from '../../context';

function Data() {
  const galleryData = useContext(GalleryContext);
  console.log(galleryData);
  return (
    <div>
      <p>Your Data:</p>
    </div>
  );
}

export default Data;

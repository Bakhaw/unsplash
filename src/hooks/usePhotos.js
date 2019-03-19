import { useEffect, useState } from 'react';
import GalleryAPI from '../api/gallery';

function usePhotos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    try {
      const photos = await GalleryAPI.methods.photos.getAllPhotos();
      await setPhotos(photos);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return photos;
}

export default usePhotos;

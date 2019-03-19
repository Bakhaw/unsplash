import { useEffect, useState } from 'react';
import GalleryAPI from '../api/gallery';

function usePhotos() {
  const getPhotos = async () => {
    try {
      const photos = await GalleryAPI.methods.photos.getAllPhotos();
      await setPhotos(photos);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getPhotos();
  }, []);
  return photos;
}

export default usePhotos;

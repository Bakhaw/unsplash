import axios from 'axios';
import 'firebase/database';

const Gallery = {
  config: {
    accessKey:
      '41e3f9e71f60bae04300d18b08fef18dc42c596f9000b6b4cdce1f01bb54828c',
    collectionsUrl: 'https://api.unsplash.com/collections/',
    photosUrl: 'https://api.unsplash.com/photos/?per_page=6&page=',
    searchUrl: 'https://api.unsplash.com/search/',
    statsUrl: 'https://api.unsplash.com/stats/',
    usersUrl: 'https://api.unsplash.com/users/'
  },
  methods: {
    collections: {
      getAllCollections: async () => {
        try {
          const request = await axios.get(
            `${collectionsUrl}?client_id=${accessKey}`
          );
          return request.data;
        } catch (error) {
          console.log('Error', error);
        }
      },
      getCollectionById: async collectionId => {
        try {
          const request = await axios.get(
            `${collectionsUrl}${collectionId}?client_id=${accessKey}`
          );
          return request.data;
        } catch (error) {
          console.log('Error', error);
        }
      },
      getCollectionData: async (collectionId, dataType) => {
        // ? available dataType
        // "photos/"
        // "related/"
        try {
          const request = await axios.get(
            `${collectionsUrl}${collectionId}${dataType}?client_id=${accessKey}`
          );
          return request.data;
        } catch (error) {
          console.log('Error', error);
        }
      }
    },
    global: {
      search: async (searchType, query) => {
        // ? available searchType
        // "collections/"
        // "photos/"
        // "users/"
        try {
          const request = await axios.get(
            `${searchUrl}${searchType}?query=${query}&client_id=${accessKey}`
          );
          return request.data;
        } catch (error) {
          console.log('Error', error);
        }
      },
      getStats: async type => {
        // ? available type
        // "total/"
        // "month/"
        try {
          const request = await axios.get(
            `${statsUrl}${type}?client_id=${accessKey}`
          );
          return request.data;
        } catch (error) {
          console.log('Error', error);
        }
      }
    },
    photos: {
      getAllPhotos: async currentPage => {
        try {
          const request = await axios.get(
            `${photosUrl}${currentPage}&client_id=${accessKey}`
          );

          return request.data;
        } catch (error) {
          console.log('Error', error);
        }
      },
      getPhotoById: async photoId => {
        try {
          const request = await axios.get(
            `${photosUrl}${photoId}?client_id=${accessKey}`
          );
          return request.data;
        } catch (error) {
          console.log('Error', error);
        }
      },
      getRandomPhoto: async () => {
        try {
          const request = await axios.get(
            `${photosUrl}random?client_id=${accessKey}`
          );
          return request.data;
        } catch (error) {
          console.log('Error', error);
        }
      }
    },
    users: {
      getUserByUsername: async username => {
        try {
          const request = await axios.get(
            `${usersUrl}${username}?client_id=${accessKey}`
          );
          return request.data;
        } catch (error) {
          console.log('Error', error);
        }
      },
      getUserData: async (username, dataType) => {
        // ? available dataType
        // "photos/"
        // "collections/"
        // "likes/"
        try {
          const request = await axios.get(
            `${usersUrl}${username}${dataType}?client_id=${accessKey}`
          );
          return request.data;
        } catch (error) {
          console.log('Error', error);
        }
      }
    }
  }
};

const {
  accessKey,
  collectionsUrl,
  photosUrl,
  searchUrl,
  statsUrl,
  usersUrl
} = Gallery.config;

export default Gallery;

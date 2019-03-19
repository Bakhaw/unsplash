import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/database';
import config from '../firebase/config';

const Gallery = {
  config: {
    accessKey: localStorage.getItem('accessKey'),
    collectionsUrl: 'https://api.unsplash.com/collections/',
    photosUrl: 'https://api.unsplash.com/photos/',
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
      init: async () => {
        firebase.initializeApp(config);
        const dbRef = firebase.database().ref('profile');
        await dbRef.on(
          'value',
          snapshot => {
            if (!accessKey) {
              localStorage.setItem('accessKey', snapshot.val().accessKey);
              console.log('Set item with success');
            }
          },
          error => {
            console.log('Error', error);
          }
        );
      },
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
      getAllPhotos: async () => {
        try {
          const request = await axios.get(
            `${photosUrl}?client_id=${accessKey}`
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

import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/database';
import config from '../firebase/config';

const Gallery = {
  config: {
    baseUrl: 'https://api.unsplash.com',
    getPhotosUrl: 'https://api.unsplash.com/photos/?client_id='
  },
  methods: {
    init: async () => {
      firebase.initializeApp(config);

      const accessKey = localStorage.getItem('accessKey');
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
    getPhotos: async accessKey => {
      const { getPhotosUrl } = Gallery.config;
      try {
        const request = await axios.get(`${getPhotosUrl}${accessKey}`);
        console.log(request.data);
      } catch (error) {
        console.log('Error', error);
      }
    }
  }
};

export default Gallery;

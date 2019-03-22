import React, { createContext, Component } from 'react';
import GalleryAPI from '../api/gallery';
import photos from '../api/dummy-data/photos';

const { Provider, Consumer } = createContext();

export const withContext = Component => props => (
  <Consumer>{context => <Component {...context} {...props} />}</Consumer>
);

export default class GalleryProvider extends Component {
  state = {
    isLoading: false,
    photos
  };

  setLoading = isLoading => this.setState({ isLoading });

  getAllPhotos = async page => {
    this.setState(prevState => ({
      photos: [...prevState.photos, ...prevState.photos]
    }));

    // if (!this.state.isLoading) {
    //   try {
    //     await this.setLoading(true);
    //     const newPhotos = await GalleryAPI.methods.photos.getAllPhotos(page);
    //     await this.setState(prevState => ({
    //       photos: [...prevState.photos, ...newPhotos]
    //     }));
    //     await this.setLoading(false);
    //   } catch (error) {
    //     console.log('Error', error);
    //   }
    // }
  };

  render() {
    const { isLoading, photos } = this.state;

    const value = {
      contextActions: {
        getAllPhotos: this.getAllPhotos
      },
      contextState: {
        isLoading,
        photos
      }
    };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

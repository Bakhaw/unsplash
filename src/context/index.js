import React, { createContext, Component } from 'react';
import GalleryAPI from 'api/gallery';
import dummyPhotos from '../api/dummy-data/photos';

const { Provider, Consumer } = createContext();

export const withContext = Component => props => (
  <Consumer>{context => <Component {...context} {...props} />}</Consumer>
);

class GalleryProvider extends Component {
  state = {
    currentPage: 1,
    isLoading: false,
    photos: []
  };

  setLoading = async isLoading => this.setState({ isLoading });

  getData = async (method, params) => {
    // ? method: {
    // ?  type: 'collections' || 'global' || 'photos' || 'users',
    // ?  name: see in api/gallery/index.js
    // ? }

    await this.setLoading(true);
    this.setState(prevState => ({
      photos: [...prevState.photos, ...dummyPhotos]
    }));
    await this.setLoading(false);

    // try {
    //   await this.setLoading(true);
    //   const newData = await GalleryAPI.methods[method.type][method.name]({
    //     ...params,
    //     isLoading: this.state.isLoading,
    //     page: this.state.currentPage
    //   });

    //   if (!newData) return;

    //   await this.setState(prevState => ({
    //     currentPage: prevState.currentPage + 1,
    //     isLoading: false,
    //     photos: [...prevState.photos, ...newData]
    //   }));
    // } catch (err) {
    //   return console.log(err);
    // }
  };

  render() {
    const { children } = this.props;

    const value = {
      contextActions: {
        getData: this.getData
      },
      contextState: {
        ...this.state
      }
    };

    return <Provider value={value}>{children}</Provider>;
  }
}

export default GalleryProvider;

import React, { Component } from 'react';

import GalleryAPI from 'api/gallery';
import Loader from 'components/Loader';
import Masonry from 'components/Masonry';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      currentPage: 1,
      photos: []
    };
  }

  componentDidMount() {
    this.getPhotos();
  }

  setLoading = isLoading => this.setState({ isLoading });

  getPhotos = async () => {
    await this.setLoading(true);

    const { searchQuery, searchType } = this.props.match.params;
    const newPhotos = await GalleryAPI.methods.global.search(
      searchType,
      searchQuery,
      this.state.currentPage
    );

    if (!newPhotos) return;

    await this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
      photos: [...prevState.photos, ...newPhotos.results]
    }));
    await this.setLoading(false);
  };

  render() {
    const { isLoading, photos } = this.state;

    if (photos.length === 0) return <Loader wrapperHeight='fullscreen' />;

    return (
      <div>
        <h1>Search screen heheh</h1>
        <Masonry
          cellCount={photos.length}
          isLoading={isLoading}
          onBottomFired={this.getPhotos}
          photos={photos}
        />
      </div>
    );
  }
}

export default Search;

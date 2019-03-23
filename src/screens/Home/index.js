import React, { Component } from 'react';
import styled from 'styled-components';

import Loader from 'components/Loader';
import Masonry from 'components/Masonry';
import { withContext } from 'context/';

const PhotosWrapper = styled.div`
  padding: 30px;
`;

class Home extends Component {
  state = {
    currentPage: 1
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleOnScroll);
    this.getPhotos(this.state.currentPage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  getPhotos = async page => {
    const { getAllPhotos } = this.props.contextActions;
    await getAllPhotos(page);
    await this.setState(prevState => ({
      currentPage: prevState.currentPage + 1
    }));
  };

  handleOnScroll = () => {
    const d = document.documentElement;
    const offset = d.scrollTop + window.innerHeight;
    const height = d.offsetHeight;

    if (offset >= height) {
      this.getPhotos(this.state.currentPage);
    }
  };

  render() {
    const { isLoading, photos } = this.props.contextState;

    if (photos.length === 0) return <Loader wrapperHeight='fullscreen' />;

    return (
      <PhotosWrapper>
        <Masonry />
        {isLoading && <Loader />}
      </PhotosWrapper>
    );
  }
}

export default withContext(Home);

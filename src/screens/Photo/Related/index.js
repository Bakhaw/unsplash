import React, { Component } from 'react';
import styled from 'styled-components';

import GalleryAPI from 'api/gallery';
import Loader from 'components/Loader';
import Masonry from 'components/Masonry';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

class Related extends Component {
  state = {
    isLoading: false,
    currentPage: 1,
    relatedPhotos: []
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleOnScroll);
    this.getUserPhotos();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  setLoading = isLoading => this.setState({ isLoading });

  getUserPhotos = async () => {
    await this.setLoading(true);

    const { currentPage } = this.state;
    const { splash } = this.props;
    const newRelatedPhotos = await GalleryAPI.methods.users.getUserData(
      splash.user.username,
      'photos',
      currentPage
    );

    console.log(newRelatedPhotos);
    if (!newRelatedPhotos) return;

    await this.setState(prevState => ({
      relatedPhotos: [...prevState.relatedPhotos, ...newRelatedPhotos]
    }));
    await this.setState(prevState => ({
      currentPage: prevState.currentPage + 1
    }));

    await this.setLoading(false);
  };

  // TODO, use handleOnScroll() function on <Masonry /> component and
  // TODO add a "onBottomFired" props, which is a function firing when user hits
  // TODO the bottom of the page
  handleOnScroll = () => {
    const d = document.documentElement;
    const offset = d.scrollTop + window.innerHeight;
    const height = d.offsetHeight;

    if (offset >= height && !this.state.isLoading) {
      this.getUserPhotos();
    }
  };

  render() {
    const { isLoading, relatedPhotos } = this.state;

    if (relatedPhotos.length === 0)
      return <Loader wrapperHeight='fullscreen' />;

    return (
      <Wrapper>
        <h1>Photos by {relatedPhotos[0].user.name}</h1>
        <Masonry cellCount={relatedPhotos.length} photos={relatedPhotos} />
        {isLoading && <Loader />}
      </Wrapper>
    );
  }
}

export default Related;

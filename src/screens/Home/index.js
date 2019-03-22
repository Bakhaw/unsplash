import React, { Component } from 'react';
import { withContext } from '../../context';
import Photos from './Photos';

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
      console.log({ height, offset });
      this.getPhotos(this.state.currentPage);
    }
  };

  render() {
    const { isLoading, photos } = this.props.contextState;

    if (photos.length === 0) return <h1>Loading items...!</h1>;

    return (
      <div>
        <Photos />
        {isLoading && <p>Loading items...!</p>}
      </div>
    );
  }
}

export default withContext(Home);

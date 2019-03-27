import React, { Component } from 'react';

import Loader from 'components/Loader';
import Masonry from 'components/Masonry';
import { withContext } from 'context/';
import Hero from './Hero';

class Home extends Component {
  async componentDidMount() {
    window.scrollTo(0, 0);
    await this.getPhotos();
  }

  getPhotos = async () => {
    const { getData } = this.props.contextActions;
    await getData({ type: 'photos', name: 'getAllPhotos' });
  };

  render() {
    const { isLoading, photos } = this.props.contextState;

    if (photos.length === 0) return <Loader wrapperHeight='fullscreen' />;

    return (
      <>
        <Hero />
        <Masonry
          cellCount={photos.length}
          isLoading={isLoading}
          onBottomFired={this.getPhotos}
          photos={photos}
        />
        {isLoading && <Loader />}
      </>
    );
  }
}

// function Home({ contextActions, contextState }) {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     getPhotos();
//   }, []);

//   const getPhotos = async () => {
//     const { getData } = contextActions;
//     await getData({ type: 'photos', name: 'getAllPhotos' });
//   };

//   const { isLoading, photos } = contextState;

//   if (photos.length === 0) return <Loader wrapperHeight='fullscreen' />;

//   return (
//     <>
//       <Hero />
//       <Masonry
//         cellCount={photos.length}
//         isLoading={isLoading}
//         onBottomFired={getPhotos}
//         photos={photos}
//       />
//       {isLoading && <Loader />}
//     </>
//   );
// }

export default withContext(Home);

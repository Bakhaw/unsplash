import React, { Component } from 'react';
import GalleryAPI from './api/gallery';
import Home from './screens/Home';
import UpdateApp from './components/UpdateApp';

class App extends Component {
  componentDidMount() {
    GalleryAPI.methods.init();
  }
  render() {
    return (
      <header>
        <Home />
        <UpdateApp />
      </header>
    );
  }
}

export default App;

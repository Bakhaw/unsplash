import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import GalleryAPI from './api/gallery';
import Router from './router';
import UpdateApp from './components/UpdateApp';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", 
    "Ubuntu", "Cantarell", "Fira Sans", 
    "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  body, ul {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style-type: none;
  }
`;

function App() {
  useEffect(() => {
    GalleryAPI.methods.global.init();
  }, []);

  return (
    <>
      <Router />
      <UpdateApp />
      <GlobalStyle />
    </>
  );
}
export default App;

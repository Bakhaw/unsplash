import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Router from './router';
import GalleryProvider from './context';
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
  return (
    <GalleryProvider>
      <Router />
      <UpdateApp />
      <GlobalStyle />
    </GalleryProvider>
  );
}
export default App;

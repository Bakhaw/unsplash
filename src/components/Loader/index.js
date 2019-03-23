import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props =>
    props.height === 'fullscreen' ? 'calc(100vh - 64px)' : '100px'};
  & div {
    color: #111;
  }
`;

function Loader({ wrapperHeight }) {
  return (
    <Wrapper height={wrapperHeight}>
      <CircularProgress size={35} />
    </Wrapper>
  );
}

export default Loader;

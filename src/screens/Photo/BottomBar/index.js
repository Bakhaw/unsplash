import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import ShareIcon from '@material-ui/icons/Share';
import styled from 'styled-components';

import Button from 'components/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

function BottomBar({ splash }) {
  return (
    <Wrapper>
      <Button>
        <ShareIcon fontSize='small' />
        <span>Share</span>
      </Button>
      <Button>
        <InfoIcon fontSize='small' />
        <span>Info</span>
      </Button>
    </Wrapper>
  );
}

export default BottomBar;

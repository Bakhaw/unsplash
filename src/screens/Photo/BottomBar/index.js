import React from 'react';
import LocationIcon from '@material-ui/icons/LocationOn';
import ShareIcon from '@material-ui/icons/Share';
import styled from 'styled-components';

import Button from 'components/Button';
import Infos from './Infos';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`;

const Location = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  span {
    cursor: pointer;
    color: #111;
    font-weight: 500;
    font-size: 12px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

function BottomBar({ splash }) {
  return (
    <Wrapper>
      <Location>
        {splash.location && (
          <>
            <LocationIcon fontSize='small' />
            <span>{splash.location.title}</span>
          </>
        )}
      </Location>
      <Actions>
        <Button>
          <ShareIcon fontSize='small' />
          <span>Share</span>
        </Button>
        <Infos splash={splash} />
      </Actions>
    </Wrapper>
  );
}

export default BottomBar;

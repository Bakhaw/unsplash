import React from 'react';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import styled from 'styled-components';

import GalleryAPI from 'api/gallery';
import Button from 'components/Button';
import UserDetail from 'components/UserDetail';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
`;

const DownloadLink = styled.a`
  height: 32px;
  width: 40px;
`;

function BottomBar({ splash }) {
  return (
    <Wrapper>
      <UserDetail splash={splash} />
      <DownloadLink
        href={`${splash.links.download_location}?force=true&client_id=${
          GalleryAPI.config.accessKey
        }`}
      >
        <Button>
          <ArrowDownIcon fontSize='small' />
        </Button>
      </DownloadLink>
    </Wrapper>
  );
}

export default BottomBar;

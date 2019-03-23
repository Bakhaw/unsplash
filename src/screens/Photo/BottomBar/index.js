import React from 'react';
import moment from 'moment';
import InfoIcon from '@material-ui/icons/Info';
import ShareIcon from '@material-ui/icons/Share';
import styled from 'styled-components';

import Button from 'components/Button';
import Dialog from 'components/Dialog';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 40px;
  width: 30%;
`;

const InfosDialogContentWrapper = styled.div`
  color: #111;
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    font-weight: 400;
  }
  & h1 {
    font-size: 21px;
  }
  & h2 {
    font-size: 12px;
  }
  & h3  {
    font-size: 25px;
    font-weight: 500;
  }
  & h4 {
    font-weight: 500;
    font-size: 12px;
    color: #999;
    margin: 15px 0 5px 0;
  }
`;

const InfoDialogButton = (
  <>
    <InfoIcon fontSize='small' />
    <span>Info</span>
  </>
);

const InfoDialogContent = ({ splash }) => (
  <InfosDialogContentWrapper>
    <Row>
      <div>
        <h1>Info</h1>
        <h2>Published on {moment(splash.created_at).format('MMMM D, YYYY')}</h2>
      </div>
    </Row>

    <Row>
      <Column>
        <h2>Views</h2>
        <h3>{splash.views}</h3>
      </Column>
      <Column>
        <h2>Downloads</h2>
        <h3>{splash.downloads}</h3>
      </Column>
      <Column>
        <h2>Likes</h2>
        <h3>{splash.likes}</h3>
      </Column>
    </Row>
    <hr />
    <Row>
      <Column>
        <h4>Camera Make</h4>
        {splash.exif.make}
      </Column>
      <Column>
        <h4>Camera Model</h4>
        {splash.exif.model}
      </Column>
      <Column>
        <h4>Focal Length</h4>
        {splash.exif.focal_length}
      </Column>
      <Column>
        <h4>Aperture</h4>
        {splash.exif.aperture}
      </Column>
      <Column>
        <h4>Shutter Speed</h4>
        {splash.exif.exposure_time}s
      </Column>
      <Column>
        <h4>ISO</h4>
        {splash.exif.iso}
      </Column>
      <Column>
        <h4>Dimensions</h4>
        {splash.width} x {splash.height}
      </Column>
    </Row>
  </InfosDialogContentWrapper>
);

function BottomBar({ splash }) {
  console.log(splash);
  return (
    <Wrapper>
      <Button>
        <ShareIcon fontSize='small' />
        <span>Share</span>
      </Button>
      <Dialog
        buttonContent={InfoDialogButton}
        dialogContent={<InfoDialogContent splash={splash} />}
      />
    </Wrapper>
  );
}

export default BottomBar;

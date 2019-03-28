import React from 'react';
import moment from 'moment';
import InfoIcon from '@material-ui/icons/Info';
import styled from 'styled-components';

import Dialog from 'components/Dialog';

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
    text-transform: capitalize;
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

const InfoDialogContent = ({ splash }) => {
  const SplashStats = ['views', 'downloads', 'likes'];
  const CameraDetail = [
    {
      label: 'Camera Make',
      key: 'make'
    },
    {
      label: 'Camera Model',
      key: 'model'
    },
    {
      label: 'Focal Length',
      key: 'focal_length'
    },
    {
      label: 'Aperture',
      key: 'aperture'
    },
    {
      label: 'Shutter speed',
      key: 'exposure_time'
    },
    {
      label: 'ISO',
      key: 'iso'
    }
  ];
  return (
    <InfosDialogContentWrapper>
      <Row>
        <div>
          <h1>Info</h1>
          <h2>
            Published on {moment(splash.created_at).format('MMMM D, YYYY')}
          </h2>
        </div>
      </Row>

      <Row>
        {SplashStats.map((stat, index) => (
          <Column key={`stat-${index}`}>
            <h2>{stat}</h2>
            <h3>{splash[stat]}</h3>
          </Column>
        ))}
      </Row>
      <hr />
      <Row>
        {CameraDetail.map(({ label, key }, index) => (
          <Column key={`camera-detail-${index}`}>
            <h4>{label}</h4>
            {splash.exif[key]}
          </Column>
        ))}
        <Column>
          <h4>Dimensions</h4>
          {splash.width} x {splash.height}
        </Column>
      </Row>
    </InfosDialogContentWrapper>
  );
};

const InfoDialogButton = (
  <>
    <InfoIcon fontSize='small' />
    <span>Info</span>
  </>
);

function Infos({ splash }) {
  return (
    <Dialog
      buttonContent={InfoDialogButton}
      dialogContent={<InfoDialogContent splash={splash} />}
    />
  );
}

export default Infos;

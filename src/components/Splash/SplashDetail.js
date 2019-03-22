import React from 'react';
import { Link } from 'react-router-dom';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import PlusIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

import HeartIcon from 'assets/icons/heart.svg';
import Button from '../Button';

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0,
    rgba(0, 0, 0, 0.199) 3.5%,
    rgba(0, 0, 0, 0.195) 7%,
    rgba(0, 0, 0, 0.19) 10.35%,
    rgba(0, 0, 0, 0.182) 13.85%,
    rgba(0, 0, 0, 0.174) 17.35%,
    rgba(0, 0, 0, 0.165) 20.85%,
    rgba(0, 0, 0, 0.155) 24.35%,
    rgba(0, 0, 0, 0.145) 27.85%,
    rgba(0, 0, 0, 0.135) 31.35%,
    rgba(0, 0, 0, 0.126) 34.85%,
    rgba(0, 0, 0, 0.118) 38.35%,
    rgba(0, 0, 0, 0.11) 41.85%,
    rgba(0, 0, 0, 0.105) 45.35%,
    rgba(0, 0, 0, 0.1) 48.85%,
    rgba(0, 0, 0, 0.103) 52.35%,
    rgba(0, 0, 0, 0.112) 55.85%,
    rgba(0, 0, 0, 0.126) 59.35%,
    rgba(0, 0, 0, 0.144) 62.85%,
    rgba(0, 0, 0, 0.165) 66.35%,
    rgba(0, 0, 0, 0.188) 69.85%,
    rgba(0, 0, 0, 0.213) 73.35%,
    rgba(0, 0, 0, 0.237) 76.85%,
    rgba(0, 0, 0, 0.262) 80.35%,
    rgba(0, 0, 0, 0.285) 83.85%,
    rgba(0, 0, 0, 0.306) 87.35%,
    rgba(0, 0, 0, 0.324) 90.85%,
    rgba(0, 0, 0, 0.338) 94.35%,
    rgba(0, 0, 0, 0.347) 97.85%,
    rgba(0, 0, 0, 0.35)
  );
  &:not(:hover) {
    visibility: hidden;
    transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;
  }
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LikeButton = styled.img`
  height: 32px;
  width: 15px;
  margin-right: 5px;
`;

const UserDetail = styled.div`
  display: flex;
  align-items: center;
  & img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }
  & span {
    color: #fff;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  }
`;

const likeImg = () => {
  alert('liked img');
};

function SplashDetail({ splash }) {
  return (
    <DetailWrapper className='SplashDetail'>
      <DetailRow>
        <Link to={`/photos/${splash.id}`}>
          <Button>
            <EyeIcon fontSize='small' />
          </Button>
        </Link>
        <DetailRow>
          <Button onClick={likeImg} title='Like photo'>
            <LikeButton alt='Like button' src={HeartIcon} />
            <span>{splash.likes}</span>
          </Button>
          <Button title='Add to collection'>
            <PlusIcon fontSize='small' /> Collect
          </Button>
        </DetailRow>
      </DetailRow>
      <DetailRow>
        <UserDetail>
          <img
            alt={`${splash.user.name} avatar`}
            src={splash.user.profile_image.large}
          />
          <span>{splash.user.name}</span>
        </UserDetail>
        <a href={splash.links.download + '?force=true'}>
          <Button>
            <ArrowDownIcon fontSize='small' />
          </Button>
        </a>
      </DetailRow>
    </DetailWrapper>
  );
}

export default SplashDetail;

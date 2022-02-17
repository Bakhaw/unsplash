import React from 'react';
// import EyeIcon from '@material-ui/icons/RemoveRedEye';
import PlusIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

import HeartIcon from '../../../assets/icons/heart.svg';
import Button from '../../Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
`;

const Like = styled.img`
  height: 32px;
  width: 15px;
`;

function TopBar({ splash }) {
  const likeImg = () => {
    alert('liked img');
  };

  return (
    <Wrapper>
      <Button onClick={likeImg}>
        <Like alt='Like button' src={HeartIcon} />
        <span>{splash.likes}</span>
      </Button>
      <Button>
        <PlusIcon fontSize='small' /> Collect
      </Button>
    </Wrapper>
  );
}

export default TopBar;

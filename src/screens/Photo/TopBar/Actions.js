import React from 'react';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import PlusIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

import HeartIcon from 'assets/icons/heart.svg';
import Button from 'components/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Like = styled.img`
  height: 32px;
  width: 15px;
`;

function Actions({ splash }) {
  const likeImg = () => {
    alert('liked image');
  };

  return (
    <Wrapper>
      <Button onClick={likeImg} title='Like photo'>
        <Like alt='Like button' src={HeartIcon} />
        <span>{splash.likes}</span>
      </Button>
      <Button title='Add to collection'>
        <PlusIcon fontSize='small' />
        <span>Collect</span>
      </Button>
      <Button>
        <ArrowDownIcon fontSize='small' />
        <span>Download</span>
      </Button>
    </Wrapper>
  );
}

export default Actions;

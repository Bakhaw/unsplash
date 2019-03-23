import React from 'react';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import styled from 'styled-components';

import Button from 'components/Button';

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

function BottomBar({ splash }) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default BottomBar;

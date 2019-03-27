import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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

function UserDetail({ splash }) {
  return (
    <Wrapper>
      <img
        alt={`${splash.user.name} avatar`}
        src={splash.user.profile_image.large}
      />
      <span>{splash.user.name}</span>
    </Wrapper>
  );
}

export default UserDetail;

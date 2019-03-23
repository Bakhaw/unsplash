import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  & img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }
  & h1,
  h2 {
    margin: 0;
  }
  & h1 {
    color: #111;
    font-size: 15px;
  }
  & h2 {
    color: #999;
    font-size: 11px;
  }
`;

function UserDetail({ splash }) {
  return (
    <Wrapper>
      <img
        alt={`${splash.user.name} avatar`}
        src={splash.user.profile_image.large}
      />
      <div>
        <h1>{splash.user.name}</h1>
        <h2>@{splash.user.username}</h2>
      </div>
    </Wrapper>
  );
}

export default UserDetail;

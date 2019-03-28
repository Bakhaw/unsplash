import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 10px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.68);
`;

const Link = styled.a`
  border-bottom: 1px solid #111;
  padding-bottom: 1.5px;
  color: rgba(0, 0, 0, 0.68);
  &:hover {
    color: #111;
  }
`;

const rootUrl = 'https://unsplash.com/';
const urlParams = '?utm_source=react-app-gallery&utm_medium=referral';

function UnsplashLink({ user }) {
  const photoLink = `${rootUrl}@${user.username}${urlParams}`;
  const unsplashLink = `${rootUrl}${urlParams}`;
  return (
    <Wrapper>
      <span>
        Photo by <Link href={photoLink}>{user.name}</Link> on{' '}
        <Link href={unsplashLink}>Unsplash</Link>
      </span>
    </Wrapper>
  );
}

export default UnsplashLink;

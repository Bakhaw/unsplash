import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Links = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Photos',
    to: '/photos'
  },
  {
    label: 'Collections',
    to: '/collections'
  }
];

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const ListItem = styled.li`
  margin: 0 10px;
  a {
    font-size: 16px;
    font-weight: 600;
    color: #999;
    transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out;
    &:hover {
      color: #111;
    }
    ${({ isActive }) =>
      isActive &&
      `
      color: #111 !important;
  `}
  }
`;

function NavLinks(props) {
  return (
    <List>
      {Links.map(({ label, to }, index) => {
        const isActive = to === props.location.pathname;
        return (
          <ListItem key={index} isActive={isActive}>
            <Link to={to}>{label}</Link>
          </ListItem>
        );
      })}
    </List>
  );
}

export default withRouter(NavLinks);

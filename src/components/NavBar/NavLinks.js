import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Links = [
  {
    label: 'Home',
    to: '/'
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
`;

const ListItem = styled.li`
  margin: 0 10px;
  a {
    font-size: 16px;
    font-weight: 600;
    color: #999;
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

function NavLinks({ location }) {
  return (
    <List>
      {Links.map(({ label, to }, index) => {
        const isActive = to === location.pathname;
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

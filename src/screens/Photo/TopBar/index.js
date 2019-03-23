import React from 'react';
import styled from 'styled-components';
import UserDetail from './UserDetail';
import Actions from './Actions';

const Wrapper = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

function TopBar({ splash }) {
  return (
    <Wrapper>
      <Row>
        <UserDetail splash={splash} />
        <Actions splash={splash} />
      </Row>
    </Wrapper>
  );
}

export default TopBar;

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  background-color: hsla(0, 0%, 100%, 0.85);
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  color: #777;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  margin: 0 5px;
  &:hover {
    background-color: #fff;
    color: #111;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  }
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;

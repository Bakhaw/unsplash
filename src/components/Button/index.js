import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 10px;
  background-color: hsla(0, 0%, 100%, 0.85);
  border-radius: 4px;
  border: 1px solid transparent;
  color: #777;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  margin: 0 5px;
  transition: background-color 0.15s ease-in-out;
  &:hover {
    background-color: #fff;
    transition: background-color 0.15s ease-in-out;
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

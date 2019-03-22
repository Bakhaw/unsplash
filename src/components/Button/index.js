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
  border: 1px solid #ddd;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
  color: #777;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  margin: 0 5px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    transition: all 0.2s ease-in-out;
    border-color: #999;
    color: #111;
  }
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;

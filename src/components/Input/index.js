import React from 'react';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  width: 100%;
  border-radius: 6px;
  background: #fff;
`;

function Input({ onChange, onClear, onSubmit, placeholder, value }) {
  return (
    <Paper elevation={1}>
      <Wrapper>
        <IconButton aria-label='Search' onClick={onSubmit}>
          <SearchIcon />
        </IconButton>
        <InputBase
          id='InputComponent'
          style={{ flex: 1 }}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
        {value !== '' && (
          <IconButton aria-label='Clear' onClick={onClear}>
            <ClearIcon />
          </IconButton>
        )}
      </Wrapper>
    </Paper>
  );
}

export default Input;

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../../../components/Input';

function Form({ history }) {
  const [search, setSearch] = useState('');

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const { push } = history;
    if (search === '') return;

    push(`/search/photos/${search}`);
  };

  const onClear = () => {
    setSearch('');
    document.getElementById('InputComponent').focus();
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        onChange={handleInputChange}
        onClear={onClear}
        onSubmit={onSubmit}
        placeholder='Search free high-resolution photos'
        value={search}
      />
    </form>
  );
}

export default withRouter(Form);

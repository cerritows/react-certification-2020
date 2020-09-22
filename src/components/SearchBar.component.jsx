import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

function SearchBar({ setSearchTerms }) {
  const [searchTerms, setLocalSearchTerms] = useState('');

  return (
    <div>
      <StyledInput
        type="text"
        value={searchTerms}
        onChange={(e) => {
          setLocalSearchTerms(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          setSearchTerms(searchTerms);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;

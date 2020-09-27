import React, { useState } from 'react';

import { FilledButton } from '../Button';

import { TextInput } from '../Input';
import { Icon } from '../Icon';
import Container, { Part } from '../Layout';

function SearchBar({ setSearchTerms }) {
  const [searchTerms, setLocalSearchTerms] = useState('');

  return (
    <Container direction="row" align="center">
      <Part bg="6" md="10">
        <TextInput
          value={searchTerms}
          onChange={(e) => {
            console.log('Local search', e.target.value);
            setLocalSearchTerms(e.target.value);
          }}
        >
          <Icon name="Search" size="2rem" />
        </TextInput>
      </Part>
      <Part bg="1" md="10">
        <FilledButton
          type="submit"
          onClick={() => {
            console.log('Search terms', searchTerms);
            setSearchTerms(searchTerms);
          }}
          outlined
        >
          SEARCH
        </FilledButton>
      </Part>
    </Container>
  );
}

export default SearchBar;

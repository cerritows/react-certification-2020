import React, { useState } from 'react';

import { FilledButton } from '../Button';

import { TextInput } from '../Input';
import { Icon } from '../Icon';
import Container from '../Layout';

function SearchBar({ setSearchTerms }) {
  const [searchTerms, setLocalSearchTerms] = useState('');

  return (
    <Container direction="row" align="center">
      <TextInput>
        <Icon name="Search" size="2rem" />
      </TextInput>
      {/* <IconInput
        type="text"
        value={searchTerms}
        onChange={(e) => {
          setLocalSearchTerms(e.target.value);
        }}
        Icon={IconWrapper(Search)}
      /> */}
      <FilledButton
        type="submit"
        onClick={() => {
          setSearchTerms(searchTerms);
          setLocalSearchTerms('');
        }}
        outlined
      >
        SEARCH
      </FilledButton>
    </Container>
  );
}

export default SearchBar;

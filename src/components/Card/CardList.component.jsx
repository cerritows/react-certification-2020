import React from 'react';
import styled from 'styled-components';

import Card from './Card.component';

const StyledCardList = styled.section`
  display: flex;
  flex-direction: row;
  padding: 3rem;
  // overflow-x: scroll;
  flex-wrap: wrap;
`;

function CardList({ isLoading, data }) {
  return (
    <StyledCardList>
      {isLoading && 'Loading'}
      {!isLoading &&
        data.items.map((element) => {
          return <Card element={element} key={element.id.videoId} />;
        })}
    </StyledCardList>
  );
}

export default CardList;

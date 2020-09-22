import React from 'react';
import styled from 'styled-components';

import CardHeader from './CardHeader.component';

import htmlEntities from '../../utils/entities';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  //flex: 1 0 21%;
  // height: 350px;
  width: 300px;
  min-width: 250px;
  padding: 1.5rem;
  margin: 0.5rem;

  border-radius: 16px;
  // background: #C8C6D7;
  // box-shadow: -1rem 0 3rem #000;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  & img {
    max-width: 100%;
  }
`;

function Card({ element }) {
  return (
    <StyledCard>
      <img
        src={element.snippet.thumbnails.medium.url}
        width={element.snippet.thumbnails.medium.width}
        alt="Video thumbnail"
      />

      <CardHeader>{htmlEntities.decode(element.snippet.title)}</CardHeader>
    </StyledCard>
  );
}

export default Card;

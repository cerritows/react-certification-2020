import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.theme.listDirection};
  // padding: 3rem;
  align-items: ${(props) => props.theme.alignItems};
  justify-content: stretch;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const verticalListing = {
  listDirection: 'column',
  cardDirection: 'row',
  cardSizes: {
    small: '90%',
    medium: '90%',
    big: '90%',
  },
  headerMargin: '0.5rem 0 0.5rem 1rem',
  alignItems: 'center',
};

const horizontalListing = {
  listDirection: 'row',
  cardDirection: 'column',
  cardSizes: {
    small: '100%',
    medium: '45%',
    big: '23%',
  },
  headerMargin: '1rem 0 1rem 0',
  alignItems: 'space-evenly',
};

function CardList({ children, direction }) {
  return (
    <ThemeProvider
      theme={direction === 'horizontal' ? horizontalListing : verticalListing}
    >
      <StyledCardList>{children}</StyledCardList>
    </ThemeProvider>
  );
}

export default CardList;

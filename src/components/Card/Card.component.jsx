import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  padding: 0.5em;
  width: ${(props) => props.theme.cardSizes.big};

  @media (max-width: 1280px) {
    width: ${(props) => props.theme.cardSizes.medium};
  }

  @media (max-width: 600px) {
    width: ${(props) => props.theme.cardSizes.small};
  }
`;

export default Card;

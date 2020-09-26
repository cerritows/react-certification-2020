import styled from 'styled-components';

const CardContent = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.cardDirection};
  position: relative;
  padding: 2rem;
  width: 100%;
  border-radius: 16px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #f7f5f7;

  & img {
    max-width: 100%;
  }
`;

export default CardContent;

import styled from 'styled-components';

const CardContent = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.cardDirection};
  position: relative;
  width: 100%;
  text-align: left;
`;

export default CardContent;

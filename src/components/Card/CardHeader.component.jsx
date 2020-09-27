import styled from 'styled-components';

const CardHeader = styled.h3`
  color: black;
  font-weight: 400;
  width: 100%;
  margin: ${(props) => props.theme.headerMargin};
`;

export default CardHeader;

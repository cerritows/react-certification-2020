import styled from 'styled-components';

const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${(props) => props.align || 'flex-start'};
  padding: 3rem;
`;

export default Container;

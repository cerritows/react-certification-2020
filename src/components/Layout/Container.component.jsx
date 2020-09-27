import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${(props) => props.align || 'flex-start'};
  margin: 3rem 0;
`;

export default Container;

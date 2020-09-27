import styled from 'styled-components';

const StyledPart = styled.div`
  width: ${(props) => (parseInt(props.bg, 10) * 100) / 12}%;
  padding: 5px;
  margin: 5px;
  text-align: ${(props) => props.align || 'inherit'};

  border-top: ${(props) => (props.top ? '1px solid gray' : 0)};
  border-bottom: ${(props) => (props.bottom ? '1px solid gray' : 0)};
  border-left: ${(props) => (props.left ? '1px solid gray' : 0)};
  border-right: ${(props) => (props.right ? '1px solid gray' : 0)};

  @media (max-width: 1280px) {
    width: ${(props) => (parseInt(props.md, 10) * 100) / 12}%;
  }

  @media (max-width: 600px) {
    width: ${(props) => (parseInt(props.sm, 10) * 100) / 12}%;
  }
`;

export default StyledPart;

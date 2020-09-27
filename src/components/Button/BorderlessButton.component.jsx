import styled from 'styled-components';

const BorderlessButton = styled.button`
  color: ${(props) => props.theme.primaryColor};
  border: none;
  font-size: 14px;
  background-color: inherit;
  font-family: inherit;
  cursor: pointer;
  height: 2rem;

  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;

export default BorderlessButton;

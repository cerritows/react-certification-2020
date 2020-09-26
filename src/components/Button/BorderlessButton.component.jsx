import styled from 'styled-components';

const BorderlessButton = styled.button`
  color: #580266;
  border: none;
  font-size: 14px;
  background-color: inherit;
  font-family: inherit;
  cursor: pointer;
  height: 2rem;

  &:hover {
    background-color: #f1e6f2;
  }
`;

export default BorderlessButton;

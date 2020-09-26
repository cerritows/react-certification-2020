import styled from 'styled-components';

const FilledButton = styled.button`
  color: white;
  border: 1px solid #f1e6f2;
  font-size: 14px;
  background-color: #580266;
  font-family: inherit;
  cursor: pointer;
  height: 2rem;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 5px;

  &:hover {
    background-color: #f1e6f2;
    border: 1px solid #580266;
    color: #580266;
  }
`;

export default FilledButton;

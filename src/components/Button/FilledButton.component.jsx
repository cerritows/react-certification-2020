import styled from 'styled-components';

const FilledButton = styled.button`
  color: white;
  border: 1px solid ${(props) => props.theme.primaryColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.primaryColor};
  font-family: inherit;
  cursor: pointer;
  height: 2rem;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 5px;
  width: 100%;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    border: 1px solid ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColor};
  }
`;

export default FilledButton;

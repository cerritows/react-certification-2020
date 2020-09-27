import styled from 'styled-components';

const Select = styled.option`
  height: 2rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.secondaryColor};
  min-width: 50%;
  background-color: white;
  padding: 5px;
  margin: 5px;

  &:active,
  :focus {
    box-shadow: 0 0 1px 1px #580266;
    outline: 0;
  }
`;

export default Select;

import styled from 'styled-components';

const NavItem = styled.div`
  display: inline-flex;
  align-items: center;
  float: ${(props) => props.align};

  padding: 0.25rem 0.75rem;

  height: 90%;

  color: ${(props) => props.theme.primaryColor};
  text-transform: uppercase;
  font-size: 20px;

  & a {
    color: inherit;
    text-decoration: None;
  }

  & button {
    text-transform: inherit;
    color: inherit;
    font-size: inherit;
    height: 90%;
    margin: 0;
    padding: 0;
  }

  & button:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }

  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
    cursor: pointer;
  }

  &:hover a {
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;

export default NavItem;

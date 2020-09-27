import styled from 'styled-components';

const NavItem = styled.div`
  display: inline-flex;
  align-items: center;
  float: ${(props) => props.align};

  text-transform: uppercase;
  font-size: 20px;
  height: 100%;
  margin: 0 0.25rem;

  & a {
    padding: 0.25rem 0.75rem;
    color: inherit;
    height: 90%;
    text-decoration: None;
    display: inline-flex;
    align-items: center;
    color: ${(props) => props.theme.primaryColor};
  }

  & button {
    padding: 0.25rem 0.75rem;
    color: inherit;
    font-size: inherit;
    height: 100%;
  }

  & button:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }

  &:hover a {
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;

export default NavItem;

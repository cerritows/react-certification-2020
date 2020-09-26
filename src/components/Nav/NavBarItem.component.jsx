import styled from 'styled-components';

const NavItem = styled.div`
  display: inline-flex;
  align-items: center;
  float: ${(props) => props.align};

  padding: 0.25rem 0.75rem;

  height: 90%;

  color: purple;
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
    background-color: #f1e6f2;
  }

  &:hover {
    background-color: #f1e6f2;
    cursor: pointer;
  }

  &:hover a {
    color: purple;
    background-color: #f1e6f2;
  }
`;

export default NavItem;

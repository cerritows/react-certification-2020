import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-left: 1px solid ${(props) => props.theme.backgroundColor};
  padding-left: 10px;
  height: 90%;
  display: inline-flex;
  align-items: center;
`;

function ProfileBadge({ user }) {
  return <Container>Hello {user}</Container>;
}

export default ProfileBadge;

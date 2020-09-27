import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
`;

function withLoader(WrappedComponent) {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <LoaderContainer>
          <img src="/loading.gif" alt="Indicator of page loading status" />
        </LoaderContainer>
      );
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoader;

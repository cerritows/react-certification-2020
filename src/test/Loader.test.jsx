import { render, screen } from '@testing-library/react';
import React from 'react';
import withLoader from '../components/Loader';

describe('Loader HOC component: ', () => {
  it('should display a loader image while loading state is true', () => {
    const TestComponent = () => {
      return <h1>Test</h1>;
    };

    const ComponentWithLoader = withLoader(TestComponent);

    render(<ComponentWithLoader isLoading />);
    expect(screen.getByAltText('Indicator of page loading status')).toBeInTheDocument();
    expect(screen.queryByText('Test')).toBeNull();
  });

  it('should display the component when the loading state is false', () => {
    const TestComponent = () => {
      return <h1>Test</h1>;
    };

    const ComponentWithLoader = withLoader(TestComponent);

    render(<ComponentWithLoader isLoading={false} />);
    expect(screen.queryByText('Indicator of page loading status')).toBeNull();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

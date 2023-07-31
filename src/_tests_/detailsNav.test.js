import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DetailsNav from '../components/detailsNav';

describe('detailsNav component', () => {
  it('should render the header', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <DetailsNav />
      </BrowserRouter>,
    );

    const bar = getByTestId('id-header'); // eslint-disable-next-line no-unused-expressions
    expect(bar).toBeInTheDocument;
  });

  it('should give the correct snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <DetailsNav />
      </BrowserRouter>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

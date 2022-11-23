import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact is rendering', () => {
  it('renders', () => {
    render(<Contact/>);
  })

  it('renders', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  });

  it('renders correct h1 text', () => {
    const { getByTestId } = render(<Contact/>)
    expect(getByTestId('title')).toHaveTextContent('Contact me')
  })

  it('renders correct submit button text', () => {
    const {getByTestId} = render(<Contact/>)
    expect(getByTestId('submit')).toHaveTextContent('Submit');
  })
})


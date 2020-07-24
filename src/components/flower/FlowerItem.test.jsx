import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import FlowerItem from './FlowerItem';
import StateProvider from 'context/StateProvider';

const mocks = {
  profile_picture: 'mock.png',
  favorit: true,
  name: 'mock flower',
  latin_name: 'Lorem ipsum dolor sit amet',
  sightings: 5,
}

const renderComponent = contextValue => (
  render(
    <StateProvider value={{ authToken: contextValue }}>
      <FlowerItem flower={mocks} />
    </StateProvider>
  )
);

describe('Test block FlowerItem.jsx', () => {
  test('should render a Flower name', () => {
    renderComponent(null);
    expect(screen.getByText(/mock flower/i)).toBeInTheDocument();
  });

  test('should render number of Flower sightings token', () => {
    renderComponent(null);
    expect(screen.getByText(/5 sightings/i)).toBeInTheDocument();
  });

  test('should render favorite Flower with token present', () => {
    renderComponent('test token');
    expect(screen.getByText(/star.svg/i)).toBeInTheDocument();
  });

  test('should not render favorite Flower without token', () => {
    renderComponent(null);
    expect(screen.queryByText(/star.svg/i)).not.toBeInTheDocument();
  });

  test('should render Flower snapshot', () => {
    const { asFragment } = renderComponent('test token');
    expect(asFragment).toMatchSnapshot();
  });

});
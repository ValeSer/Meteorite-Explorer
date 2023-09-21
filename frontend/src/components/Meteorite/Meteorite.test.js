import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Meteorite from './Meteorite'
import React from 'react';

it('renders a row', () => {
  const data = {name: "Aachen", year: 1980}
  const { getByText } = render(<Meteorite data={data} />);
  const nameElement = getByText(/Aachen/i);
  expect(nameElement).toBeInTheDocument();
});
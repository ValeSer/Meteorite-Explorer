import { getAllByPlaceholderText, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Search from './Search'
import React from 'react';

it('renders empty string with no input', (done) => {
  const user = userEvent.setup()
  const searchMeteorites = (searchTerm) => {
    expect(searchTerm).toEqual('');
    done();
  }

  const { getByRole, getByPlaceholderText } = render(<Search searchMeteorites={searchMeteorites}/>);
  const button =  getByRole('button');
  const input = getByPlaceholderText('Enter search terms');

  user.click(button)
  

  
});
import { fireEvent, getAllByPlaceholderText, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Search from './Search'
import React from 'react';

it('returns empty string with no input', (done) => {
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

it('returns input', (done) => {
  const user = userEvent.setup()
  const searchMeteorites = (searchTerm) => {
    expect(searchTerm).toEqual('Aac');
    done();
  }

  const { getByRole, getByPlaceholderText } = render(<Search searchMeteorites={searchMeteorites}/>);
  const button =  getByRole('button');
  const input = getByPlaceholderText('Enter search terms');
  fireEvent.change(input, {
    target: {
      value: 'Aac'
    }
  })

  user.click(button)
    
});
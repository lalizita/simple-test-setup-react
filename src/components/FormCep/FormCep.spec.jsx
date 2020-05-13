import React from 'react'
import { render, fireEvent, getByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { act } from 'react-dom/test-utils';
import FormCep from './FormCep'

const addressResponse = {
  cep: '03047000',
  logradouro: 'Rua x',
  bairro: 'Novo rioe',
}

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(addressResponse)
  })
);

it('Should render cep form', async () => {
  const { debug, getByPlaceholderText, container } = render(<FormCep />)
  const cepInput = getByPlaceholderText('CEP').closest('input')
  fireEvent.change(cepInput, { target: { value: '03047000' } })

  await act(() => global.fetch)

  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(container).toMatchSnapshot()
})
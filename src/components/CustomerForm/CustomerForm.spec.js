import React from 'react'
import { render, fireEvent, getByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CustomeForm from './CustomerForm'

it('Should render Customer form correctly', () => {
  const { debug, getByText } = render(<CustomeForm />)

  expect(getByText('Name')).toBeTruthy()
  expect(getByText('Location')).toBeTruthy()
  expect(getByText('Boop')).toBeTruthy()
  expect(getByText('Remember Me')).toBeTruthy()
})

it('Should validate field correctly', () => {
  const { debug, getByPlaceholderText, getByTestId, getByText, queryAllByText } = render(<CustomeForm />)

  const nameInput = getByPlaceholderText('Nome')
  fireEvent.change(nameInput, { target: { value: 'Lais Lima' } })

  const locationInput = getByTestId('location')
  fireEvent.click(locationInput)

  const choosedOption = getByText('DC').closest('option')
  fireEvent.click(choosedOption)

  const rememberInput = getByTestId('remember')
  fireEvent.click(rememberInput)

  const submitButton = getByText('Submit').closest('button')
  fireEvent.click(submitButton)

  // debug()

  expect(getByText('Lais Lima')).toBeTruthy()
  expect(getByText('boop')).toBeTruthy()
})
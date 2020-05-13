import React from 'react'
import { render, fireEvent, getByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Toggle from './Toggle'

it('Should render Turn on', () => {
  const { getByText, debug } = render(<Toggle />)
  expect(getByText('Turn on')).toBeTruthy()
})


it('Should render Turn off after click', () => {
  const { getByText, debug } = render(<Toggle />)
  const button = getByText('Turn on').closest('button')
  fireEvent.click(button)
  expect(getByText('Turn off')).toBeTruthy()
})
import React from 'react'
import { render, fireEvent, getByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Render from './Render'

it('Should render Stranger text', () => {
  const { debug, getByText } = render(<Render />)
  expect(getByText('Hey, stranger')).toBeTruthy()
})

it('Should render name text', () => {
  const { debug, getByText } = render(<Render name="Jane Doe" />)
  expect(getByText('Hello, Jane Doe!')).toBeTruthy()
})
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Home } from '#/components/Home'

test('Home component renders correctly', () => {
  render(<Home />)
  const welcomeMessage = screen.getByText(/Bem vindo\(a\) a página inicial!/i)
  expect(welcomeMessage).toBeInTheDocument()
})

import { render, screen } from '@testing-library/react'
import { vi, test, expect } from 'vitest'
import Landing from '../app/page'


vi.mock('next/font/google', () => {
    return {
      Inter: () => ({ className: 'inter' }),
    }
  })

test('Landing', async () => {
    render(await Landing())
    expect(screen.getByText('Welcome to CalendarCraft'))
})

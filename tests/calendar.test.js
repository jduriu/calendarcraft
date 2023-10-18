import { render, screen } from '@testing-library/react'
import { vi, test, expect } from 'vitest'
import Calendar from '../app/calendar/page'


vi.mock('next/font/google', () => {
    return {
      Inter: () => ({ className: 'inter' }),
    }
  })

test('Calendar', async () => {
    render(await Calendar())
    expect(screen.getByText('September'))
})

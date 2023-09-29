import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clubspot Calendar Technical',
  description: 'A simple calendar application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GlobalProvider from '../context/Global'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo List - Kanboard Board',
  description: 'Todolist project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  )
}

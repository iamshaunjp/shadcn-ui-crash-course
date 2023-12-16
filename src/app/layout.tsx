import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Wine } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bourbon Finder',
  description: 'Find your favorite bottle here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className=' flex flex-row h-24 w-full bg-rose-950 items-center p-5 shadow-lg'>
          <h1 className="text-white text-2xl font-bold">Bourbon Finder</h1>
          <Wine className='text-white mx-5' size={36} />
        </header>
        <nav className='p-10'>
          {children}
        </nav>
      </body>
    </html>
  )
}
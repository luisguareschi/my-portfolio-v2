import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Luis Guareschi',
    description: 'My personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <meta name="theme-color" content="#0A192FFF" />
          <title>Luis Guareschi</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

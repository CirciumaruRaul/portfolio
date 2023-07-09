import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Raul&aposs Portfolio</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

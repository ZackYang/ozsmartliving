import type { Metadata } from 'next'
import '../globals.scss'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'OZ Smart Living',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <div className="container mx-auto min-h-screen flex-col items-center justify-between">
          {children}
        </div>
      </body>
    </html>
  )
}

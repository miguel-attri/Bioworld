import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pack Pilot – Packaging Matrix Automation Platform | Phase 1 Statement of Work',
  description: 'Statement of Work for Pack Pilot Phase 1 - Packaging Matrix Automation Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


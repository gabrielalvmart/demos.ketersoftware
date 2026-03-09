import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Demos - Keter Software',
  description: 'Demos de sitios web profesionales para diferentes tipos de negocios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

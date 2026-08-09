import { Inter, Fira_Sans_Condensed } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const display = Fira_Sans_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata = {
  title: 'Ezequiel Calderón Dinarte · PriceSmart',
  description:
    'Candidato interno para liderazgo en PriceSmart. Experiencia, colaboración y resultados.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-white text-gray-900 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

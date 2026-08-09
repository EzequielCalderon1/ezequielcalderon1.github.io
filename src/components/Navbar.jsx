'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100/60'
      }`}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav
        aria-label="Navegación principal"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between"
      >
        <a
          href="#"
          aria-label="Volver al inicio"
          className={`font-mono text-sm font-black tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ps-red rounded ${
            scrolled ? 'text-ps-navy hover:text-ps-red' : 'text-ps-navy hover:text-ps-red'
          }`}
        >
          EC<span className="text-ps-red" aria-hidden="true">.</span>
        </a>

        <ul className="flex items-center gap-6" role="list">
          {NAV_LINKS.map(({ label, href }, i) => (
            <motion.li
              key={href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.35, duration: 0.4 }}
            >
              <a
                href={href}
                className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ps-red rounded ${
                  scrolled ? 'text-gray-600 hover:text-ps-navy' : 'text-gray-600 hover:text-ps-navy'
                }`}
              >
                {label}
              </a>
            </motion.li>
          ))}

        </ul>
      </nav>
    </motion.header>
  )
}

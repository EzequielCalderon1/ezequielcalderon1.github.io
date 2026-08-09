'use client'

import { motion } from 'framer-motion'
import StarburstBadge from './StarburstBadge'

const COMMITMENTS = [
  'Responsabilidad', 'Compromiso', 'Aprendizaje continuo',
  'Cercanía al equipo', 'Orientación a resultados',
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/ezequielcalderon1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export default function Contact() {
  return (
    <section id="cierre" aria-labelledby="contact-heading" className="bg-[#1d3461] text-white h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-6 h-full overflow-y-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-x-16 items-center"
        >
          {/* Red left accent bar */}
          <div
            className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-ps-red via-ps-red/50 to-transparent"
            aria-hidden="true"
          />
          {/* Ambient glow */}
          <div
            className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-ps-red/5 blur-[80px] pointer-events-none"
            aria-hidden="true"
          />

          <motion.div variants={fadeUp} className="col-span-12 lg:col-span-7 relative">
            <motion.div variants={fadeUp}>
              <StarburstBadge number="06" className="mb-6 w-16 h-16" />
            </motion.div>
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-white/40 uppercase mb-5">
              06 &mdash; Cierre
            </p>
            <h2
              id="contact-heading"
              className="font-display uppercase text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-white mb-6"
            >
              Listo para<br />
              <span className="bg-gradient-to-r from-blue-200 to-ps-red bg-clip-text text-transparent">
                el reto.
              </span>
            </h2>

            {/* commitment statement */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-6">
              <p className="text-white/75 text-sm leading-[1.9]">
                Si me brindan la oportunidad, encontrarán en mí a una persona{' '}
                <strong className="text-white">cercana al equipo</strong>, enfocada en{' '}
                <strong className="text-white">los resultados</strong>, comprometida con el{' '}
                <strong className="text-white">desarrollo de las personas</strong> y dispuesta
                a dar lo mejor de sí para hacer crecer el departamento, apoyar al club y
                contribuir al éxito de PriceSmart.
              </p>
            </div>

            {/* commitment pills */}
            <div className="flex flex-wrap gap-2">
              {COMMITMENTS.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-full border border-ps-red/30 bg-ps-red/10 text-ps-red/90 text-xs font-medium tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-6"
          >
            {/* name card */}
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
              <div className="w-10 h-[2px] bg-ps-red mb-5" aria-hidden="true" />
              <p className="text-white font-bold text-lg mb-1">Ezequiel Calderón Dinarte</p>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-white/40 uppercase">
                Ejecutivo B2B &mdash; Candidato a Gerente B2B
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <img
                  src="/pricesmartid.svg"
                  alt="PriceSmart"
                  className="h-[1.4rem] w-auto opacity-60"
                />
              </div>
            </div>

            {/* socials */}
            <ul aria-label="Redes sociales" className="flex gap-3">
              {SOCIALS.map(({ label, href, icon }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3 }}
                    className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/20 bg-white/5 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ps-red"
                  >
                    {icon}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

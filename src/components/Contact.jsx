'use client'

import { motion, useReducedMotion } from 'framer-motion'
import StarburstBadge from './StarburstBadge'

const COMMITMENTS = [
  'Responsabilidad', 'Compromiso', 'Aprendizaje continuo',
  'Cercanía al equipo', 'Orientación a resultados',
]

const EASE = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const pillStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.55 } },
}

const pill = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 380, damping: 22 } },
}

export default function Contact() {
  const reduce = useReducedMotion()

  return (
    <section
      id="cierre"
      aria-labelledby="contact-heading"
      className="relative bg-[#1d3461] bg-grid-dark text-white h-screen overflow-hidden"
    >
      {/* Ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-ps-red/10 blur-[130px] animate-drift" />
        <div className="absolute -bottom-48 -left-40 w-[560px] h-[560px] rounded-full bg-ps-blue/20 blur-[130px] animate-drift-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-8 h-full flex items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative w-full grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-x-14 items-center"
        >
          {/* Barra roja que se dibuja hacia abajo */}
          <motion.div
            className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-ps-red via-ps-red/50 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            aria-hidden="true"
          />

          {/* ── Columna izquierda ── */}
          <div className="col-span-12 lg:col-span-7 relative pl-6">
            <motion.div variants={fadeUp}>
              <StarburstBadge number="06" className="mb-5" />
              <p className="font-mono text-[0.65rem] tracking-[0.25em] text-white/40 uppercase mb-4">
                06 &mdash; Cierre
              </p>
            </motion.div>

            <motion.h2
              id="contact-heading"
              variants={fadeUp}
              className="font-display uppercase text-5xl lg:text-6xl xl:text-7xl leading-[0.88] tracking-tight text-white mb-6"
            >
              Listo para<br />
              <motion.span
                className="bg-gradient-to-r from-blue-200 via-white to-ps-red bg-clip-text text-transparent"
                style={{ backgroundSize: '220% auto', backgroundPosition: '0% 50%' }}
                animate={reduce ? undefined : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={reduce ? undefined : { duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              >
                el reto.
              </motion.span>
            </motion.h2>

            {/* Declaración de compromiso */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 mb-5 overflow-hidden"
            >
              <span
                className="absolute -top-6 left-4 font-display text-[7rem] leading-none text-white/[0.05] select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="relative text-white/75 text-sm leading-[1.85]">
                Si me brindan la oportunidad, encontrarán en mí a una persona{' '}
                <strong className="text-white">cercana al equipo</strong>, enfocada en{' '}
                <strong className="text-white">los resultados</strong>, comprometida con el{' '}
                <strong className="text-white">desarrollo de las personas</strong> y dispuesta
                a dar lo mejor de sí para hacer crecer el departamento, apoyar al club y
                contribuir al éxito de PriceSmart.
              </p>
            </motion.div>

            {/* Pills */}
            <motion.div variants={pillStagger} className="flex flex-wrap gap-2">
              {COMMITMENTS.map((item) => (
                <motion.span
                  key={item}
                  variants={pill}
                  className="px-3.5 py-1.5 rounded-full border border-ps-red/30 bg-ps-red/10 text-ps-red/90 text-xs font-medium tracking-wide transition-colors duration-300 hover:bg-ps-red/20 hover:border-ps-red/60 hover:text-white"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* ── Columna derecha ── */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
            {/* Cita */}
            <motion.blockquote
              variants={fadeUp}
              className="relative rounded-2xl border-l-2 border-ps-red/60 bg-white/[0.03] pl-5 pr-5 py-4"
            >
              <p className="text-white/70 text-sm italic leading-relaxed">
                El crecimiento comienza cuando uno sale de su zona de comodidad
                y se pone a prueba en nuevos ámbitos.
              </p>
            </motion.blockquote>

            {/* Tarjeta de firma */}
            <motion.div
              variants={fadeUp}
              className="group rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition-all duration-300 hover:border-ps-red/40 hover:bg-white/[0.07]"
            >
              <motion.div
                className="h-[2px] bg-ps-red mb-5 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.75 }}
                style={{ width: '2.5rem' }}
                aria-hidden="true"
              />
              <p className="text-white font-bold text-lg mb-1">Ezequiel Calderón Dinarte</p>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-white/40 uppercase">
                Ejecutivo B2B &mdash; Candidato a Gerente B2B
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <img
                  src="/pricesmartid.svg"
                  alt="PriceSmart"
                  className="h-[1.4rem] w-auto opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="font-mono text-[0.55rem] tracking-[0.2em] text-white/30 uppercase">
                  Costa Rica &mdash; 2026
                </span>
              </div>
            </motion.div>

            {/* Cierre */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 pl-1">
              <motion.span
                className="w-6 h-px bg-ps-red flex-shrink-0"
                animate={reduce ? undefined : { scaleX: [1, 1.9, 1], opacity: [0.6, 1, 0.6] }}
                transition={reduce ? undefined : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: 'left' }}
                aria-hidden="true"
              />
              <p className="font-mono text-[0.65rem] tracking-[0.25em] text-white/45 uppercase">
                Gracias por la oportunidad
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

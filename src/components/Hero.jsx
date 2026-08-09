'use client'

import { motion } from 'framer-motion'
import StarburstBadge from './StarburstBadge'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col bg-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Starburst — decorative section marker */}
      <StarburstBadge number="01" className="absolute top-14 left-6 lg:top-16 lg:left-10 z-20" />

      {/* Top: PriceSmart logo */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="pt-14 pb-2 flex justify-center px-6"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#1d3461] rounded-full">
          <img
            src="/pricesmartid.svg"
            alt="PriceSmart"
            width={96}
            height={31}
            className="h-[1.6rem] w-auto"
          />
          <span className="font-mono text-[0.6rem] tracking-[0.2em] text-white/60 uppercase">Candidato Interno &mdash; 2026</span>
        </div>
      </motion.div>

      {/* Center: heading + pill subtitle */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-16 py-6">
        <motion.h1
          id="hero-heading"
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-display uppercase text-center leading-[0.88] tracking-tight w-full"
          style={{ fontSize: 'clamp(3.2rem, 14vw, 13rem)' }}
        >
          <motion.span variants={fadeUp} className="block overflow-hidden">
            <span className="block text-gray-900">Llevando</span>
          </motion.span>
          <motion.span variants={fadeUp} className="block overflow-hidden">
            <span className="block text-ps-navy">el liderazgo.</span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mt-8 md:mt-10 inline-flex items-center px-7 py-2.5 border border-gray-800 rounded-full text-sm tracking-wide text-gray-800"
        >
          Experiencia · Colaboración · Resultados
        </motion.p>
      </div>

      {/* Bottom strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="border-t border-gray-100 px-6 lg:px-10 py-6 grid grid-cols-12 gap-x-4 gap-y-5 items-center"
      >
        {/* Name + Sede + Disponible */}
        <div className="col-span-12 sm:col-span-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-px bg-ps-red flex-shrink-0" aria-hidden="true" />
            <p className="text-ps-navy font-bold text-sm">Ezequiel Calderón Dinarte</p>
          </div>
          <div className="flex flex-wrap gap-6 pl-9" aria-hidden="true">
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase">Sede</p>
              <p className="text-xs text-gray-600 mt-0.5">PriceSmart Costa Rica</p>
            </div>
            <div className="flex items-center gap-1.5 self-end">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase">Disponible</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="col-span-12 sm:col-span-4 flex flex-wrap gap-3 sm:justify-center">
          <a
            href="#trayectoria"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1d3461] text-white text-sm font-semibold rounded-full hover:bg-ps-red active:scale-[0.98] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d3461] shadow-md"
          >
            Ver trayectoria
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-full hover:border-ps-navy hover:text-ps-navy transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ps-navy"
          >
            Contacto
          </a>
        </div>

        {/* Área: Servicio a Negocios — circle badge */}
        <div className="col-span-12 sm:col-span-3 flex sm:justify-end" aria-hidden="true">
          <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#1d3461] flex flex-col items-center justify-center text-white border-2 border-ps-blue/60 flex-shrink-0">
            <p className="font-mono text-[0.42rem] tracking-[0.08em] uppercase text-white/70 leading-tight">Servicio a</p>
            <p className="font-bold text-[0.62rem] leading-snug tracking-wide uppercase">Negocios</p>
            <p className="font-mono text-[0.38rem] tracking-[0.08em] uppercase text-white/50 leading-tight mt-0.5">Área</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import StarburstBadge from './StarburstBadge'

const SKILLS = [
  'Liderazgo de equipos', 'Servicio al cliente', 'Análisis de datos',
  'Gestión de operaciones', 'Excel avanzado', 'Power BI',
  'Comunicación efectiva', 'Resolución de problemas', 'Trabajo en equipo',
  'Orientación a resultados', 'Capacitación', 'Mejora continua',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

export default function About() {
  return (
    <section id="sobre-mi" aria-labelledby="about-heading" className="bg-[#1d3461] text-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-12 gap-x-6 gap-y-12 items-start"
        >
          {/* Left: starburst + heading + bio */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div variants={fadeUp}>
              <StarburstBadge number="02" className="mb-6 w-16 h-16" />
            </motion.div>
            <motion.p variants={fadeUp} className="font-mono text-[0.65rem] tracking-[0.25em] text-white/40 uppercase mb-5">
              02 &mdash; Sobre mí
            </motion.p>
            <motion.h2
              id="about-heading"
              variants={fadeUp}
              className="font-display uppercase text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-white mb-8"
            >
              Quién<br />soy
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-white/70 text-[0.95rem] leading-[1.8]">
              <p>
                Soy colaborador de PriceSmart con experiencia en operaciones
                y servicio a negocios. Me caracterizo por mi compromiso con
                los resultados, la mejora continua y el trabajo en equipo.
              </p>
              <p>
                Estoy convencido de que el liderazgo se demuestra con
                acciones: escuchando al equipo, tomando decisiones
                basadas en datos y poniendo siempre al miembro y al negocio
                en el centro.
              </p>
            </motion.div>
          </div>

          {/* Right: skills */}
          <div className="col-span-12 lg:col-span-7 lg:pl-6">
            <motion.p variants={fadeUp} className="font-mono text-[0.65rem] tracking-[0.25em] text-white/40 uppercase mb-5">
              Competencias
            </motion.p>
            <motion.ul
              variants={stagger}
              aria-label="Lista de competencias"
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5"
            >
              {SKILLS.map((skill) => (
                <motion.li
                  key={skill}
                  variants={fadeUp}
                  className="group flex items-center gap-2.5 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/10 hover:border-white/30 transition-all cursor-default"
                >
                  <svg
                    className="w-4 h-4 text-ps-red flex-shrink-0 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80 text-xs font-medium leading-snug">{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

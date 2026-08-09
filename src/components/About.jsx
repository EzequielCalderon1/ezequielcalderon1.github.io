'use client'

import { motion } from 'framer-motion'
import StarburstBadge from './StarburstBadge'

const TIMELINE = [
  {
    year: '2023',
    role: 'Front End — Puertas',
    desc: 'Operación del club, servicio al socio y disciplina en procesos. Primera comisión por renovaciones como cajero, lo que despertó mi interés por ventas.',
    color: '#2e5ea6',
  },
  {
    year: 'Ene 2024',
    role: 'Asistente B2B',
    desc: 'Procesos administrativos, atención a ejecutivos, coordinación de entregas y seguimiento a socios. Obtuve mi licencia de conducir y me preparé constantemente.',
    color: '#2e5ea6',
  },
  {
    year: 'Fin 2024',
    role: 'Ejecutivo B2B',
    desc: 'Administración de cartera, visitas comerciales, nuevos negocios y zonas secundarias: Turrialba y Pérez Zeledón.',
    color: '#e31837',
  },
]

const TRAITS = [
  'Disciplinado', 'Enfocado', 'Comprometido',
  'Íntegro', 'Trabajo en equipo', 'Orientado a resultados',
  'Aprendizaje continuo', 'Adaptabilidad',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
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
              Ezequiel<br />
              <span className="text-ps-red">Calderón</span>
            </motion.h2>

            {/* Values card */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-ps-red/30 bg-ps-red/5 p-5 mb-5">
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ps-red/70 uppercase mb-3">Valores que me guían</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Me identifico plenamente con los valores de PriceSmart, especialmente
                con la <strong className="text-white">integridad</strong>. La confianza,
                el respeto y el trabajo en equipo son la base para construir equipos
                sólidos y relaciones duraderas con colaboradores y socios.
              </p>
            </motion.div>

            {/* Education card */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-ps-blue/30 bg-ps-blue/5 p-5">
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ps-blue/70 uppercase mb-2">Formación actual</p>
              <p className="text-white font-semibold text-sm">Estudiante de Derecho</p>
              <p className="text-white/50 text-xs mt-1 leading-relaxed">
                El aprendizaje continuo es una responsabilidad personal y profesional.
              </p>
            </motion.div>
          </div>

          {/* Right: timeline + traits */}
          <div className="col-span-12 lg:col-span-7 lg:pl-6 space-y-10">
            {/* Timeline */}
            <div>
              <motion.p variants={fadeUp} className="font-mono text-[0.65rem] tracking-[0.25em] text-white/40 uppercase mb-6">
                Trayectoria en PriceSmart
              </motion.p>
              <div className="relative">
                <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/10" aria-hidden="true" />
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={item.role}
                    variants={fadeUp}
                    className="relative flex gap-6 pb-8 last:pb-0"
                  >
                    <div className="w-20 flex-shrink-0 text-right pt-0.5">
                      <span className="font-mono text-[0.65rem] text-white/40 tracking-wider">{item.year}</span>
                    </div>
                    <div
                      className="relative z-10 flex-shrink-0 mt-1.5 w-3 h-3 rounded-full border-2"
                      style={{ borderColor: item.color, backgroundColor: item.color }}
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-white text-sm mb-1.5">{item.role}</p>
                      <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Traits */}
            <div>
              <motion.p variants={fadeUp} className="font-mono text-[0.65rem] tracking-[0.25em] text-white/40 uppercase mb-4">
                Cómo me describo
              </motion.p>
              <motion.div variants={stagger} className="flex flex-wrap gap-2">
                {TRAITS.map((t) => (
                  <motion.span
                    key={t}
                    variants={fadeUp}
                    className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 text-xs tracking-wide"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

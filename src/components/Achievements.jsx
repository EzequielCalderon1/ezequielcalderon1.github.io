'use client'

import { motion } from 'framer-motion'
import StarburstBadge from './StarburstBadge'
import SlideWaves from './SlideWaves'

const iconProps = {
  width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
}

const CONTRIBUTIONS = [
  {
    title: 'Cargas de portafolio',
    desc: 'He realizado cargas de portafolio del departamento.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 2 2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Resolución de problemas operativos',
    desc: 'Resolución de los problemas operativos del día a día del departamento.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Seguimiento a zona secundaria',
    desc: 'Seguimiento al ejecutivo de zona secundaria.',
    icon: (
      <svg {...iconProps}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Reuniones con socios top',
    desc: 'De manera presencial en nuestro club, haciendo caminatas, y también en sus respectivos negocios.',
    icon: (
      <svg {...iconProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Presentación de resultados',
    desc: 'Como escucha y en participación activa, dando números, KPI, proyecciones y planes de acción para el club 06.',
    icon: (
      <svg {...iconProps}>
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    title: 'Cobertura de la gerencia',
    desc: 'Apoyo al departamento cuando Sebastián no se encontraba presente: toma de decisiones, organización del equipo y la responsabilidad que implica liderar un departamento.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
]

const ROW_COLORS = ['#1d3461', '#2e5ea6', '#e31837']

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export default function Achievements() {
  return (
    <section id="aportado" aria-labelledby="achievements-heading" className="relative bg-white bg-grid-light h-screen overflow-hidden">
      <SlideWaves theme="light" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-24 h-full overflow-y-auto">
        <motion.div
          variants={stagger} initial="hidden" animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <StarburstBadge number="03" className="mb-5" />
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-gray-400 uppercase mb-3">
              03 &mdash; Lo que he aportado
            </p>
            <h2
              id="achievements-heading"
              className="font-display uppercase text-5xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tight text-ps-navy mb-3"
            >
              Mi aporte<br />
              <span className="text-ps-red">hasta hoy</span>
            </h2>
            <p className="text-gray-500 text-sm lg:text-base max-w-3xl leading-relaxed">
              Una de las fortalezas que considero más importantes es haber recorrido cada
              una de las etapas del departamento. Conozco las funciones del asistente, del
              ejecutivo, y también he tenido la oportunidad de involucrarme en
              responsabilidades propias de la gerencia gracias al apoyo y la confianza de
              <strong className="text-ps-navy"> Jesús</strong> y
              <strong className="text-ps-navy"> Sebastián</strong>.
            </p>
          </motion.div>

          {/* Contribution index — ledger-style rows, not another card grid */}
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 border-t border-gray-200 mb-8">
            {CONTRIBUTIONS.map((c, i) => {
              const color = ROW_COLORS[i % ROW_COLORS.length]
              const isRightCol = i % 2 === 1
              return (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className={`group flex items-start gap-4 py-5 border-b border-gray-200 ${
                    isRightCol ? 'sm:pl-10 sm:border-l sm:border-gray-200' : 'sm:pr-10'
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}14`, color }}
                    aria-hidden="true"
                  >
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-mono text-[0.6rem] text-gray-400 tracking-wider">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-gray-900 font-semibold text-sm group-hover:text-ps-navy transition-colors">
                        {c.title}
                      </p>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* cierre: ventaja clave + operaciones del club */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-ps-blue/25 bg-ps-blue/5 p-5 flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-full bg-ps-navy flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <p className="text-ps-navy font-bold text-sm mb-1">Ventaja clave: curva de aprendizaje reducida</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Todavía tengo mucho por aprender, pero considero que llego con una ventaja
                  importante: conozco el funcionamiento del departamento y eso reduce
                  significativamente la curva de aprendizaje.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-gray-200 bg-gray-50/60 p-5 flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-full bg-ps-red flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4 7 4v14" />
                  <path d="M10 21v-6h4v6" />
                </svg>
              </div>
              <div>
                <p className="text-ps-navy font-bold text-sm mb-1">Operaciones del club</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A pesar de no haber estado a cargo de otra área, en los momentos de apoyo
                  me he involucrado en las operaciones del club para entender cómo funciona
                  cada una de ellas en su día a día.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

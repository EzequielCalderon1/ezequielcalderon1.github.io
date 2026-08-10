'use client'

import { motion } from 'framer-motion'
import StarburstBadge from './StarburstBadge'

const iconProps = {
  width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
}

const AREAS = [
  {
    title: 'Portafolio',
    color: '#e31837',
    icon: (
      <svg {...iconProps}>
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </svg>
    ),
    summary: 'Recuperar socios y convertir comportamientos negativos en oportunidades de crecimiento.',
    points: [
      'El club viene logrando buenos resultados; sin embargo, existen negocios con comportamientos negativos.',
      'Analizar cada caso junto al equipo e identificar las causas raíz.',
      'Construir estrategias específicas para recuperar esos socios.',
      'Convertir esos negocios nuevamente en oportunidades de crecimiento.',
    ],
  },
  {
    title: 'Zona Secundaria — Puerto',
    color: '#2e5ea6',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="22" x2="12" y2="8" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      </svg>
    ),
    summary: 'Aprovechar la incorporación de Puerto con un análisis de mercado enfocado en turismo y pesca.',
    points: [
      'Puerto representa una oportunidad importante, impulsada por el turismo y la pesca.',
      'Realizar un análisis completo del mercado e identificar oportunidades reales.',
      'Desarrollar rutas que permitan hacer rentable la operación.',
      'Experiencia en Turrialba y Pérez Zeledón como base de aprendizaje.',
    ],
  },
  {
    title: 'Desarrollo del talento',
    color: '#1d3461',
    icon: (
      <svg {...iconProps}>
        <path d="M7 20h10" />
        <path d="M10 20c0-4.4-3.6-8-8-8h2a6 6 0 0 1 6 6v2Z" />
        <path d="M14 20c0-4.4 3.6-8 8-8h-2a6 6 0 0 0-6 6v2Z" />
        <path d="M12 20v-8" />
      </svg>
    ),
    summary: 'Fortalecer la cultura de crecimiento interno que a mí mismo me permitió avanzar.',
    points: [
      'Creo firmemente en el crecimiento interno — yo mismo lo viví desde Puertas hasta Ejecutivo.',
      'Planes de capacitación y entrenamientos continuos.',
      'Preparación de futuros asistentes y ejecutivos.',
      'Que el departamento cuente siempre con personas listas para asumir nuevos retos.',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export default function Development() {
  return (
    <section id="desarrollo" aria-labelledby="development-heading" className="bg-white bg-grid-light h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-6 h-full overflow-y-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <StarburstBadge number="05" className="mb-6" />
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-gray-400 uppercase mb-3">
              05 &mdash; Lo que quiero desarrollar
            </p>
            <h2
              id="development-heading"
              className="font-display uppercase text-5xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tight text-ps-navy mb-3"
            >
              Tres áreas<br />
              <span className="text-ps-red">de enfoque</span>
            </h2>
            <p className="text-gray-500 text-sm lg:text-base max-w-xl leading-relaxed">
              Si tuviera la oportunidad de liderar este departamento, enfocaría los esfuerzos
              en estas tres áreas prioritarias.
            </p>
          </motion.div>

          {/* Areas */}
          <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {AREAS.map((a) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className="rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all overflow-hidden flex flex-col"
              >
                {/* top color bar */}
                <div
                  className="h-[4px] w-full"
                  style={{ background: a.color }}
                  aria-hidden="true"
                />

                <div className="p-6 flex flex-col flex-1">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${a.color}14`, color: a.color }}
                    aria-hidden="true"
                  >
                    {a.icon}
                  </div>
                  <p className="text-gray-900 font-bold text-lg mb-2">{a.title}</p>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-4 pb-4 border-b border-gray-100"
                    style={{ color: a.color }}
                  >
                    {a.summary}
                  </p>

                  <ul className="space-y-3 flex-1">
                    {a.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-gray-500">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: a.color }}
                          aria-hidden="true"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import StarburstBadge from './StarburstBadge'

const CONTRIBUTIONS = [
  { icon: '📂', title: 'Cargas de portafolio', desc: 'Participación directa en procesos de carga y gestión de portafolio del departamento B2B.' },
  { icon: '🔧', title: 'Resolución operativa', desc: 'Apoyo en la resolución de problemas operativos del día a día del departamento.' },
  { icon: '🗺️', title: 'Zonas secundarias', desc: 'Gestión de Turrialba y Pérez Zeledón. Seguimiento constante y estrategias adaptadas a cada mercado.' },
  { icon: '🤝', title: 'Socios estratégicos', desc: 'Reuniones con socios estratégicos y presentación de resultados en reuniones a nivel país.' },
  { icon: '🧭', title: 'Cobertura de gerencia', desc: 'Apoyo al departamento en ausencia de la gerencia: toma de decisiones, organización del equipo y liderazgo operativo.' },
  { icon: '📊', title: 'Resultados comerciales', desc: 'Administración de cartera, visitas comerciales y desarrollo de nuevos negocios como Ejecutivo B2B.' },
]

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
    <section id="aportado" aria-labelledby="achievements-heading" className="bg-white h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-6 h-full overflow-y-auto">
        <motion.div
          variants={stagger} initial="hidden" animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-12">
            <StarburstBadge number="03" className="mb-6" />
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
            <p className="text-gray-500 text-sm lg:text-base max-w-xl leading-relaxed">
              He recorrido cada etapa del departamento: asistente, ejecutivo y
              responsabilidades propias de la gerencia.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {CONTRIBUTIONS.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md hover:border-ps-blue/30 transition-all p-5 group"
              >
                <span className="text-2xl mb-3 block" aria-hidden="true">{c.icon}</span>
                <p className="text-gray-900 font-semibold text-sm mb-1.5 group-hover:text-ps-navy transition-colors">{c.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* key advantage */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-ps-blue/25 bg-ps-blue/5 p-6 flex gap-5 items-start"
          >
            <div className="w-10 h-10 rounded-full bg-ps-navy flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <p className="text-ps-navy font-bold text-sm mb-1">Ventaja clave: curva de aprendizaje reducida</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Conozco el funcionamiento interno del departamento desde todas sus aristas.
                Eso me permite asumir esta posición con menos tiempo de adaptación y
                más tiempo enfocado en generar resultados desde el primer día.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

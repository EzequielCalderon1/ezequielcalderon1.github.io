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

const PILLARS = [
  {
    number: '01', title: 'Organización', color: '#2e5ea6',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    desc: 'Cada integrante debe tener absoluta claridad sobre sus responsabilidades. Cuando cada persona conoce su función y cómo impacta en el resultado del equipo, el departamento trabaja de manera mucho más eficiente.',
  },
  {
    number: '02', title: 'Comunicación', color: '#1d3461',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    desc: 'Comunicación cercana, clara y respetuosa. Las personas deben sentirse en confianza para expresar dudas, proponer mejoras o hablar sobre cualquier situación. El acompañamiento antes que el proceso.',
  },
  {
    number: '03', title: 'Seguimiento', color: '#e31837',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    desc: 'Lo que no se mide, difícilmente mejora. Seguimiento constante a ventas, visitas, oportunidades y cumplimiento de objetivos para tomar decisiones durante el mes, no solo al cierre.',
  },
  {
    number: '04', title: 'Compromiso con el club', color: '#2e5ea6',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    desc: 'Una gerencia no se limita al departamento B2B. También implica apoyar la operación general del club, colaborar con otros departamentos y contribuir al cumplimiento de los objetivos de PriceSmart.',
  },
]

const AREAS = [
  {
    number: '01', icon: '📈', title: 'Portafolio', color: '#e31837',
    points: [
      'Análisis de negocios con comportamientos negativos',
      'Identificación de causas junto al equipo',
      'Estrategias específicas por cliente',
      'Recuperación y conversión en oportunidades de crecimiento',
    ],
  },
  {
    number: '02', icon: '🗺️', title: 'Zona Secundaria — Puerto', color: '#2e5ea6',
    points: [
      'Análisis del mercado (turismo y pesca)',
      'Identificación de oportunidades reales',
      'Desarrollo de rutas rentables',
      'Experiencia en Turrialba y Pérez Zeledón como base',
    ],
  },
  {
    number: '03', icon: '🌱', title: 'Desarrollo del talento', color: '#1d3461',
    points: [
      'Planes de capacitación y entrenamiento',
      'Preparación de futuros asistentes y ejecutivos',
      'Fomentar la cultura de crecimiento interno',
      'Equipo siempre listo para nuevos retos',
    ],
  },
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
    <section id="trayectoria" aria-labelledby="achievements-heading" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">

        {/* ── PARTE A: Lo que he aportado ── */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
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

        {/* ── PARTE B: Mi visión — 4 pilares ── */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-gray-400 uppercase mb-3">
              Mi visión como gerente
            </p>
            <h2 className="font-display uppercase text-5xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tight text-ps-navy mb-3">
              Cuatro<br />
              <span className="text-ps-red">pilares</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-lg leading-relaxed">
              Mi enfoque como gerente se sostiene en cuatro pilares que garantizan
              un equipo eficiente, comprometido y orientado a resultados.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PILLARS.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="relative rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:border-gray-300 transition-all p-6 overflow-hidden group"
              >
                <span
                  className="absolute -top-4 -right-2 font-display text-[6rem] leading-none font-black opacity-[0.04] select-none"
                  style={{ color: p.color }}
                  aria-hidden="true"
                >
                  {p.number}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${p.color}18`, color: p.color }}
                  aria-hidden="true"
                >
                  {p.icon}
                </div>
                <p className="text-gray-900 font-bold text-base mb-2 group-hover:text-ps-navy transition-colors">{p.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── PARTE C: Lo que quiero desarrollar ── */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-gray-400 uppercase mb-3">
              Lo que quiero desarrollar
            </p>
            <h2 className="font-display uppercase text-5xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tight text-ps-navy mb-3">
              Tres áreas<br />
              <span className="text-ps-red">de enfoque</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-lg leading-relaxed">
              Si tuviera la oportunidad de liderar este departamento, concentraría
              los esfuerzos en estas tres áreas prioritarias.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {AREAS.map((a) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className="relative rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-all p-6 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                  style={{ background: a.color }}
                  aria-hidden="true"
                />
                <span
                  className="absolute -top-6 -right-2 font-display text-[7rem] leading-none font-black opacity-[0.04] select-none"
                  style={{ color: a.color }}
                  aria-hidden="true"
                >
                  {a.number}
                </span>
                <span className="text-3xl mb-4 block" aria-hidden="true">{a.icon}</span>
                <p className="text-gray-900 font-bold text-base mb-4">{a.title}</p>
                <ul className="space-y-2">
                  {a.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-500">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: a.color }} aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

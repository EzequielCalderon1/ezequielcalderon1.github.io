'use client'

import { motion } from 'framer-motion'
import StarburstBadge from './StarburstBadge'

const PILLARS = [
  {
    number: '01',
    title: 'Organización',
    color: '#2e5ea6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    desc: 'Cada integrante del departamento debe tener absoluta claridad sobre sus responsabilidades. Cuando cada persona conoce su función y entiende cómo impacta en el resultado del equipo, el departamento trabaja de manera mucho más eficiente.',
  },
  {
    number: '02',
    title: 'Comunicación',
    color: '#e31837',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    desc: 'Creo firmemente en una comunicación cercana, clara y respetuosa. Las personas deben sentirse en confianza para expresar dudas, proponer mejoras o hablar sobre cualquier situación. El acompañamiento antes que el proceso.',
  },
  {
    number: '03',
    title: 'Seguimiento',
    color: '#2e5ea6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    desc: 'Lo que no se mide, difícilmente mejora. Seguimiento constante a las ventas, visitas, oportunidades comerciales, desarrollo de cartera y cumplimiento de objetivos para tomar decisiones durante el mes, no solo al cierre.',
  },
  {
    number: '04',
    title: 'Compromiso con el club',
    color: '#e31837',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    desc: 'Una gerencia no se limita únicamente al departamento de B2B. También implica apoyar la operación general del club, colaborar con otros departamentos y aportar al cumplimiento de los objetivos generales de PriceSmart.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

export default function Vision() {
  return (
    <section id="vision" aria-labelledby="vision-heading" className="bg-[#1d3461] text-white h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-6 h-full overflow-y-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-12">
            <StarburstBadge number="04" className="mb-6 w-16 h-16" />
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-white/40 uppercase mb-5">
              04 &mdash; Mi visión como gerente
            </p>
            <h2
              id="vision-heading"
              className="font-display uppercase text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-white mb-4"
            >
              Cuatro<br />
              <span className="text-ps-red">pilares</span>
            </h2>
            <p className="text-white/55 text-sm lg:text-base max-w-xl leading-relaxed">
              Mi enfoque como gerente se sostiene en cuatro pilares que garantizan
              un equipo eficiente, comprometido y orientado a resultados.
            </p>
          </motion.div>

          {/* Pillars grid */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10"
          >
            {PILLARS.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all p-6 overflow-hidden group"
              >
                {/* number watermark */}
                <span
                  className="absolute -top-4 -right-2 font-display text-[6rem] leading-none font-black opacity-[0.05] select-none text-white"
                  aria-hidden="true"
                >
                  {p.number}
                </span>

                {/* top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-60"
                  style={{ background: p.color }}
                  aria-hidden="true"
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${p.color}25`, color: p.color }}
                  aria-hidden="true"
                >
                  {p.icon}
                </div>
                <p className="text-white font-bold text-base mb-2">{p.title}</p>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Footnote */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex gap-4 items-start"
          >
            <div className="w-1 h-full min-h-[2.5rem] rounded-full bg-ps-red flex-shrink-0" aria-hidden="true" />
            <p className="text-white/60 text-sm leading-relaxed">
              Será mi primera experiencia como gerente y soy consciente de que todavía tengo
              aspectos por desarrollar. Sin embargo, una de mis principales fortalezas es la
              disposición para aprender, adaptarme rápidamente y asumir nuevos retos con
              responsabilidad.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

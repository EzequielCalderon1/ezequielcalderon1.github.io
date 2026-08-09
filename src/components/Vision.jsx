'use client'

import { motion } from 'framer-motion'

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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-4 h-full flex flex-col justify-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Header — compact */}
          <motion.div variants={fadeUp} className="mb-5">
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-white/40 uppercase mb-2">
              04 &mdash; Mi visión como gerente
            </p>
            <h2
              id="vision-heading"
              className="font-display uppercase text-4xl lg:text-5xl xl:text-6xl leading-[0.9] tracking-tight text-white mb-2"
            >
              Cuatro <span className="text-ps-red">pilares</span>
            </h2>
            <p className="text-white/50 text-xs lg:text-sm max-w-2xl leading-relaxed">
              Mi enfoque como gerente se sostiene en cuatro pilares.
              Seré consciente de que todavía tengo aspectos por desarrollar,
              pero mi principal fortaleza es la disposición para aprender y asumir
              nuevos retos con responsabilidad.
            </p>
          </motion.div>

          {/* Pillars grid — 2×2 */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {PILLARS.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="relative rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all p-4 overflow-hidden group"
              >
                {/* number watermark */}
                <span
                  className="absolute -top-3 -right-1 font-display text-[5rem] leading-none font-black opacity-[0.05] select-none text-white"
                  aria-hidden="true"
                >
                  {p.number}
                </span>

                {/* top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl opacity-70"
                  style={{ background: p.color }}
                  aria-hidden="true"
                />

                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${p.color}25`, color: p.color }}
                    aria-hidden="true"
                  >
                    {p.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{p.title}</p>
                    <p className="text-white/55 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

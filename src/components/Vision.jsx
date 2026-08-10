'use client'

import { motion, useReducedMotion } from 'framer-motion'
import StarburstBadge from './StarburstBadge'

const PILLARS = [
  {
    number: '01',
    title: 'Organización',
    color: '#5aa9e6',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    desc: 'Cada integrante del departamento debe tener absoluta claridad sobre sus responsabilidades. Cuando cada persona conoce su función y entiende cómo impacta en el resultado del equipo, el departamento trabaja de manera mucho más eficiente.',
  },
  {
    number: '02',
    title: 'Comunicación',
    color: '#2e5ea6',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    desc: 'Cercana, clara y respetuosa. Las personas deben sentirse en confianza para expresar dudas, proponer mejoras o hablar sobre cualquier situación. Ante una oportunidad de mejora: conversar directamente con el colaborador, acompañarlo en su desarrollo y, cuando sea necesario, seguir los procesos disciplinarios correspondientes.',
  },
  {
    number: '03',
    title: 'Seguimiento activo',
    color: '#e31837',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    desc: 'Lo que no se mide, difícilmente mejora. Seguimiento constante a ventas, visitas, oportunidades con nuestros socios, desarrollo de portafolio y cumplimiento de objetivos, para tomar decisiones oportunas durante el mes y no únicamente al cierre.',
  },
  {
    number: '04',
    title: 'Compromiso con todo el club',
    color: '#eaf1fb',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    desc: 'Una gerencia B2B no se limita únicamente al departamento. También implica apoyar la operación general del club cuando sea necesario, colaborar con otros departamentos y aportar al cumplimiento de los objetivos generales de PriceSmart.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/* Los cuatro pilares tienen el mismo peso: misma altura, mismo ritmo.
   Solo se desfasa la entrada para que se construyan uno tras otro. */
const EASE = [0.16, 1, 0.3, 1]
const delayOf = (i) => 0.3 + i * 0.11

export default function Vision() {
  const reduce = useReducedMotion()

  return (
    <section id="vision" aria-labelledby="vision-heading" className="bg-[#1d3461] bg-grid-dark text-white h-screen overflow-hidden">
      {/* pb-24 reserva la franja inferior que ocupa la navegación flotante */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-24 h-full flex flex-col">
        {/* Header — compact */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-6 flex-shrink-0">
          <StarburstBadge number="04" className="mb-3" />
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
            Si tuviera la oportunidad de asumir el departamento el día de hoy,
            mi enfoque estaría basado en cuatro pilares.
          </p>
        </motion.div>

        {/* Columnata */}
        <div className="relative flex-1 min-h-0">
          {/* suelo */}
          <motion.div
            aria-hidden="true"
            className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          />

          <ul className="h-full grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-x-4 gap-y-6 lg:gap-8 list-none">
            {PILLARS.map((p, i) => {
              const d = delayOf(i)
              return (
                <li key={p.title} className="group h-full flex flex-col items-center text-center">
                  {/* Ícono flotante */}
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.4, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 20, delay: d + 0.65 }}
                    aria-hidden="true"
                  >
                    <motion.span
                      className="flex items-center justify-center w-9 h-9 rounded-xl border transition-colors duration-300"
                      style={{ borderColor: `${p.color}55`, backgroundColor: `${p.color}14`, color: p.color }}
                      animate={reduce ? undefined : { y: [0, -4, 0] }}
                      transition={reduce ? undefined : { duration: 3.4 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: d + 1 }}
                    >
                      {p.icon}
                    </motion.span>
                  </motion.div>

                  {/* conector punteado superior */}
                  <motion.div
                    aria-hidden="true"
                    className="w-px h-3 flex-shrink-0"
                    style={{
                      transformOrigin: 'top',
                      backgroundImage: `repeating-linear-gradient(to bottom, ${p.color}88 0 3px, transparent 3px 6px)`,
                    }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.28, ease: 'easeOut', delay: d + 0.72 }}
                  />

                  {/* Ficha */}
                  <motion.div
                    className="w-full min-h-[142px] flex flex-col justify-center rounded-lg border border-dashed px-3 py-3 bg-white/[0.03] flex-shrink-0 transition-colors duration-300 group-hover:bg-white/[0.08]"
                    style={{ borderColor: `${p.color}66` }}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: d + 0.78 }}
                  >
                    <p className="text-white font-bold text-[0.82rem] leading-tight mb-1">{p.title}</p>
                    <p className="text-white/55 text-[0.7rem] leading-snug">{p.desc}</p>
                  </motion.div>

                  {/* conector punteado inferior */}
                  <motion.div
                    aria-hidden="true"
                    className="w-px h-3 flex-shrink-0"
                    style={{
                      transformOrigin: 'top',
                      backgroundImage: `repeating-linear-gradient(to bottom, ${p.color}88 0 3px, transparent 3px 6px)`,
                    }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.28, ease: 'easeOut', delay: d + 0.88 }}
                  />

                  {/* Columna — misma altura para los cuatro */}
                  <div
                    className="relative w-full flex-1 min-h-[112px] transition-transform duration-300 ease-out group-hover:-translate-y-1.5"
                    aria-hidden="true"
                  >
                    {/* fuste estriado — crece desde el suelo */}
                    <div className="absolute inset-x-0 bottom-0 top-[26px] flex justify-center">
                      <motion.div
                        className="relative w-[74%] h-full overflow-hidden transition-[filter] duration-300 group-hover:brightness-125"
                        style={{
                          transformOrigin: 'bottom',
                          backgroundColor: `${p.color}26`,
                          backgroundImage: `repeating-linear-gradient(90deg, ${p.color}cc 0 3px, transparent 3px 11px)`,
                          boxShadow: `inset 0 0 0 1px ${p.color}33`,
                        }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.9, ease: EASE, delay: d }}
                      >
                        {/* destello que recorre el fuste */}
                        {!reduce && (
                          <motion.div
                            className="absolute inset-x-0 h-1/3"
                            style={{ background: `linear-gradient(to top, transparent, ${p.color}55, transparent)` }}
                            initial={{ y: '160%' }}
                            animate={{ y: '-160%' }}
                            transition={{
                              duration: 1.4,
                              ease: 'easeInOut',
                              delay: d + 1,
                              repeat: Infinity,
                              repeatDelay: 4.5,
                            }}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* capitel — se apoya encima cuando el fuste termina */}
                    <motion.div
                      className="absolute inset-x-0 top-0 flex flex-col items-center"
                      initial={{ opacity: 0, scaleX: 0.55, y: -12 }}
                      animate={{ opacity: 1, scaleX: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 17, delay: d + 0.5 }}
                    >
                      <div className="w-full h-2.5 rounded-t-[3px]" style={{ backgroundColor: p.color }} />
                      <div
                        className="w-full h-4"
                        style={{ backgroundColor: p.color, clipPath: 'polygon(0% 0%, 100% 0%, 74% 100%, 26% 100%)' }}
                      />
                    </motion.div>

                    {/* basa */}
                    <motion.div
                      className="absolute bottom-0 inset-x-0 h-[3px] rounded-full"
                      style={{ backgroundColor: p.color }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: EASE, delay: d + 0.35 }}
                    />

                    {/* onda de impacto al asentarse */}
                    {!reduce && (
                      <motion.div
                        className="absolute bottom-0 inset-x-0 h-[3px] rounded-full"
                        style={{ backgroundColor: p.color }}
                        initial={{ opacity: 0, scaleX: 1 }}
                        animate={{ opacity: [0, 0.55, 0], scaleX: [1, 1.45, 1.7] }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: d + 0.85 }}
                      />
                    )}

                    {/* número sobre el cuello */}
                    <div className="absolute inset-x-0 top-2 z-10 flex justify-center">
                      <motion.span
                        className="flex items-center justify-center w-9 h-9 rounded-full border-2 bg-[#1d3461] font-mono text-[0.65rem] font-bold tracking-wider"
                        style={{ borderColor: p.color, color: p.color }}
                        initial={{ opacity: 0, scale: 0.3, rotate: -35 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 340, damping: 16, delay: d + 0.6 }}
                      >
                        {p.number}
                      </motion.span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Cierre — honestidad sobre el reto */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.5 }}
          className="flex-shrink-0 mt-5 border-l-2 border-ps-red/60 pl-4"
        >
          <p className="text-white/60 text-xs lg:text-sm leading-relaxed max-w-4xl">
            Será mi primera experiencia como gerente y soy consciente de que todavía tengo
            aspectos por desarrollar. Sin embargo, una de mis principales fortalezas es la
            <strong className="text-white"> disposición para aprender</strong>,
            <strong className="text-white"> adaptarme rápidamente</strong> y asumir nuevos
            retos con responsabilidad.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

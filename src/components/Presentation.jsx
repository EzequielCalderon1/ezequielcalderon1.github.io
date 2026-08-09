'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── slide data ─────────────────────────────────────────────── */
const SLIDES = [
  {
    id: 1,
    label: 'Presentación',
    component: Slide1,
  },
  {
    id: 2,
    label: 'Sobre mí',
    component: Slide2,
  },
  {
    id: 3,
    label: 'Lo que he aportado',
    component: Slide3,
  },
  {
    id: 4,
    label: 'Mi visión',
    component: Slide4,
  },
  {
    id: 5,
    label: 'Lo que quiero desarrollar',
    component: Slide5,
  },
  {
    id: 6,
    label: 'Cierre',
    component: Slide6,
  },
]

/* ─── animation variants ─────────────────────────────────────── */
const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
}

/* ─── main component ─────────────────────────────────────────── */
export default function Presentation({ open, onClose }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback(
    (delta) => {
      setDirection(delta)
      setCurrent((prev) => Math.max(0, Math.min(SLIDES.length - 1, prev + delta)))
    },
    []
  )

  // keyboard navigation
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1)
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(-1)
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, go, onClose])

  // reset to first slide when opened
  useEffect(() => {
    if (open) setCurrent(0)
  }, [open])

  // lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const SlideComponent = SLIDES[current].component

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Presentación de candidatura"
      className="fixed inset-0 z-[999] bg-[#0a0f1e] flex flex-col overflow-hidden"
    >
      {/* ── top bar ── */}
      <div className="relative z-10 flex items-center justify-between px-6 lg:px-10 py-4 border-b border-white/10">
        {/* logo */}
        <span className="font-mono text-sm font-black tracking-wider text-white">
          EC<span className="text-[#e31837]">.</span>
        </span>

        {/* slide tabs */}
        <div className="hidden md:flex items-center gap-1">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className={`px-3 py-1.5 rounded-full text-[0.65rem] font-mono tracking-[0.1em] uppercase transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e31837] ${
                i === current
                  ? 'bg-[#e31837] text-white'
                  : 'text-white/40 hover:text-white hover:bg-white/10'
              }`}
            >
              {s.id}. {s.label}
            </button>
          ))}
        </div>

        {/* close */}
        <button
          onClick={onClose}
          aria-label="Cerrar presentación"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white/60 text-xs font-mono tracking-wider hover:bg-white/10 hover:text-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
          Cerrar
        </button>
      </div>

      {/* ── progress bar ── */}
      <div className="h-[2px] bg-white/10" aria-hidden="true">
        <motion.div
          className="h-full bg-gradient-to-r from-[#e31837] to-[#2e5ea6]"
          animate={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* ── slide area ── */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 overflow-y-auto"
          >
            <SlideComponent fadeUp={fadeUp} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── bottom nav ── */}
      <div className="relative z-10 flex items-center justify-between px-6 lg:px-10 py-5 border-t border-white/10">
        <button
          onClick={() => go(-1)}
          disabled={current === 0}
          aria-label="Diapositiva anterior"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Anterior
        </button>

        {/* dots */}
        <div className="flex items-center gap-2" aria-label={`Diapositiva ${current + 1} de ${SLIDES.length}`}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              aria-label={`Ir a diapositiva ${i + 1}`}
              className={`rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e31837] ${
                i === current ? 'w-6 h-2 bg-[#e31837]' : 'w-2 h-2 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          disabled={current === SLIDES.length - 1}
          aria-label="Siguiente diapositiva"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e31837] text-white text-sm font-medium disabled:opacity-30 hover:bg-[#c8152f] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e31837] disabled:cursor-not-allowed"
        >
          Siguiente
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   FILMINA 1 — Presentación
═══════════════════════════════════════════════════════════════ */
function Slide1({ fadeUp }) {
  return (
    <div className="min-h-full flex flex-col items-center justify-center px-6 lg:px-16 py-12 relative">
      {/* ambient orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1d3461]/50 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#e31837]/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {/* eyebrow */}
        <motion.p
          variants={fadeUp} custom={0}
          initial="hidden" animate="visible"
          className="font-mono text-[0.65rem] tracking-[0.3em] text-white/40 uppercase mb-8"
        >
          PriceSmart Costa Rica &mdash; Candidatura Interna &mdash; 2026
        </motion.p>

        {/* main title */}
        <motion.h1
          variants={fadeUp} custom={1}
          initial="hidden" animate="visible"
          className="font-display uppercase leading-[0.88] tracking-tight text-white mb-6"
          style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}
        >
          Gerencia<br />
          <span
            className="bg-gradient-to-r from-white via-blue-200 to-[#e31837] bg-clip-text text-transparent"
          >
            B2B
          </span>
        </motion.h1>

        {/* subtitle */}
        <motion.p
          variants={fadeUp} custom={2}
          initial="hidden" animate="visible"
          className="text-white/60 text-lg lg:text-xl max-w-xl mx-auto leading-relaxed mb-10"
        >
          Tres años de crecimiento progresivo, enfocado y con un
          objetivo siempre claro: seguir aportando más valor.
        </motion.p>

        {/* quote card */}
        <motion.div
          variants={fadeUp} custom={3}
          initial="hidden" animate="visible"
          className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-5 max-w-lg mx-auto"
        >
          <p className="text-white/80 text-sm lg:text-base italic leading-relaxed">
            "El crecimiento comienza cuando uno sale de su zona de
            comodidad y se pone a prueba en nuevos ámbitos."
          </p>
        </motion.div>

        {/* stats row */}
        <motion.div
          variants={fadeUp} custom={4}
          initial="hidden" animate="visible"
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {[
            { value: '3+', label: 'Años en PriceSmart' },
            { value: '3', label: 'Roles desempeñados' },
            { value: '2', label: 'Zonas secundarias' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-4xl lg:text-5xl text-[#e31837] leading-none">{value}</p>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-white/40 uppercase mt-2">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   FILMINA 2 — Sobre mí
═══════════════════════════════════════════════════════════════ */
const TIMELINE = [
  {
    year: '2023',
    role: 'Front End — Puertas',
    desc: 'Primera etapa. Operación del club, servicio al socio, disciplina en procesos. Primera comisión por renovaciones como cajero.',
    color: '#2e5ea6',
  },
  {
    year: 'Ene 2024',
    role: 'Asistente B2B',
    desc: 'Procesos administrativos, atención a ejecutivos, coordinación de entregas, seguimiento a socios. Obtención de licencia de conducir.',
    color: '#1d3461',
  },
  {
    year: 'Fin 2024',
    role: 'Ejecutivo B2B',
    desc: 'Administración de cartera, visitas comerciales, nuevos negocios, zonas secundarias: Turrialba y Pérez Zeledón.',
    color: '#e31837',
  },
]

const TRAITS = [
  'Disciplinado', 'Enfocado', 'Comprometido', 'Íntegro',
  'Trabajo en equipo', 'Orientado a resultados', 'Aprendizaje continuo',
]

function Slide2({ fadeUp }) {
  return (
    <div className="min-h-full px-6 lg:px-16 py-12 max-w-6xl mx-auto w-full">
      {/* header */}
      <motion.p
        variants={fadeUp} custom={0}
        initial="hidden" animate="visible"
        className="font-mono text-[0.65rem] tracking-[0.3em] text-white/40 uppercase mb-3"
      >
        02 &mdash; Sobre mí
      </motion.p>
      <motion.h2
        variants={fadeUp} custom={1}
        initial="hidden" animate="visible"
        className="font-display uppercase text-5xl lg:text-7xl leading-[0.9] tracking-tight text-white mb-10"
      >
        Ezequiel<br />
        <span className="text-[#e31837]">Calderón</span> Dinarte
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* timeline */}
        <div className="lg:col-span-7 space-y-0">
          <motion.p
            variants={fadeUp} custom={2}
            initial="hidden" animate="visible"
            className="font-mono text-[0.6rem] tracking-[0.2em] text-white/30 uppercase mb-5"
          >
            Trayectoria
          </motion.p>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/10" aria-hidden="true" />

            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.role}
                variants={fadeUp} custom={3 + i}
                initial="hidden" animate="visible"
                className="relative flex gap-6 pb-8 last:pb-0"
              >
                {/* year */}
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="font-mono text-[0.65rem] text-white/40 tracking-wider">{item.year}</span>
                </div>
                {/* dot */}
                <div className="relative z-10 flex-shrink-0 mt-0.5">
                  <div
                    className="w-3 h-3 rounded-full border-2 border-current"
                    style={{ color: item.color, backgroundColor: item.color }}
                    aria-hidden="true"
                  />
                </div>
                {/* content */}
                <div className="flex-1 pb-2">
                  <p className="font-bold text-white text-sm mb-1.5">{item.role}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* right column */}
        <div className="lg:col-span-5 space-y-6">
          {/* traits */}
          <motion.div
            variants={fadeUp} custom={6}
            initial="hidden" animate="visible"
          >
            <p className="font-mono text-[0.6rem] tracking-[0.2em] text-white/30 uppercase mb-3">
              Cómo me describo
            </p>
            <div className="flex flex-wrap gap-2">
              {TRAITS.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 text-xs tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* values card */}
          <motion.div
            variants={fadeUp} custom={7}
            initial="hidden" animate="visible"
            className="rounded-2xl border border-[#e31837]/30 bg-[#e31837]/5 p-5"
          >
            <p className="font-mono text-[0.6rem] tracking-[0.2em] text-[#e31837]/70 uppercase mb-3">
              Valores que me guían
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Me identifico plenamente con los valores de PriceSmart,
              especialmente con la <strong className="text-white">integridad</strong>.
              La confianza, el respeto y el trabajo en equipo son la base
              para construir equipos sólidos y relaciones duraderas.
            </p>
          </motion.div>

          {/* studying */}
          <motion.div
            variants={fadeUp} custom={8}
            initial="hidden" animate="visible"
            className="rounded-2xl border border-[#2e5ea6]/30 bg-[#2e5ea6]/5 p-5"
          >
            <p className="font-mono text-[0.6rem] tracking-[0.2em] text-[#2e5ea6]/70 uppercase mb-2">
              Formación actual
            </p>
            <p className="text-white font-semibold text-sm">Estudiante de Derecho</p>
            <p className="text-white/50 text-xs mt-1 leading-relaxed">
              El aprendizaje continuo es una responsabilidad personal y profesional.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   FILMINA 3 — Lo que he aportado hasta hoy
═══════════════════════════════════════════════════════════════ */
const CONTRIBUTIONS = [
  {
    icon: '📂',
    title: 'Cargas de portafolio',
    desc: 'Participación directa en procesos de carga y gestión de portafolio del departamento.',
  },
  {
    icon: '🔧',
    title: 'Resolución operativa',
    desc: 'Apoyo en la resolución de problemas operativos del día a día del departamento B2B.',
  },
  {
    icon: '🗺️',
    title: 'Zona secundaria',
    desc: 'Seguimiento al ejecutivo de zona secundaria y gestión de Turrialba y Pérez Zeledón.',
  },
  {
    icon: '🤝',
    title: 'Socios estratégicos',
    desc: 'Participación en reuniones con socios estratégicos y presentación de resultados a nivel país.',
  },
  {
    icon: '🧭',
    title: 'Cobertura de gerencia',
    desc: 'Apoyo al departamento en ausencia de la gerencia: toma de decisiones, organización del equipo y liderazgo operativo.',
  },
  {
    icon: '📊',
    title: 'Resultados comerciales',
    desc: 'Administración de cartera, visitas comerciales y desarrollo de nuevos negocios como Ejecutivo B2B.',
  },
]

function Slide3({ fadeUp }) {
  return (
    <div className="min-h-full px-6 lg:px-16 py-12 max-w-6xl mx-auto w-full">
      {/* header */}
      <motion.p
        variants={fadeUp} custom={0}
        initial="hidden" animate="visible"
        className="font-mono text-[0.65rem] tracking-[0.3em] text-white/40 uppercase mb-3"
      >
        03 &mdash; Lo que he aportado
      </motion.p>
      <motion.h2
        variants={fadeUp} custom={1}
        initial="hidden" animate="visible"
        className="font-display uppercase text-5xl lg:text-7xl leading-[0.9] tracking-tight text-white mb-4"
      >
        Mi aporte<br />
        <span className="text-[#e31837]">hasta hoy</span>
      </motion.h2>
      <motion.p
        variants={fadeUp} custom={2}
        initial="hidden" animate="visible"
        className="text-white/50 text-sm lg:text-base max-w-xl mb-10 leading-relaxed"
      >
        He recorrido cada etapa del departamento: asistente, ejecutivo y
        responsabilidades propias de la gerencia.
      </motion.p>

      {/* contributions grid */}
      <motion.div
        initial="hidden" animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
      >
        {CONTRIBUTIONS.map((c) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-all p-5"
          >
            <span className="text-2xl mb-3 block" aria-hidden="true">{c.icon}</span>
            <p className="text-white font-semibold text-sm mb-1.5">{c.title}</p>
            <p className="text-white/50 text-xs leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* key advantage callout */}
      <motion.div
        variants={fadeUp} custom={9}
        initial="hidden" animate="visible"
        className="rounded-2xl border border-[#2e5ea6]/40 bg-gradient-to-r from-[#1d3461]/40 to-[#2e5ea6]/20 p-6 flex gap-5 items-start"
      >
        <div className="w-10 h-10 rounded-full bg-[#2e5ea6] flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div>
          <p className="text-white font-bold text-sm mb-1">Ventaja clave: curva de aprendizaje reducida</p>
          <p className="text-white/60 text-sm leading-relaxed">
            Conozco el funcionamiento interno del departamento desde todas sus aristas.
            Eso me permite asumir esta posición con menos tiempo de adaptación y
            más tiempo enfocado en generar resultados desde el primer día.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   FILMINA 4 — Mi visión como gerente
═══════════════════════════════════════════════════════════════ */
const PILLARS = [
  {
    number: '01',
    title: 'Organización',
    color: '#2e5ea6',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    desc: 'Cada integrante debe tener absoluta claridad sobre sus responsabilidades. Cuando cada persona conoce su función y cómo impacta en el resultado del equipo, el departamento trabaja de manera mucho más eficiente.',
  },
  {
    number: '02',
    title: 'Comunicación',
    color: '#1d3461',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    desc: 'Comunicación cercana, clara y respetuosa. Las personas deben sentirse en confianza para expresar dudas, proponer mejoras y hablar sobre cualquier situación. El acompañamiento antes que el proceso.',
  },
  {
    number: '03',
    title: 'Seguimiento',
    color: '#e31837',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    desc: 'Lo que no se mide, difícilmente mejora. Seguimiento constante a ventas, visitas, oportunidades y cumplimiento de objetivos para tomar decisiones oportunas durante el mes, no solo al cierre.',
  },
  {
    number: '04',
    title: 'Compromiso con el club',
    color: '#2e5ea6',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    desc: 'Una gerencia no se limita al departamento B2B. También implica apoyar la operación general del club, colaborar con otros departamentos y aportar al cumplimiento de los objetivos generales de PriceSmart.',
  },
]

function Slide4({ fadeUp }) {
  return (
    <div className="min-h-full px-6 lg:px-16 py-12 max-w-6xl mx-auto w-full">
      {/* header */}
      <motion.p
        variants={fadeUp} custom={0}
        initial="hidden" animate="visible"
        className="font-mono text-[0.65rem] tracking-[0.3em] text-white/40 uppercase mb-3"
      >
        04 &mdash; Mi visión como gerente
      </motion.p>
      <motion.h2
        variants={fadeUp} custom={1}
        initial="hidden" animate="visible"
        className="font-display uppercase text-5xl lg:text-7xl leading-[0.9] tracking-tight text-white mb-3"
      >
        Cuatro<br />
        <span className="text-[#e31837]">pilares</span>
      </motion.h2>
      <motion.p
        variants={fadeUp} custom={2}
        initial="hidden" animate="visible"
        className="text-white/50 text-sm max-w-lg mb-10 leading-relaxed"
      >
        Mi enfoque como gerente se sostiene en cuatro pilares
        que garantizan un equipo eficiente, comprometido y orientado a resultados.
      </motion.p>

      {/* pillars grid */}
      <motion.div
        initial="hidden" animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        {PILLARS.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 overflow-hidden group hover:border-white/20 transition-all"
          >
            {/* number watermark */}
            <span
              className="absolute -top-4 -right-2 font-display text-[6rem] leading-none font-black opacity-[0.04] select-none"
              style={{ color: p.color }}
              aria-hidden="true"
            >
              {p.number}
            </span>

            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
              style={{ backgroundColor: `${p.color}22`, color: p.color }}
              aria-hidden="true"
            >
              {p.icon}
            </div>
            <p className="text-white font-bold text-base mb-2">{p.title}</p>
            <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   FILMINA 5 — Lo que quiero desarrollar
═══════════════════════════════════════════════════════════════ */
const AREAS = [
  {
    number: '01',
    icon: '📈',
    title: 'Portafolio',
    color: '#e31837',
    points: [
      'Análisis de negocios con comportamientos negativos',
      'Identificación de causas junto al equipo',
      'Estrategias específicas por cliente',
      'Recuperación y conversión en oportunidades de crecimiento',
    ],
  },
  {
    number: '02',
    icon: '🗺️',
    title: 'Zona Secundaria — Puerto',
    color: '#2e5ea6',
    points: [
      'Análisis completo del mercado (turismo y pesca)',
      'Identificación de oportunidades reales',
      'Desarrollo de rutas rentables',
      'Experiencia en Turrialba y Pérez Zeledón como base',
    ],
  },
  {
    number: '03',
    icon: '🌱',
    title: 'Desarrollo del talento',
    color: '#1d3461',
    points: [
      'Planes de capacitación y entrenamiento',
      'Preparación de futuros asistentes y ejecutivos',
      'Fomentar la cultura de crecimiento interno',
      'Equipo siempre listo para nuevos retos',
    ],
  },
]

function Slide5({ fadeUp }) {
  return (
    <div className="min-h-full px-6 lg:px-16 py-12 max-w-6xl mx-auto w-full">
      {/* header */}
      <motion.p
        variants={fadeUp} custom={0}
        initial="hidden" animate="visible"
        className="font-mono text-[0.65rem] tracking-[0.3em] text-white/40 uppercase mb-3"
      >
        05 &mdash; Lo que quiero desarrollar
      </motion.p>
      <motion.h2
        variants={fadeUp} custom={1}
        initial="hidden" animate="visible"
        className="font-display uppercase text-5xl lg:text-7xl leading-[0.9] tracking-tight text-white mb-3"
      >
        Tres áreas<br />
        <span className="text-[#e31837]">de enfoque</span>
      </motion.h2>
      <motion.p
        variants={fadeUp} custom={2}
        initial="hidden" animate="visible"
        className="text-white/50 text-sm max-w-lg mb-10 leading-relaxed"
      >
        Si tuviera la oportunidad de liderar este departamento, concentraría
        los esfuerzos en estas tres áreas prioritarias.
      </motion.p>

      {/* areas */}
      <motion.div
        initial="hidden" animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-5"
      >
        {AREAS.map((a) => (
          <motion.div
            key={a.title}
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 relative overflow-hidden hover:border-white/20 transition-all"
          >
            {/* number watermark */}
            <span
              className="absolute -top-6 -right-2 font-display text-[7rem] leading-none font-black opacity-[0.04] select-none"
              style={{ color: a.color }}
              aria-hidden="true"
            >
              {a.number}
            </span>

            {/* top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: a.color }} aria-hidden="true" />

            <span className="text-3xl mb-4 block" aria-hidden="true">{a.icon}</span>
            <p className="text-white font-bold text-base mb-4">{a.title}</p>

            <ul className="space-y-2">
              {a.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm text-white/55">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: a.color }} aria-hidden="true" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   FILMINA 6 — Cierre
═══════════════════════════════════════════════════════════════ */
function Slide6({ fadeUp }) {
  return (
    <div className="min-h-full flex flex-col items-center justify-center px-6 lg:px-16 py-12 relative">
      {/* ambient orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#e31837]/15 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#1d3461]/40 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center w-full">
        {/* eyebrow */}
        <motion.p
          variants={fadeUp} custom={0}
          initial="hidden" animate="visible"
          className="font-mono text-[0.65rem] tracking-[0.3em] text-white/40 uppercase mb-8"
        >
          06 &mdash; Cierre
        </motion.p>

        {/* main message */}
        <motion.h2
          variants={fadeUp} custom={1}
          initial="hidden" animate="visible"
          className="font-display uppercase leading-[0.88] tracking-tight text-white mb-8"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
        >
          Listo para<br />
          <span className="bg-gradient-to-r from-blue-200 to-[#e31837] bg-clip-text text-transparent">
            el reto
          </span>
        </motion.h2>

        {/* commitment card */}
        <motion.div
          variants={fadeUp} custom={2}
          initial="hidden" animate="visible"
          className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-10 text-left"
        >
          <p className="text-white/75 text-sm lg:text-base leading-[1.9]">
            Si me brindan la oportunidad, encontrarán en mí a una persona{' '}
            <strong className="text-white">cercana al equipo</strong>, enfocada en{' '}
            <strong className="text-white">los resultados</strong>, comprometida con el{' '}
            <strong className="text-white">desarrollo de las personas</strong> y dispuesta
            a dar lo mejor de sí para hacer crecer el departamento, apoyar al club y
            contribuir al éxito de PriceSmart.
          </p>
        </motion.div>

        {/* commitment pills */}
        <motion.div
          initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            'Responsabilidad', 'Compromiso', 'Aprendizaje continuo',
            'Cercanía al equipo', 'Orientación a resultados',
          ].map((item) => (
            <motion.span
              key={item}
              variants={fadeUp}
              className="px-4 py-2 rounded-full border border-[#e31837]/30 bg-[#e31837]/10 text-[#e31837]/90 text-xs font-medium tracking-wide"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* name + role */}
        <motion.div
          variants={fadeUp} custom={8}
          initial="hidden" animate="visible"
          className="flex flex-col items-center gap-2"
        >
          <div className="w-12 h-[2px] bg-[#e31837] mb-4" aria-hidden="true" />
          <p className="text-white font-bold text-lg">Ezequiel Calderón Dinarte</p>
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-white/40 uppercase">
            Ejecutivo B2B &mdash; Candidato a Gerente B2B
          </p>
          <p className="font-mono text-[0.6rem] tracking-[0.2em] text-white/25 uppercase mt-1">
            PriceSmart Costa Rica &mdash; 2026
          </p>
        </motion.div>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import StarburstBadge from './StarburstBadge'
import SlideWaves from './SlideWaves'

const TIMELINE = [
  {
    year: '2023',
    role: 'Front End — Puertas',
    desc: 'Ingresé al departamento de Front End, principalmente en Puertas y apoyando cajas. Conocí la operación del club, la importancia del servicio al socio y la disciplina en el cumplimiento de los procesos. Obtuve mi primera comisión por renovaciones siendo cajero, lo que despertó aún más mi interés por el área de ventas.',
    color: '#2e5ea6',
  },
  {
    year: 'Ene 2024',
    role: 'Asistente B2B',
    desc: 'Aprendí el funcionamiento interno del departamento: procesos administrativos, atención y coordinación con los ejecutivos, coordinación de entregas y seguimiento a socios. Obtuve mi licencia de conducir y aproveché cada oportunidad para aprender de los ejecutivos y del resto del equipo.',
    color: '#2e5ea6',
  },
  {
    year: 'Fin 2024',
    role: 'Ejecutivo B2B',
    desc: 'He desarrollado mi portafolio de socios y nuevos negocios haciendo crecer sus cuentas, con visitas a todo tipo de negocios y seguimiento activo, buscando constantemente oportunidades para incrementar las ventas del departamento y del club.',
    color: '#e31837',
  },
]

const TRAITS = ['Disciplinado', 'Enfocado', 'Comprometido', 'Íntegro']

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
    <section id="sobre-mi" aria-labelledby="about-heading" className="relative bg-[#1d3461] bg-grid-dark text-white h-screen overflow-hidden">
      <SlideWaves theme="dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-24 h-full overflow-y-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-12 gap-x-6 gap-y-6 items-start"
        >
          {/* Left: starburst + heading + bio */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div variants={fadeUp}>
              <StarburstBadge number="02" className="mb-5" />
            </motion.div>
            <motion.p variants={fadeUp} className="font-mono text-[0.65rem] tracking-[0.25em] text-white/40 uppercase mb-4">
              02 &mdash; Sobre mí
            </motion.p>
            <motion.h2
              id="about-heading"
              variants={fadeUp}
              className="font-display uppercase text-5xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tight text-white mb-4"
            >
              Ezequiel<br />
              <span className="text-ps-red">Calderón</span> Dinarte
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-sm leading-relaxed mb-5">
              Durante estos tres años mi crecimiento dentro de PriceSmart ha sido
              <strong className="text-white"> progresivo</strong> y, como me gusta llamarlo,
              <strong className="text-white"> escalonado</strong>, pero sobre todo
              <strong className="text-white"> enfocado</strong>.
            </motion.p>

            {/* Por qué B2B */}
            <motion.blockquote
              variants={fadeUp}
              className="border-l-2 border-ps-red/60 pl-4 py-1 mb-5"
            >
              <p className="text-white/70 text-sm italic leading-relaxed">
                Siempre me llamó la atención el departamento de B2B: iba alineado con mi
                forma de ser y con mi visión de hacia dónde quería crecer.
              </p>
            </motion.blockquote>

            {/* Dossier card — values + education, unified */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/[0.03] divide-y divide-white/10 overflow-hidden">
              <div className="p-5">
                <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ps-red uppercase mb-3">Valores que me guían</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Me identifico plenamente con los valores de PriceSmart, especialmente con
                  la <strong className="text-white">integridad</strong>. Ser una persona
                  íntegra es la base para generar una confianza verdadera en los equipos.
                  Esa misma confianza, el respeto y el trabajo en equipo permiten construir
                  equipos sólidos y relaciones duraderas, tanto con nuestros colaboradores
                  como con nuestros socios.
                </p>
              </div>
              <div className="p-5">
                <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ps-blue uppercase mb-2">Formación actual</p>
                <p className="text-white font-semibold text-sm">Estudiante de Derecho</p>
                <p className="text-white/50 text-xs mt-1 leading-relaxed">
                  El aprendizaje continuo es una responsabilidad personal y profesional. Me
                  gusta seguir preparándome y desarrollando nuevas habilidades que me
                  permitan aportar más valor a la compañía.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: timeline + zonas + traits */}
          <div className="col-span-12 lg:col-span-7 lg:pl-6 space-y-8">
            {/* Timeline */}
            <div>
              <motion.p variants={fadeUp} className="font-mono text-[0.65rem] tracking-[0.25em] text-white/40 uppercase mb-6">
                Trayectoria en PriceSmart
              </motion.p>
              <div className="relative">
                <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/10" aria-hidden="true" />
                {TIMELINE.map((item) => (
                  <motion.div
                    key={item.role}
                    variants={fadeUp}
                    className="relative flex gap-6 pb-7 last:pb-0"
                  >
                    <div className="w-20 flex-shrink-0 text-right pt-0.5">
                      <span className="font-mono text-[0.65rem] text-white/40 tracking-wider">{item.year}</span>
                    </div>
                    <div
                      className="relative z-10 flex-shrink-0 mt-1.5 w-3 h-3 rounded-full border-2 ring-4 ring-[#1d3461]"
                      style={{ borderColor: item.color, backgroundColor: item.color }}
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-white text-sm mb-1.5">{item.role}</p>
                      <p className="text-white/55 text-[0.82rem] leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Zonas secundarias */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-ps-blue/30 bg-ps-blue/[0.07] p-5">
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ps-blue uppercase mb-3">
                Dos zonas secundarias completamente distintas
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {['Turrialba', 'Pérez Zeledón'].map((z) => (
                  <span key={z} className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white text-xs font-semibold tracking-wide">
                    {z}
                  </span>
                ))}
              </div>
              <p className="text-white/60 text-[0.82rem] leading-relaxed">
                Ambas me permitieron comprender que cada zona requiere estrategias
                diferentes, planificación, conocimiento del socio y seguimiento constante
                para generar resultados sostenibles.
              </p>
            </motion.div>

            {/* Traits */}
            <div>
              <motion.p variants={fadeUp} className="font-mono text-[0.65rem] tracking-[0.25em] text-white/40 uppercase mb-4">
                Cómo me describo
              </motion.p>
              <motion.div variants={stagger} className="flex flex-wrap gap-2 mb-4">
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
              <motion.p variants={fadeUp} className="text-white/60 text-[0.82rem] leading-relaxed max-w-2xl">
                Mi edad nunca la he visto como una limitación; al contrario, representa una
                motivación para seguir aprendiendo, escuchar a quienes tienen más
                experiencia y prepararme para asumir mayores responsabilidades.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

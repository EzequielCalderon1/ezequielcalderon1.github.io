import { motion } from 'framer-motion'

const PROJECTS = [
  {
    icon: '�',
    title: 'Logro 1',
    desc: 'Describí aquí un logro concreto: qué problema había, qué hiciste y qué resultado obtuviste (con números si es posible).',
    tags: ['Liderazgo', 'Operaciones', 'Resultados'],
    github: null,
    demo: null,
  },
  {
    icon: '🤝',
    title: 'Logro 2',
    desc: 'Describí aquí un logro concreto: qué problema había, qué hiciste y qué resultado obtuviste (con números si es posible).',
    tags: ['Servicio al cliente', 'Equipo', 'Impacto'],
    github: null,
    demo: null,
  },
  {
    icon: '⚡',
    title: 'Logro 3',
    desc: 'Describí aquí un logro concreto: qué problema había, qué hiciste y qué resultado obtuviste (con números si es posible).',
    tags: ['Mejora continua', 'Iniciativa', 'Eficiencia'],
    github: null,
    demo: null,
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

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="projects-header" id="logros">
          <motion.span variants={fadeUp} className="section-label">Trayectoria</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Mis logros</motion.h2>
          <motion.p variants={fadeUp} className="section-sub">
            Resultados concretos que reflejan mi impacto dentro de PriceSmart.
          </motion.p>
        </div>

        <motion.div className="projects-grid" variants={stagger}>
          {PROJECTS.map((p) => (
            <motion.div
              key={p.title}
              className="glass project-card"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <span className="project-icon">{p.icon}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

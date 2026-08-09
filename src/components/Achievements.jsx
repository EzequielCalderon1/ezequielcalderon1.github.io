'use client'

import { motion } from 'framer-motion'
import StarburstBadge from './StarburstBadge'

const ITEMS = [
  {
    num: '01',
    title: 'Logro 1',
    desc: 'Describí aquí un logro concreto: qué problema había, qué hiciste y qué resultado obtuviste (con números si es posible).',
    tags: ['Liderazgo', 'Operaciones', 'Resultados'],
  },
  {
    num: '02',
    title: 'Logro 2',
    desc: 'Describí aquí un logro concreto: qué problema había, qué hiciste y qué resultado obtuviste (con números si es posible).',
    tags: ['Servicio al cliente', 'Equipo', 'Impacto'],
  },
  {
    num: '03',
    title: 'Logro 3',
    desc: 'Describí aquí un logro concreto: qué problema había, qué hiciste y qué resultado obtuviste (con números si es posible).',
    tags: ['Mejora continua', 'Iniciativa', 'Eficiencia'],
  },
]

export default function Achievements() {
  return (
    <section id="trayectoria" aria-labelledby="achievements-heading" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <StarburstBadge number="03" className="mb-6" />
          <p className="font-mono text-[0.65rem] tracking-[0.25em] text-gray-400 uppercase mb-5">
            03 &mdash; Trayectoria
          </p>
          <h2
            id="achievements-heading"
            className="font-display uppercase text-5xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tight text-ps-navy"
          >
            Mis logros
          </h2>
        </motion.div>

        <ol aria-label="Lista de logros" className="divide-y divide-gray-200">
          {ITEMS.map((item, i) => (
            <motion.li
              key={item.num}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-12 gap-x-6 gap-y-3 py-10 -mx-4 px-4 rounded-xl hover:bg-gray-50 hover:shadow-sm transition-all"
            >
              <div className="col-span-2 sm:col-span-1 flex items-start pt-1">
                <svg
                  className="w-6 h-6 text-ps-red flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="col-span-10 sm:col-span-11">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-ps-navy transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-2xl">
                  {item.desc}
                </p>
                <ul aria-label={`Etiquetas de ${item.title}`} className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <span className="text-[0.7rem] font-semibold tracking-wider px-3 py-1 rounded-full border border-ps-blue/25 bg-ps-blue/10 text-ps-blue">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

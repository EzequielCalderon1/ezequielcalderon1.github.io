'use client'

import { motion, useReducedMotion } from 'framer-motion'

/* Tendencia ascendente con variación — lee como un gráfico de resultados,
   no como una infografía financiera. Alturas en % del área del telón. */
const BARS = [
  { h: 20, tone: 'navy' },
  { h: 28, tone: 'navy' },
  { h: 24, tone: 'navy' },
  { h: 36, tone: 'navy' },
  { h: 32, tone: 'blue' },
  { h: 45, tone: 'blue' },
  { h: 41, tone: 'blue' },
  { h: 54, tone: 'blue' },
  { h: 49, tone: 'blue' },
  { h: 63, tone: 'blue' },
  { h: 58, tone: 'red' },
  { h: 72, tone: 'red' },
  { h: 80, tone: 'red' },
  { h: 93, tone: 'red' },
]

const TONE = {
  navy: 'linear-gradient(to top, rgba(29,52,97,0.16), rgba(29,52,97,0.02))',
  blue: 'linear-gradient(to top, rgba(46,94,166,0.18), rgba(46,94,166,0.02))',
  red:  'linear-gradient(to top, rgba(227,24,55,0.16), rgba(227,24,55,0.02))',
}

/* posiciones fijas (nada de Math.random: rompería la hidratación) */
const TICKS = [
  { left: '9%',  delay: 0,   dur: 9.0,  size: 13, color: '#2e5ea6' },
  { left: '23%', delay: 3.2, dur: 11.0, size: 10, color: '#1d3461' },
  { left: '37%', delay: 6.0, dur: 10.0, size: 15, color: '#2e5ea6' },
  { left: '61%', delay: 1.6, dur: 12.0, size: 11, color: '#e31837' },
  { left: '76%', delay: 4.6, dur: 9.5,  size: 14, color: '#2e5ea6' },
  { left: '90%', delay: 7.4, dur: 11.5, size: 12, color: '#e31837' },
]

const SLOT = 100 / BARS.length
/* puntos del polyline sobre la cima de cada barra (viewBox 0..100) */
const POINTS = BARS.map((b, i) => [SLOT * (i + 0.5), 100 - b.h])
const LINE = POINTS.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ')
const PEAK = POINTS[POINTS.length - 1]

export default function GrowthBackdrop() {
  const reduce = useReducedMotion()

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* banda inferior: barras, línea y punto comparten exactamente la misma caja */}
      <div className="absolute inset-x-0 bottom-0 h-[64%]">
       <div className="absolute inset-0 mx-[3%]">
        {/* barras */}
        <div className="absolute inset-0 flex items-end gap-[0.9%]">
          {BARS.map((b, i) => (
            <motion.div
              key={i}
              className="flex-1 origin-bottom"
              style={{ height: `${b.h}%` }}
              animate={reduce ? undefined : { scaleY: [1, 1.035, 1] }}
              transition={reduce ? undefined : {
                duration: 6 + (i % 5),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.18,
              }}
            >
              <motion.div
                className="w-full h-full rounded-t-[3px] origin-bottom"
                style={{ background: TONE[b.tone] }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.055 }}
              />
            </motion.div>
          ))}
        </div>

        {/* línea de tendencia — se traza, se sostiene y vuelve a trazarse */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.polyline
            points={LINE}
            stroke="#e31837"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              reduce
                ? { pathLength: 1, opacity: 0.3 }
                : { pathLength: [0, 1, 1, 1], opacity: [0, 0.32, 0.32, 0] }
            }
            transition={
              reduce
                ? { duration: 1.2, delay: 0.6 }
                : { duration: 11, times: [0, 0.22, 0.88, 1], repeat: Infinity, delay: 0.6, ease: 'easeInOut' }
            }
          />
        </svg>

        {/* punto vivo en la cima */}
        <div
          className="absolute"
          style={{ left: `${PEAK[0]}%`, bottom: `${BARS[BARS.length - 1].h}%` }}
        >
          <div className="relative -translate-x-1/2 translate-y-1/2">
            {!reduce && (
              <motion.span
                className="absolute inset-0 m-auto w-2.5 h-2.5 rounded-full bg-ps-red"
                animate={{ scale: [1, 3.2], opacity: [0.35, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 1.6 }}
              />
            )}
            <motion.span
              className="block w-2.5 h-2.5 rounded-full bg-ps-red/50"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 320, damping: 16, delay: 1.4 }}
            />
          </div>
        </div>
       </div>
      </div>

      {/* flechas que suben y se desvanecen */}
      {!reduce && TICKS.map((t) => (
        <motion.span
          key={t.left}
          className="absolute bottom-0"
          style={{ left: t.left, color: t.color }}
          animate={{ y: [0, -420], opacity: [0, 0.3, 0.3, 0] }}
          transition={{
            duration: t.dur,
            times: [0, 0.15, 0.7, 1],
            repeat: Infinity,
            ease: 'linear',
            delay: t.delay,
          }}
        >
          <svg width={t.size} height={t.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.span>
      ))}
    </div>
  )
}

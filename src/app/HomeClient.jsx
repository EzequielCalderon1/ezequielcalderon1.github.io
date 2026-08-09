'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Achievements from '@/components/Achievements'
import Vision from '@/components/Vision'
import Development from '@/components/Development'
import Contact from '@/components/Contact'

const SLIDES = [
  { label: 'Presentación',              Component: Hero,         dark: false },
  { label: 'Sobre mí',                  Component: About,        dark: true  },
  { label: 'Lo que he aportado',        Component: Achievements, dark: false },
  { label: 'Mi visión',                 Component: Vision,       dark: true  },
  { label: 'Lo que quiero desarrollar', Component: Development,  dark: false },
  { label: 'Cierre',                    Component: Contact,      dark: true  },
]

const slideVariants = {
  enter: (dir) => ({ y: dir > 0 ? '100%' : '-100%', opacity: 0.4 }),
  center: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:  (dir) => ({ y: dir > 0 ? '-100%' : '100%', opacity: 0.4, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }),
}

export default function HomeClient() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir]         = useState(1)
  const touchStart             = useRef(null)

  const go = useCallback((delta) => {
    setCurrent((prev) => {
      const next = Math.max(0, Math.min(SLIDES.length - 1, prev + delta))
      if (next !== prev) setDir(delta)
      return next
    })
  }, [])

  /* keyboard */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); go(1) }
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); go(-1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  /* touch swipe */
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientY }
  const onTouchEnd   = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientY
    if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1)
    touchStart.current = null
  }

  const { Component, dark, label } = SLIDES[current]

  /* theme-aware colours */
  const logoColor  = dark ? 'text-white'    : 'text-ps-navy'
  const metaColor  = dark ? 'text-white/40' : 'text-gray-400'
  const dotActive  = dark ? 'bg-white'      : 'bg-ps-red'
  const dotBase    = dark ? 'bg-white/20 hover:bg-white/50' : 'bg-gray-300 hover:bg-gray-500'
  const btnPrev    = dark ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-200 text-gray-500 hover:bg-gray-50'

  return (
    <div
      className="h-screen overflow-hidden relative"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── progress bar ── */}
      <div
        className="absolute top-0 inset-x-0 z-50 h-[2px]"
        style={{ background: dark ? 'rgba(255,255,255,0.08)' : '#e5e7eb' }}
      >
        <motion.div
          className="h-full bg-ps-red"
          animate={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* ── top bar ── */}
      <div className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-6 lg:px-10 pt-3.5 pb-3">
        <span className={`font-mono text-sm font-black tracking-wider ${logoColor}`}>
          EC<span className="text-ps-red">.</span>
        </span>
        <span className={`font-mono text-[0.6rem] tracking-[0.2em] uppercase ${metaColor}`}>
          {String(current + 1).padStart(2, '0')} / {SLIDES.length}&nbsp;&mdash;&nbsp;{label}
        </span>
      </div>

      {/* ── slide ── */}
      <AnimatePresence custom={dir} mode="wait" initial={false}>
        <motion.div
          key={current}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Component />
        </motion.div>
      </AnimatePresence>

      {/* ── side dots ── */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
            aria-label={`Ir a filmina ${i + 1}`}
            className={`rounded-full transition-all focus-visible:outline-2 focus-visible:outline-ps-red ${
              i === current ? `w-2 h-5 ${dotActive}` : `w-2 h-2 ${dotBase}`
            }`}
          />
        ))}
      </div>

      {/* ── bottom navigation ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <button
          onClick={() => go(-1)}
          disabled={current === 0}
          aria-label="Filmina anterior"
          className={`w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-25 transition-all ${btnPrev}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>

        <span className={`font-mono text-[0.65rem] tracking-[0.2em] uppercase select-none ${metaColor}`}>
          {current + 1} / {SLIDES.length}
        </span>

        <button
          onClick={() => go(1)}
          disabled={current === SLIDES.length - 1}
          aria-label="Siguiente filmina"
          className="w-10 h-10 rounded-full bg-ps-red text-white flex items-center justify-center disabled:opacity-25 hover:bg-[#c8152f] transition-all"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>
      </div>
    </div>
  )
}


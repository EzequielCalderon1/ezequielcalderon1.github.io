'use client'

import { useReducedMotion } from 'framer-motion'
import GradientWaves from './GradientWaves'

/* Telón animado para las filminas 2–6.
   Mismos parámetros de reactbits.dev/backgrounds/gradient-waves, pero con la
   paleta que ya usa el sitio: el horizonte se funde con el fondo de la sección,
   las olas van en ps-blue y las crestas en el azul claro del degradado de
   "Cierre" (filminas oscuras) o en ps-navy (filminas blancas).
   Opacidad baja a propósito: es movimiento de fondo, no protagonismo. */

const THEMES = {
  dark: {
    horizonColor: '#1d3461',   // = bg de la sección: el horizonte se disuelve
    waveColor: '#2e5ea6',      // ps-blue
    crestColor: '#bfdbfe',     // blue-200, ya presente en el título de Cierre
    opacity: 0.6,
    scrim: 'bg-[#1d3461]/12',
  },
  light: {
    horizonColor: '#2e5ea6',   // sobre blanco el desvanecido lo hace el alfa
    waveColor: '#2e5ea6',      // ps-blue
    crestColor: '#1d3461',     // ps-navy
    opacity: 0.45,
    scrim: 'bg-white/25',
  },
}

export default function SlideWaves({ theme = 'dark' }) {
  const reduce = useReducedMotion()
  const t = THEMES[theme] ?? THEMES.dark

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {!reduce && (
        <div className="absolute inset-0">
          <GradientWaves
            horizonColor={t.horizonColor}
            waveColor={t.waveColor}
            crestColor={t.crestColor}
            speed={0.3}
            amplitude={2.5}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            tilt={1.11}
            zoom={1}
            height={5.5}
            fogDepth={15}
            detail="medium"
            brightness={1}
            opacity={t.opacity}
            mouseInteraction
            parallaxStrength={0.35}
            grain
            grainIntensity={0.05}
            maxDpr={1.5}
          />
        </div>
      )}

      {/* velo para que el texto siga legible sobre las olas */}
      <div className={`pointer-events-none absolute inset-0 ${t.scrim}`} />
    </div>
  )
}

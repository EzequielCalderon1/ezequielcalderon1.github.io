'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Presentation from '@/components/Presentation'

export default function HomeClient() {
  const [presentationOpen, setPresentationOpen] = useState(false)

  return (
    <>
      <Navbar onOpenPresentation={() => setPresentationOpen(true)} />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero onOpenPresentation={() => setPresentationOpen(true)} />
        <About />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Presentation open={presentationOpen} onClose={() => setPresentationOpen(false)} />
    </>
  )
}

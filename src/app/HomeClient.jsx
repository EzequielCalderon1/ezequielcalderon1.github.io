'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Achievements from '@/components/Achievements'
import Vision from '@/components/Vision'
import Development from '@/components/Development'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomeClient() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Achievements />
        <Vision />
        <Development />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

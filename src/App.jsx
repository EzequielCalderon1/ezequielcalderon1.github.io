import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Presentation from './components/Presentation'
import './App.css'

function App() {
  const [presentationOpen, setPresentationOpen] = useState(false)

  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>
      <Navbar onOpenPresentation={() => setPresentationOpen(true)} />
      <main>
        <Hero onOpenPresentation={() => setPresentationOpen(true)} />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Presentation open={presentationOpen} onClose={() => setPresentationOpen(false)} />
    </>
  )
}

export default App

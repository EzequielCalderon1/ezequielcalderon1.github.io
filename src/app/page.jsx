import SkipLink from '@/components/SkipLink'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

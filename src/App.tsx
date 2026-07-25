import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompetencyStrip from './components/CompetencyStrip'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Credentials from './components/Credentials'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <Navbar />
      <Hero />
      <CompetencyStrip />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Credentials />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
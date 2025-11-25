import { useState } from "react"
import ThemeContext from "./context/ThemeContext.jsx"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Services from "./components/Services.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Process from "./components/Process.jsx"
import About from "./components/About.jsx"
import Testimonials from "./components/Testimonials.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleDarkMode: () => setDarkMode(!darkMode) }}
    >
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App

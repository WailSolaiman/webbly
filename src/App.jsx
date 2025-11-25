import { useState } from "react"
import ThemeContext from "./context/ThemeContext.jsx"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Services from "./components/Services.jsx"
import About from "./components/About.jsx"
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
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App

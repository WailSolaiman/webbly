import { useContext, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi"
import ThemeContext from "../context/ThemeContext"

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for floating nav compaction
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? "top-4" : "top-6"
        }`}
      >
        <div
          className={`relative flex items-center justify-between px-6 transition-all duration-300 backdrop-blur-xl border shadow-lg ${
            scrolled
              ? "w-[90%] max-w-5xl py-3 rounded-full"
              : "w-[95%] max-w-7xl py-4 rounded-2xl"
          } ${
            darkMode
              ? "bg-slate-900/80 border-slate-700/50 shadow-slate-900/20"
              : "bg-white/80 border-slate-200/50 shadow-slate-200/20"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight flex items-center gap-2"
          >
            <span className="text-2xl">⚡</span>
            <span className="bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Webbly
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  darkMode
                    ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions Area */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`relative p-2 rounded-full transition-colors bg-transparent ${
                darkMode
                  ? "text-yellow-400 hover:bg-slate-800/50"
                  : "text-slate-600 hover:bg-slate-100/50"
              }`}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? "dark" : "light"}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? (
                    <FiSun className="w-5 h-5" />
                  ) : (
                    <FiMoon className="w-5 h-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <FiMenu
                className={`w-6 h-6 ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={`absolute right-0 top-0 bottom-0 w-3/4 max-w-sm p-6 shadow-2xl ${
                darkMode ? "bg-slate-900" : "bg-white"
              }`}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2 rounded-full transition-colors ${
                    darkMode
                      ? "hover:bg-slate-800 text-slate-400"
                      : "hover:bg-slate-100 text-slate-600"
                  }`}
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors ${
                      darkMode
                        ? "text-slate-300 hover:text-white hover:bg-slate-800"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

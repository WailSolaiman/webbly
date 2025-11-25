import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import { Moon, Sun } from "lucide-react"

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <header
      className={`fixed top-0 w-full shadow-md z-10 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <nav
        className={`container mx-auto flex justify-between items-center p-4 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        <a href="#home" className="text-2xl font-bold text-purple-600">
          Webbly
        </a>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#home"
              className={`hover:text-blue-600 transition-colors ${
                darkMode ? "text-white" : "text-gray-700"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`hover:text-blue-600 transition-colors ${
                darkMode ? "text-white" : "text-gray-700"
              }`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`hover:text-blue-600 transition-colors ${
                darkMode ? "text-white" : "text-gray-700"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`hover:text-blue-600 transition-colors ${
                darkMode ? "text-white" : "text-gray-700"
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
        <button onClick={toggleDarkMode} className="p-2 rounded-full">
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>
    </header>
  )
}

export default Header

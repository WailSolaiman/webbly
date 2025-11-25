import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Moon, Sun, Menu } from "lucide-react"

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-10">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <a
          href="#home"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Webbly
        </a>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-blue-600" />
          )}
        </button>
      </nav>
    </header>
  )
}

export default Header

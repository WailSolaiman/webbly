import { useContext } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import ThemeContext from "../context/ThemeContext"

const Hero = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <section
      id="home"
      className={`pt-16 min-h-screen flex items-center ${
        darkMode
          ? "bg-linear-to-br from-gray-900 to-gray-800"
          : "bg-linear-to-br from-purple-200 via-blue-200 to-indigo-300"
      }`}
    >
      <div className="w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Elevate Your{" "}
            <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>
              Business
            </span>{" "}
            with Webbly
          </h1>
          <p
            className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Professional web design and development services to create stunning,
            high-converting websites that drive results.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

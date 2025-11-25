import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Elevate Your{" "}
            <span className="text-blue-600 dark:text-blue-400">Business</span>{" "}
            with Webbly
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
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

import React from "react"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Webbly</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Creating digital experiences that inspire and engage. Let's build
            something amazing together.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a
              href="#services"
              className="hover:text-blue-400 transition-colors"
            >
              Services
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <hr className="border-gray-800 mb-8" />
          <p className="text-gray-400">
            © {new Date().getFullYear()} Webbly. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

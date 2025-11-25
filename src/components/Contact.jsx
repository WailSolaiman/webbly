import { useContext } from "react"
import { motion } from "framer-motion"
import ThemeContext from "../context/ThemeContext"
import ContactMethods from "./contact/ContactMethods"
import ContactForm from "./contact/ContactForm"

const Contact = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden ${
        darkMode
          ? "bg-linear-to-b from-slate-900 to-slate-800"
          : "bg-linear-to-b from-white to-slate-50"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            darkMode ? "bg-cyan-500" : "bg-cyan-400"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            darkMode ? "bg-amber-500" : "bg-amber-400"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Let's Build Something Amazing
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <ContactMethods />

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

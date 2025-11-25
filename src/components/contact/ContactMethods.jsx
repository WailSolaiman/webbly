import { useContext } from "react"
import { motion } from "framer-motion"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import ThemeContext from "../../context/ThemeContext"

const ContactMethods = () => {
  const { darkMode } = useContext(ThemeContext)

  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Us",
      detail: "hello@webbly.com",
      description: "Send us an email anytime",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Visit Us",
      detail: "San Francisco, CA",
      description: "Come say hello at our office",
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {contactMethods.map((method, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className={`p-8 rounded-2xl border-2 transition-all ${
            darkMode
              ? "bg-slate-800/50 border-slate-700 hover:border-cyan-500/50"
              : "bg-white border-slate-200 hover:border-cyan-500/50 shadow-lg"
          }`}
        >
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
              darkMode
                ? "bg-linear-to-br from-cyan-500/20 to-amber-500/20 text-cyan-400"
                : "bg-linear-to-br from-cyan-50 to-amber-50 text-cyan-600"
            }`}
          >
            {method.icon}
          </div>
          <h3
            className={`text-xl font-bold mb-2 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {method.title}
          </h3>
          <p
            className={`font-semibold mb-2 ${
              darkMode ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            {method.detail}
          </p>
          <p
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {method.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

export default ContactMethods

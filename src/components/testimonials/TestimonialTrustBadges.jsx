import { useContext } from "react"
import { motion } from "framer-motion"
import ThemeContext from "../../context/ThemeContext"

const TestimonialTrustBadges = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
      <div
        className={`inline-flex items-center gap-8 px-8 py-6 rounded-xl ${
          darkMode ? "bg-slate-700" : "bg-slate-100"
        }`}
      >
        <div>
          <div
            className={`text-3xl font-bold bg-linear-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent`}
          >
            98%
          </div>
          <div
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Satisfaction Rate
          </div>
        </div>
        <div
          className={`h-12 w-px ${darkMode ? "bg-slate-600" : "bg-slate-300"}`}
        ></div>
        <div>
          <div
            className={`text-3xl font-bold bg-linear-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent`}
          >
            200+
          </div>
          <div
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Happy Clients
          </div>
        </div>
        <div
          className={`h-12 w-px ${darkMode ? "bg-slate-600" : "bg-slate-300"}`}
        ></div>
        <div>
          <div
            className={`text-3xl font-bold bg-linear-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent`}
          >
            5 Years
          </div>
          <div
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Experience
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialTrustBadges

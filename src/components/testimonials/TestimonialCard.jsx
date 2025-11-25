import { useContext } from "react"
import { motion } from "framer-motion"
import { FiStar } from "react-icons/fi"
import { FaQuoteLeft } from "react-icons/fa"
import ThemeContext from "../../context/ThemeContext"

const TestimonialCard = ({ testimonial, variants }) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5 }}
      className={`relative p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
        darkMode ? "bg-slate-700" : "bg-slate-50"
      }`}
    >
      {/* Quote Icon */}
      <div
        className={`absolute top-6 right-6 ${
          darkMode ? "text-slate-600" : "text-slate-300"
        }`}
      >
        <FaQuoteLeft className="w-10 h-10" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FiStar key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Content */}
      <p
        className={`text-sm leading-relaxed mb-6 italic ${
          darkMode ? "text-slate-300" : "text-slate-600"
        }`}
      >
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500"
        />
        <div>
          <h4
            className={`font-semibold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {testimonial.name}
          </h4>
          <p
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard

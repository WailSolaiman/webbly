import { useContext } from "react"
import { motion } from "framer-motion"
import { FaLightbulb, FaPalette, FaRocket } from "react-icons/fa"
import { FiCode } from "react-icons/fi"
import ThemeContext from "../context/ThemeContext"

const Process = () => {
  const { darkMode } = useContext(ThemeContext)

  const steps = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We start by understanding your business goals, target audience, and project requirements to create a solid foundation.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      number: "02",
      title: "Design & Prototyping",
      description:
        "Our designers create stunning mockups and interactive prototypes that bring your vision to life before development.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      number: "03",
      title: "Development & Testing",
      description:
        "We build your website with clean, efficient code and rigorously test every feature to ensure quality and performance.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      number: "04",
      title: "Launch & Support",
      description:
        "We launch your site with care and provide ongoing support to ensure everything runs smoothly and scales with your growth.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section
      id="process"
      className={`py-24 ${
        darkMode ? "bg-slate-900" : "bg-linear-to-b from-slate-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Our Process
          </h2>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            A proven methodology that transforms ideas into exceptional digital
            experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div
            className={`hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-3/4 h-1 ${
              darkMode ? "bg-slate-700" : "bg-slate-200"
            }`}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`relative z-10 w-24 h-24 rounded-full bg-linear-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Icon Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-linear-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <div
                  className={`text-center p-6 rounded-xl ${
                    darkMode ? "bg-slate-800" : "bg-white shadow-md"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold mb-3 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-cyan-700 hover:bg-cyan-800 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            style={{ color: "white" }}
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Process

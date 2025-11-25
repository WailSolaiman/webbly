import { useContext } from "react"
import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"
import { IoSparkles } from "react-icons/io5"
import ThemeContext from "../context/ThemeContext"

const Hero = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <section
      id="home"
      className={`pt-16 min-h-screen flex items-center relative overflow-hidden ${
        darkMode
          ? "bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-linear-to-br from-slate-50 via-cyan-50 to-slate-100"
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${
            darkMode ? "bg-cyan-500" : "bg-cyan-300"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            darkMode ? "bg-amber-500" : "bg-amber-300"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <IoSparkles className="w-4 h-4" />
              <span>Award-Winning Web Design Agency</span>
            </div>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Transform Your{" "}
              <span className="bg-linear-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl mb-8 leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              We craft exceptional web experiences that captivate audiences and
              drive measurable business growth. From concept to launch, we're
              your strategic digital partner.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center group"
                style={{ color: "white" }}
              >
                Start Your Project
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center ${
                  darkMode
                    ? "border-slate-600 text-white hover:bg-slate-800"
                    : "border-slate-300 text-slate-900 hover:bg-slate-100"
                }`}
              >
                View Our Work
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Modern web design workspace"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent"></div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`absolute -bottom-6 -left-6 p-6 rounded-xl shadow-xl backdrop-blur-sm ${
                darkMode ? "bg-slate-800/90" : "bg-white/90"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-r from-cyan-500 to-amber-500 flex items-center justify-center text-white font-bold text-xl">
                  98%
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Client Satisfaction
                  </p>
                  <p
                    className={`text-xs ${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    200+ Happy Clients
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

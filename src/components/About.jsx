import { useContext } from "react"
import { motion } from "framer-motion"
import { FiTarget, FiHeart, FiZap, FiShield } from "react-icons/fi"
import ThemeContext from "../context/ThemeContext"

const About = () => {
  const { darkMode } = useContext(ThemeContext)

  const values = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Result-Driven",
      description:
        "We focus on delivering measurable results that impact your bottom line.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Client-Focused",
      description:
        "Your satisfaction and success are at the heart of everything we do.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We stay ahead with the latest technologies and design trends.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Quality First",
      description:
        "We never compromise on quality, ensuring excellence in every detail.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section
      id="about"
      className={`py-24 ${
        darkMode ? "bg-slate-900" : "bg-linear-to-b from-white to-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Building Digital Excellence Since 2019
            </h2>
            <p
              className={`text-lg mb-6 leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Webbly is a full-service web design and development agency
              dedicated to creating exceptional digital experiences. We combine
              creative design with technical expertise to deliver websites that
              not only look stunning but also drive real business results.
            </p>
            <p
              className={`text-lg mb-8 leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Our team of passionate professionals works closely with clients to
              understand their unique needs and deliver tailored solutions that
              exceed expectations. From startups to established enterprises,
              we've helped businesses transform their online presence and
              achieve their digital goals.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-lg ${
                    darkMode ? "bg-slate-800" : "bg-white shadow-md"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-linear-to-br ${value.color} flex items-center justify-center text-white mb-4`}
                  >
                    {value.icon}
                  </div>
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                    alt="Team collaboration"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                    alt="Creative workspace"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                    alt="Team meeting"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                    alt="Design process"
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className={`absolute -bottom-6 -left-6 p-6 rounded-xl shadow-2xl backdrop-blur-sm ${
                darkMode ? "bg-slate-800/90" : "bg-white/90"
              }`}
            >
              <div className="text-center">
                <div className="text-4xl font-bold bg-linear-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent mb-2">
                  350+
                </div>
                <p
                  className={`text-sm font-semibold ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Projects Delivered
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

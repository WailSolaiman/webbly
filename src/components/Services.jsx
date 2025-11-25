import { useContext } from "react"
import { motion } from "framer-motion"
import {
  FiCode,
  FiZap,
  FiSmartphone,
  FiShoppingCart,
  FiTrendingUp,
  FiCpu,
} from "react-icons/fi"
import { FaPalette, FaWrench } from "react-icons/fa"
import ThemeContext from "../context/ThemeContext"

const Services = () => {
  const { darkMode } = useContext(ThemeContext)

  const services = [
    {
      icon: <FiCode className="w-10 h-10" />,
      title: "Web Development",
      description:
        "Custom websites built with cutting-edge technologies like React, Next.js, and Node.js for optimal performance.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <FaPalette className="w-10 h-10" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that engage users and create memorable brand experiences.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <FiShoppingCart className="w-10 h-10" />,
      title: "E-Commerce Solutions",
      description:
        "Complete online stores with secure payments, inventory management, and seamless checkout experiences.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <FiSmartphone className="w-10 h-10" />,
      title: "Mobile-First Design",
      description:
        "Responsive designs that look stunning on all devices, from smartphones to desktops.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FiZap className="w-10 h-10" />,
      title: "Performance Optimization",
      description:
        "Lightning-fast load times and optimized code for superior user experience and SEO rankings.",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <FiTrendingUp className="w-10 h-10" />,
      title: "SEO & Marketing",
      description:
        "Strategic SEO tactics and digital marketing to increase visibility and drive organic traffic.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiCpu className="w-10 h-10" />,
      title: "API Integration",
      description:
        "Seamless third-party integrations and custom API development for extended functionality.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FaWrench className="w-10 h-10" />,
      title: "Maintenance & Support",
      description:
        "Ongoing support, updates, and maintenance to keep your website secure and running smoothly.",
      color: "from-rose-500 to-pink-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="services"
      className={`py-24 ${
        darkMode ? "bg-slate-900" : "bg-linear-to-b from-white to-slate-50"
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
            Comprehensive Web Solutions
          </h2>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            From concept to launch and beyond, we provide end-to-end services to
            transform your digital vision into reality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group p-8 rounded-xl transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700"
                  : "bg-white hover:shadow-2xl shadow-lg"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-lg bg-linear-to-br ${service.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

import { motion } from "framer-motion"
import {
  Code,
  Globe,
  Zap,
  Smartphone,
  ShoppingCart,
  Search,
} from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Web Development",
      description:
        "Custom websites built with modern frameworks like React, Next.js, and Node.js.",
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Web Design",
      description:
        "Beautiful, responsive designs that engage users and enhance brand identity.",
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Performance Optimization",
      description:
        "Fast-loading websites with SEO optimization for better Google rankings.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Mobile Optimization",
      description:
        "Ensure your site looks great on all devices with mobile-first design.",
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      title: "E-Commerce Solutions",
      description:
        "Build robust online stores with secure payments and inventory management.",
    },
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "SEO Services",
      description:
        "Improve visibility and drive organic traffic with strategic SEO tactics.",
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
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive web solutions to help your business thrive in the
            digital world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
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

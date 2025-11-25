import { useContext } from "react"
import { motion } from "framer-motion"
import { FiExternalLink } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"
import ThemeContext from "../context/ThemeContext"

const Portfolio = () => {
  const { darkMode } = useContext(ThemeContext)

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A modern e-commerce solution with shopping cart, payment integration, and inventory management.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      tags: ["React", "Node.js", "Stripe"],
      link: "#",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description:
        "Intuitive analytics dashboard for SaaS platforms with real-time data visualization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "Chart.js", "Tailwind"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      description:
        "Creative portfolio site for a photographer showcasing their best work.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      tags: ["Next.js", "Framer Motion", "CMS"],
      link: "#",
    },
    {
      title: "Restaurant Website",
      category: "Web Development",
      description:
        "Full-featured restaurant website with online ordering and reservation system.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      tags: ["React", "Firebase", "Maps API"],
      link: "#",
    },
    {
      title: "Mobile App Landing",
      category: "Landing Page",
      description:
        "High-converting landing page for a mobile app with app store integrations.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      tags: ["Next.js", "TypeScript", "Analytics"],
      link: "#",
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      description:
        "Professional corporate website with CMS integration and multilingual support.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      tags: ["WordPress", "PHP", "MySQL"],
      link: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="portfolio"
      className={`py-24 ${darkMode ? "bg-slate-800" : "bg-white"}`}
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
            Featured Projects
          </h2>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Explore our recent work and see how we've helped businesses achieve
            their digital goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                darkMode ? "bg-slate-700" : "bg-slate-50"
              }`}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.link}
                    className="p-2 bg-white/90 hover:bg-white rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.link}
                    className="p-2 bg-white/90 hover:bg-white rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 delay-75"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-linear-to-r from-cyan-500 to-amber-500 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        darkMode
                          ? "bg-slate-600 text-slate-200"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

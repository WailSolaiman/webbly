import { useContext } from "react"
import { motion } from "framer-motion"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"
import ThemeContext from "../../context/ThemeContext"

const FooterBrand = () => {
  const { darkMode } = useContext(ThemeContext)

  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, label: "Facebook" },
    { icon: <FaTwitter className="w-5 h-5" />, label: "Twitter" },
    { icon: <FaLinkedin className="w-5 h-5" />, label: "LinkedIn" },
    { icon: <FaInstagram className="w-5 h-5" />, label: "Instagram" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <a href="#home" className="flex items-center gap-2 mb-6 group">
        <span className="text-2xl">⚡</span>
        <span
          className={`text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r ${
            darkMode ? "from-white to-slate-400" : "from-slate-900 to-slate-600"
          }`}
        >
          Webbly
        </span>
      </a>
      <p
        className={`text-base leading-relaxed mb-8 max-w-sm ${
          darkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        Crafting exceptional digital experiences that transform businesses. We
        combine creativity with technical expertise to bring your vision to
        life.
      </p>

      <div className="flex gap-3">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href="#"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              darkMode
                ? "bg-slate-800 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400"
                : "bg-slate-100 text-slate-500 hover:bg-cyan-500/10 hover:text-cyan-600"
            }`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default FooterBrand

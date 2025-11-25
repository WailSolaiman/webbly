import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext"

const FooterLinkSection = ({ title, links }) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className="lg:col-span-2">
      <h4
        className={`font-semibold mb-6 ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h4>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className={`text-sm transition-colors hover:translate-x-1 inline-block duration-200 ${
                darkMode
                  ? "text-slate-400 hover:text-cyan-400"
                  : "text-slate-500 hover:text-cyan-600"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinkSection

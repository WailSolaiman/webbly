import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext"

const FooterBottom = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div
      className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${
        darkMode ? "border-slate-800" : "border-slate-100"
      }`}
    >
      <p
        className={`text-sm ${darkMode ? "text-slate-500" : "text-slate-400"}`}
      >
        © {new Date().getFullYear()} Webbly. All rights reserved.
      </p>
      <div className="flex gap-6 text-sm">
        {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
          <a
            key={item}
            href="#"
            className={`transition-colors ${
              darkMode
                ? "text-slate-500 hover:text-slate-300"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}

export default FooterBottom

import { useContext } from "react"
import { FiMail, FiMapPin, FiArrowRight } from "react-icons/fi"
import ThemeContext from "../../context/ThemeContext"

const FooterNewsletter = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className="lg:col-span-4">
      <h4
        className={`font-semibold mb-6 ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        Stay Updated
      </h4>
      <p
        className={`text-sm mb-6 ${
          darkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        Subscribe to our newsletter for the latest updates and tech trends.
      </p>

      <form className="mb-8" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all ${
              darkMode
                ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500/50"
                : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500"
            }`}
          />
          <button
            type="submit"
            className="absolute right-2 top-2 p-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
          >
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      <div className="space-y-3">
        <div
          className={`flex items-center gap-3 text-sm ${
            darkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          <FiMail className="w-4 h-4 text-cyan-500" />
          hello@webbly.com
        </div>
        <div
          className={`flex items-center gap-3 text-sm ${
            darkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          <FiMapPin className="w-4 h-4 text-cyan-500" />
          San Francisco, CA
        </div>
      </div>
    </div>
  )
}

export default FooterNewsletter

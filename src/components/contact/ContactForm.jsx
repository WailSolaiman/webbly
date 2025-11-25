import { useContext, useState } from "react"
import { FiSend, FiCheckCircle } from "react-icons/fi"
import ThemeContext from "../../context/ThemeContext"

const ContactForm = () => {
  const { darkMode } = useContext(ThemeContext)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)

      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={`p-8 md:p-12 rounded-2xl border-2 ${
          darkMode
            ? "bg-slate-800/50 border-slate-700"
            : "bg-white border-slate-200 shadow-xl"
        }`}
      >
        {isSuccess ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <FiCheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3
              className={`text-2xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Message Sent Successfully!
            </h3>
            <p className={`${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    darkMode ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                    darkMode
                      ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    darkMode ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                    darkMode
                      ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                  }`}
                />
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${
                  darkMode ? "text-slate-200" : "text-slate-700"
                }`}
              >
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us about your project..."
                className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none transition-all ${
                  darkMode
                    ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                }`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-linear-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FiSend className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactForm

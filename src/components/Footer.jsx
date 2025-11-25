import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import FooterBrand from "./footer/FooterBrand"
import FooterLinkSection from "./footer/FooterLinkSection"
import FooterNewsletter from "./footer/FooterNewsletter"
import FooterBottom from "./footer/FooterBottom"

const Footer = () => {
  const { darkMode } = useContext(ThemeContext)

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#about" },
      { label: "Careers", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ],
    services: [
      { label: "Web Design", href: "#services" },
      { label: "Development", href: "#services" },
      { label: "E-Commerce", href: "#services" },
      { label: "SEO & Marketing", href: "#services" },
    ],
  }

  return (
    <footer
      className={`relative pt-24 pb-12 overflow-hidden ${
        darkMode
          ? "bg-slate-900 border-t border-slate-800"
          : "bg-white border-t border-slate-100"
      }`}
    >
      {/* Decorative gradient overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Section - Spans 4 columns */}
          <div className="lg:col-span-4">
            <FooterBrand />
          </div>

          {/* Links Sections - Span 2 columns each */}
          <FooterLinkSection title="Company" links={footerLinks.company} />
          <FooterLinkSection title="Services" links={footerLinks.services} />

          {/* Newsletter / Contact - Spans 4 columns */}
          <FooterNewsletter />
        </div>

        {/* Bottom Bar */}
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer

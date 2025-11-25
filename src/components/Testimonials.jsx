import { useContext } from "react"
import { motion } from "framer-motion"
import ThemeContext from "../context/ThemeContext"
import TestimonialCard from "./testimonials/TestimonialCard"
import TestimonialTrustBadges from "./testimonials/TestimonialTrustBadges"

const Testimonials = () => {
  const { darkMode } = useContext(ThemeContext)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      content:
        "Webbly transformed our online presence completely. The team's attention to detail and commitment to quality exceeded our expectations. Our conversion rates have tripled since the launch!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthHub",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      content:
        "Working with Webbly was a game-changer for our business. They delivered a stunning website that not only looks amazing but performs exceptionally well. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, ShopEase",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      content:
        "The team's expertise in e-commerce development helped us create a seamless shopping experience. Our customers love the new site, and sales have increased by 150%!",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Owner, Café Bistro",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      content:
        "From concept to completion, Webbly was professional and creative. They understood our vision and brought it to life beautifully. Our online orders have never been better!",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "Creative Director, DesignCo",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      content:
        "Exceptional work! The design is modern, user-friendly, and perfectly captures our brand identity. The attention to detail and responsiveness was outstanding.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Founder, FitLife Gym",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      content:
        "Webbly created a website that truly represents our fitness brand. The booking system integration was seamless, and member signups have increased significantly!",
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section
      id="testimonials"
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
            What Our Clients Say
          </h2>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        {/* Trust Badges */}
        <TestimonialTrustBadges />
      </div>
    </section>
  )
}

export default Testimonials

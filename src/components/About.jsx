import { motion } from "framer-motion"
import { Users, Award, Clock } from "lucide-react"

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "200+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      number: "50+",
      label: "Projects Completed",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      number: "5+",
      label: "Years Experience",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Webbly?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With years of experience in web development, we bring your digital
              vision to life with cutting-edge technology and creative design.
              Our team is passionate about creating websites that not only look
              great but also perform exceptionally.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We believe in building lasting relationships with our clients,
              delivering projects on time and exceeding expectations every step
              of the way.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {stat.icon}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg h-80 flex items-center justify-center"
          >
            <div className="text-white text-center">
              <div className="text-6xl mb-4">💻</div>
              <p className="text-lg">Creative Web Solutions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

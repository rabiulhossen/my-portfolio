'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const technologies = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', icon: '📄', color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
      { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
      { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-400' },
      { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
      { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900' },
    ],
  },
  {
    category: 'Styling',
    items: [
      { name: 'Tailwind CSS', icon: '🌊', color: 'from-teal-400 to-cyan-500' },
      { name: 'Sass/SCSS', icon: '💅', color: 'from-pink-500 to-rose-500' },
      { name: 'Bootstrap', icon: '🅱️', color: 'from-purple-600 to-indigo-600' },
      { name: 'Framer Motion', icon: '🎬', color: 'from-fuchsia-500 to-purple-600' },
    ],
  },
  {
    category: 'Backend & Tools',
    items: [
      { name: 'Node.js', icon: '💚', color: 'from-green-500 to-emerald-600' },
      { name: 'Express.js', icon: '🚀', color: 'from-gray-600 to-gray-800' },
      { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-lime-500' },
      { name: 'Git', icon: '📚', color: 'from-orange-600 to-red-600' },
      { name: 'Firebase', icon: '🔥', color: 'from-yellow-500 to-orange-500' },
      { name: 'Figma', icon: '🎯', color: 'from-pink-500 to-violet-500' },
    ],
  },
]

export function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary-500 font-mono text-sm tracking-wider uppercase mb-4 block">
              Tech Stack
            </span>
            <h2 className="section-title">
              Tools & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              The technologies and tools I use to bring products to life.
            </p>
          </div>

          {/* Tech categories */}
          <div className="space-y-16">
            {technologies.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
                  {category.category}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.items.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.2 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative"
                    >
                      <div className="p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 text-center card-hover">
                        {/* Gradient background on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                        
                        <div className="relative z-10">
                          <span className="text-4xl mb-3 block">{tech.icon}</span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated skill bars alternative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 p-8 glass rounded-3xl"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Core Proficiencies
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { skill: 'React / Next.js', level: 90 },
                { skill: 'JavaScript / TypeScript', level: 85 },
                { skill: 'HTML5 / CSS3', level: 95 },
                { skill: 'Tailwind CSS', level: 90 },
                { skill: 'Node.js / Express', level: 75 },
                { skill: 'MongoDB / Firebase', level: 70 },
              ].map((item, index) => (
                <div key={item.skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.skill}
                    </span>
                    <span className="text-sm text-primary-500">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.level}%` } : {}}
                      transition={{ delay: 1 + index * 0.1, duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

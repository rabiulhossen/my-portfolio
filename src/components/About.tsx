'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Technologies', value: '15+' },
]

const timeline = [
  {
    icon: Briefcase,
    title: 'Frontend Developer',
    subtitle: 'Building Modern Web Apps',
    date: '2021 - Present',
    description: 'Developing responsive, performant web applications using React, Next.js, and modern frontend technologies.',
  },
  {
    icon: GraduationCap,
    title: 'Self-Taught Developer',
    subtitle: 'Continuous Learning Journey',
    date: '2020 - 2021',
    description: 'Mastered HTML, CSS, JavaScript, and React through dedicated self-study and building real projects.',
  },
]

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary-500/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary-500 font-mono text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="section-title">
              Crafting Digital <span className="gradient-text">Experiences</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Passionate about turning complex problems into simple, beautiful, and intuitive designs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image and stats */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                {/* Main image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/images/profile-pic (1).png"
                      alt="Rabiul Hossen"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -z-10 top-8 -right-8 w-full h-full border-2 border-primary-500/30 rounded-2xl" />
                <div className="absolute -z-10 top-16 -right-16 w-full h-full bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl" />
              </div>

              {/* Stats grid */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 glass rounded-2xl text-center card-hover"
                  >
                    <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  Hi, I&apos;m Rabiul Hossen
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I am a positive, enthusiastic, and competent Web Developer who has built up 
                  a diverse range of skills, qualities, and attributes that guarantee I will 
                  perform highly in this role.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I assure you I will be the suitable person for your next project to improve 
                  quality and maintain optimized performance. Currently, I am developing my 
                  skills as a MERN Stack Developer consistently to provide awesome services 
                  to my clients.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Above all, I am passionate about the coding field and technology. I believe 
                  in writing clean, maintainable code and creating user-centric designs that 
                  make a real impact.
                </p>
              </div>

              {/* Info badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <MapPin size={16} className="text-primary-500" />
                  <span className="text-sm">Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <Calendar size={16} className="text-primary-500" />
                  <span className="text-sm">Available for freelance</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  My Journey
                </h4>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative pl-8 border-l-2 border-primary-500/30"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-500 rounded-full" />
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon size={16} className="text-primary-500" />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </span>
                      </div>
                      <div className="text-sm text-primary-500 mb-1">{item.subtitle}</div>
                      <div className="text-xs text-gray-500 mb-2">{item.date}</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

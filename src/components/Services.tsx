'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Palette, Smartphone, Zap, Globe, Layers } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, performant web applications using React, Next.js, and modern JavaScript frameworks.',
    features: ['React & Next.js', 'TypeScript', 'Performance Optimization'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive user interfaces with a focus on user experience and accessibility.',
    features: ['Figma Design', 'Wireframing', 'Prototyping'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Ensuring your website looks and works perfectly on all devices, from mobile to desktop.',
    features: ['Mobile-First', 'Cross-Browser', 'Adaptive Layouts'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing web applications for speed, SEO, and overall performance to deliver the best user experience.',
    features: ['Core Web Vitals', 'SEO Best Practices', 'Lazy Loading'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Full-stack web development with modern tools and technologies for scalable, maintainable applications.',
    features: ['MERN Stack', 'RESTful APIs', 'Database Design'],
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Layers,
    title: 'API Integration',
    description: 'Seamless integration of third-party services, APIs, and backend systems into your frontend.',
    features: ['REST & GraphQL', 'Authentication', 'Payment Gateways'],
    color: 'from-indigo-500 to-violet-500',
  },
]

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-100/50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
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
              What I Do
            </span>
            <h2 className="section-title">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              I provide quality work for my clients. Here&apos;s what I can do for you.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="h-full p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-primary-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary-500/10">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                      <service.icon size={28} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Have a project in mind? Let&apos;s work together!
            </p>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

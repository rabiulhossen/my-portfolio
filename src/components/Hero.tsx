'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import Image from 'next/image'

const roles = [
  'Frontend Developer',
  'React Specialist',
  'UI/UX Enthusiast',
  'Web Developer',
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/rabiulhossen', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/rabiulhossen', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/RabiulH46448368', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/rabiulhossen_01', label: 'Instagram' },
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.05]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4"
            >
              <span className="text-gray-900 dark:text-white">Hey, I&apos;m</span>
              <br />
              <span className="gradient-text">Rabiul Hossen</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-6 h-10"
            >
              <span className="font-mono">
                {displayText}
                <span className="animate-pulse text-primary-500">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Passionate about crafting beautiful, performant, and accessible web experiences. 
              I transform ideas into elegant digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] border-2 border-dashed border-primary-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 w-[288px] h-[288px] sm:w-[336px] sm:h-[336px] border-2 border-dashed border-accent-500/30 rounded-full"
              />
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 sm:top-0 sm:right-0 z-10 px-4 py-2 glass rounded-full shadow-lg"
              >
                <span className="text-sm font-medium">⚛️ React</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-10 -left-8 sm:-left-4 z-10 px-4 py-2 glass rounded-full shadow-lg"
              >
                <span className="text-sm font-medium">💻 Next.js</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 -right-8 sm:-right-4 z-10 px-4 py-2 glass rounded-full shadow-lg"
              >
                <span className="text-sm font-medium">🎨 Tailwind</span>
              </motion.div>

              {/* Profile image container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20" />
                <Image
                  src="/images/profile-pic (1).png"
                  alt="Rabiul Hossen"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

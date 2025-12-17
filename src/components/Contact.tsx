'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram, CheckCircle2 } from 'lucide-react'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rabiulhossen@example.com',
    href: 'mailto:rabiulhossen@example.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangladesh',
    href: '#',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 XXXX XXXXXX',
    href: 'tel:+880XXXXXXXXXX',
  },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/rabiulhossen', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/rabiulhossen', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/RabiulH46448368', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/rabiulhossen_01', label: 'Instagram' },
]

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS integration - replace with your actual service, template, and public key
      await emailjs.send(
        'service_id', // Replace with your EmailJS service ID
        'template_fcgfy2c', // Replace with your EmailJS template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '1NZeW9SAwUpK04-h_' // Replace with your EmailJS public key
      )

      setIsSubmitted(true)
      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      console.error('EmailJS error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-100/50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
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
              Contact
            </span>
            <h2 className="section-title">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I&apos;m currently available for freelance work and full-time positions. 
                  If you have a project that you want to get started, think you need my help 
                  with something, or just want to say hi, feel free to reach out.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500/50 transition-all group"
                  >
                    <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500 transition-colors">
                      <item.icon className="w-5 h-5 text-primary-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{item.label}</div>
                      <div className="font-medium text-gray-900 dark:text-white">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl"
              >
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/30'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Apple Nationwide Distributor',
    description: 'A full-stack MERN application for managing warehouse inventory. Features include user authentication, inventory tracking, order management, and real-time updates.',
    image: '/images/project1.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    liveUrl: 'https://meek-treacle-5beccb.netlify.app/',
    githubUrl: 'https://github.com/rabiulhossen',
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 2,
    title: 'Computer Parts Manufacturer',
    description: 'An e-commerce platform for computer parts with product catalog, shopping cart, payment integration, and admin dashboard for managing products and orders.',
    image: '/images/project2.png',
    tags: ['React', 'Firebase', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://apple-nationwide-distributor.web.app/',
    githubUrl: 'https://github.com/rabiulhossen',
    category: 'E-Commerce',
    featured: true,
  },
  {
    id: 3,
    title: 'Exoplanet Photography',
    description: 'A beautiful photography portfolio website showcasing astrophotography. Features image galleries, lazy loading, and smooth animations.',
    image: '/images/project3.png',
    tags: ['React', 'CSS3', 'Framer Motion', 'Firebase'],
    liveUrl: 'https://exoplanet-photography.web.app/',
    githubUrl: 'https://github.com/rabiulhossen',
    category: 'Portfolio',
    featured: true,
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks and projects with drag-and-drop functionality, reminders, and team collaboration features.',
    image: '/images/p4.png',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/rabiulhossen',
    category: 'Web App',
    featured: false,
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    description: 'A property listing website with advanced search filters, map integration, virtual tours, and user authentication.',
    image: '/images/p5.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/rabiulhossen',
    category: 'Full Stack',
    featured: false,
  },
  {
    id: 6,
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
    image: '/images/p6.png',
    tags: ['React', 'Chart.js', 'REST API', 'Material UI'],
    liveUrl: '#',
    githubUrl: 'https://github.com/rabiulhossen',
    category: 'Dashboard',
    featured: false,
  },
]

const categories = ['All', 'Full Stack', 'E-Commerce', 'Portfolio', 'Web App', 'Dashboard']

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const featuredProjects = projects.filter(p => p.featured)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
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
              Portfolio
            </span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              A selection of my recent work. Each project is a unique piece of development.
            </p>
          </div>

          {/* Featured Projects Slider */}
          <div className="relative mb-20">
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-8 items-center p-8 bg-white dark:bg-gray-800 rounded-3xl"
                >
                  {/* Image */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden group">
                    <Image
                      src={featuredProjects[currentSlide].image}
                      alt={featuredProjects[currentSlide].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={featuredProjects[currentSlide].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 bg-white/90 text-gray-900 rounded-lg font-medium text-center hover:bg-white transition-colors flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={featuredProjects[currentSlide].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 bg-gray-900/90 text-white rounded-lg font-medium text-center hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        Source
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-500 text-sm font-medium rounded-full">
                      {featuredProjects[currentSlide].category}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                      {featuredProjects[currentSlide].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {featuredProjects[currentSlide].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featuredProjects[currentSlide].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={featuredProjects[currentSlide].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <ExternalLink size={16} />
                        View Project
                      </a>
                      <a
                        href={featuredProjects[currentSlide].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-primary-500 w-8'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <motion.div 
            layout 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary-500/10">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Quick actions */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2 bg-white/90 text-gray-900 rounded-lg text-sm font-medium text-center hover:bg-white transition-colors flex items-center justify-center gap-1"
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2 bg-gray-900/90 text-white rounded-lg text-sm font-medium text-center hover:bg-gray-900 transition-colors flex items-center justify-center gap-1"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-3 group-hover:text-primary-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* More projects link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/rabiulhossen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={18} />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-white dark:bg-gray-800 rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-video">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-500 text-sm font-medium rounded-full mb-4">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink size={16} />
                    View Live
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

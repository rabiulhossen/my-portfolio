'use client'

import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { TechStack } from '@/components/TechStack'
import { Projects } from '@/components/Projects'
import { Services } from '@/components/Services'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Projects />
      <Contact />
    </>
  )
}

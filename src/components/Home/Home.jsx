import React from 'react'
import Intro from '../Intro/Intro'
import Newsletter from '../Newsletter/Newsletter'
import Project from '../Projects/Project'
import Services from '../Services/Services'
import Works from '../Works/Works'

export default function Home() {
  return (
    <div>
<Intro />
<Services />
<Works />
<Project />
<Newsletter />
    </div>
  )
}

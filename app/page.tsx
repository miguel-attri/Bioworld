'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Challenge from '@/components/Challenge'
import Solution from '@/components/Solution'
import Deliverables from '@/components/Deliverables'
import Scope from '@/components/Scope'
import Timeline from '@/components/Timeline'
import Pricing from '@/components/Pricing'
import Future from '@/components/Future'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('')

  return (
    <main className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Challenge />
      <Solution />
      <Deliverables />
      <Scope />
      <Timeline />
      <Pricing />
      <Future />
      <Footer />
    </main>
  )
}


'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect which section is in view
      const sections = ['challenge', 'solution', 'deliverables', 'scope', 'timeline', 'pricing', 'future']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(section)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/Attri_Logo.svg"
              alt="Attri Logo"
              width={60}
              height={60}
              className="h-12 w-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
              priority
            />
            <div className="h-8 w-px bg-gray-300"></div>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Prepared by</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Prepared for</span>
            <div className="h-8 w-px bg-gray-300"></div>
            <Image
              src="/assets/Bioworld_Logo.svg"
              alt="Bioworld Logo"
              width={140}
              height={45}
              className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              priority
            />
          </div>
        </div>
        <nav className="border-t border-gray-100">
          <div className="hidden md:flex items-center justify-center gap-1 py-3">
            {['Challenge', 'Solution', 'Deliverables', 'Scope', 'Timeline', 'Pricing', 'Future'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.toLowerCase()
                    ? 'text-black'
                    : 'text-charcoal hover:text-black'
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
                )}
              </button>
            ))}
          </div>
          <div className="md:hidden flex items-center justify-between py-3">
            <button className="text-charcoal hover:text-black transition-colors" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

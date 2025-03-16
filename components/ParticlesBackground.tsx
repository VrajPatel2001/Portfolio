'use client'

import { useEffect, useRef } from 'react'
import { particlesConfig } from '../app/particles-config'

// Add type definition for the window object
declare global {
  interface Window {
    particlesJS: ((id: string, config: typeof particlesConfig) => void) | undefined
  }
}

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    const initParticles = () => {
      if (!initialized.current && typeof window !== 'undefined' && window.particlesJS && containerRef.current) {
        window.particlesJS('particles-js', particlesConfig)
        initialized.current = true
      }
    }

    const interval = setInterval(() => {
      if (window.particlesJS) {
        initParticles()
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      id="particles-js"
      ref={containerRef}
      className="fixed inset-0 -z-20"
      style={{ backgroundColor: 'transparent' }}
    />
  )
}

export default ParticlesBackground

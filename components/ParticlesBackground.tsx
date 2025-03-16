'use client'

import { useEffect } from 'react'
import { particlesConfig } from '../app/particles-config'

const ParticlesBackground = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).particlesJS) {
      ;(window as any).particlesJS('particles-js', particlesConfig)
    }
  }, [])

  return (
    <div
      id="particles-js"
      className="fixed inset-0 -z-20"
      style={{ backgroundColor: 'transparent' }}
    />
  )
}

export default ParticlesBackground

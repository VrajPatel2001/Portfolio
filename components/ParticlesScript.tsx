'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function ParticlesScript() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/particlesjs@2.2.3/dist/particles.min.js"
        strategy="beforeInteractive"
        onLoad={() => setIsLoaded(true)}
        id="particles-js-script"
      />
    </>
  )
}

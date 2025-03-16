'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function ParticlesScript() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Script
      src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
      strategy="afterInteractive"
      onLoad={() => setIsLoaded(true)}
      id="particles-js-script"
    />
  )
}

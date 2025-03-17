'use client'

import { useEffect, useState } from 'react'

export default function AnimatedName() {
  const [text, setText] = useState('')
  const fullName = "Vraj Patel"
  
  useEffect(() => {
    setText('') // Reset text on component mount
    
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullName.length) {
        setText(fullName.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)
    
    return () => clearInterval(typingInterval)
  }, [])
  
  return (
    <span 
      style={{
        fontFamily: "'Dancing Script', cursive",
        fontWeight: 700,
        fontSize: '1.2em'
      }}
      className="text-blue-500 dark:text-blue-400"
    >
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
} 
'use client'

import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent pointer-events-none">
      <div
        className="h-full transition-all duration-75 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, hsl(262 83% 58%), hsl(262 83% 68%))',
        }}
      />
    </div>
  )
}

export default ScrollProgress

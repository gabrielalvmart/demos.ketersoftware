'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Navbar Background - always visible but subtle */}
        <motion.div
          className="absolute inset-0 backdrop-blur-sm"
          initial={{ backgroundColor: 'rgba(10, 10, 15, 0.5)' }}
          animate={{
            backgroundColor: scrolled || isHovered 
              ? 'rgba(10, 10, 15, 0.85)' 
              : 'rgba(10, 10, 15, 0.5)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {/* Animated Logo Icon */}
            <motion.div
              className="relative w-8 h-8 sm:w-10 sm:h-10"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 120,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* Gradient overlay for the logo */}
              <motion.div 
                className="absolute inset-0 z-10 mix-blend-screen opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                  WebkitMaskImage: 'url(/KS_logo_1024_nb.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: 'url(/KS_logo_1024_nb.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
              
              {/* Actual logo image */}
              <Image
                src="/KS_logo_1024_nb.png"
                alt="Keter Software Logo"
                width={40}
                height={40}
                className="relative z-0 opacity-10 w-full h-full"
                priority
              />
              
              {/* Subtle glow on hover */}
              <motion.div
                className="absolute inset-0 blur-md -z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
                  opacity: 0,
                }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            {/* Text */}
            <span className="text-sm sm:text-base lg:text-lg font-light tracking-wider text-dark-text">
              KETER SOFTWARE
            </span>
          </motion.a>

          {/* Menu Items */}
          <div className="hidden md:flex gap-8 lg:gap-12">
            <motion.a
              href="https://ketersoftware.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-sm font-light tracking-wide text-dark-text/80 hover:text-dark-text transition-colors group"
            >
              Principal
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-dark-accent to-purple-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          </div>
        </div>

        {/* Bottom separator line */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent"
          animate={{
            opacity: scrolled || isHovered ? 1 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.nav>
  )
}

export default Navbar

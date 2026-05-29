"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, Github, Code2, Award, Trophy, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo, animatedRoles, stats } from "@/data/portfolio-data"
import Image from "next/image"


function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current * 100) / 100)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={countRef}>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(2)}
      {suffix}
    </span>
  )
}

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % animatedRoles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const statIcons = [Code2, Briefcase, Award, Trophy]

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Open to Opportunities
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Hi, I&apos;m{" "}
                <span className="text-primary">{personalInfo.name}</span>
              </h1>
              
              {/* Animated Role Text */}
              <div className="h-10 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentRole}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-xl sm:text-2xl font-semibold text-primary"
                  >
                    {animatedRoles[currentRole]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
                variants={itemVariants}
                className="relative z-30 flex flex-wrap gap-3"
              >
                <Button
                  size="lg"
                  className="gap-2 shadow-lg shadow-primary/20"
                  onClick={() => {
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  View Projects
                  <ArrowDown className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  Contact Me
                </Button>
              </motion.div>
          </div>

          {/* Right Content - Profile Image & Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 p-1 shadow-2xl shadow-primary/30">
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                      <Image
                        src="/krish.jpg"
                        alt="Krish Munjapara"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = statIcons[index]
                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl sm:text-3xl font-bold text-foreground">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

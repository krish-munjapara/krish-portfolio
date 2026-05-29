"use client"

import { motion } from "framer-motion"
import { Code, Cpu, Database, LineChart, Lightbulb } from "lucide-react"
import { personalInfo, aboutInterests } from "@/data/portfolio-data"

const interestIcons = [Code, Cpu, Lightbulb, LineChart, Database]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Final-year Computer Science Engineering student at Parul Institute of Engineering & Technology, 
                specializing in Big Data Analytics. Passionate about building AI-powered applications, 
                data-driven dashboards, and scalable software solutions that transform complex data into 
                actionable insights.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">What I Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Build full-stack web applications using React, Node.js, and modern frameworks
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Develop AI-powered solutions for real-world problems using Python and TensorFlow
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Create interactive data dashboards and analytics solutions with Power BI
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right - Key Interests Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Key Interests</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutInterests.map((interest, index) => {
                  const Icon = interestIcons[index]
                  return (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{interest}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <p className="text-2xl font-bold text-primary">4th</p>
                <p className="text-xs text-muted-foreground">Year Student</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <p className="text-2xl font-bold text-primary">7.16</p>
                <p className="text-xs text-muted-foreground">CGPA</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <p className="text-2xl font-bold text-primary">2027</p>
                <p className="text-xs text-muted-foreground">Graduation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Trophy, Code2, Brain } from "lucide-react"
import { experiences } from "@/data/portfolio-data"

const iconMap: Record<string, typeof Trophy> = {
  achievement: Trophy,
  event: Code2,
  project: Brain,
}

export function Achievements() {
  return (
    <section id="achievements" className="py-20 lg:py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highlights of my accomplishments and contributions
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => {
            const Icon = iconMap[experience.type] || Trophy
            return (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-4 rounded-2xl bg-primary/10 text-primary inline-block mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {experience.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {experience.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

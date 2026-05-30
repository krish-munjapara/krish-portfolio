"use client"

import { motion } from "framer-motion"
import { Trophy, Code2, Brain, ExternalLink } from "lucide-react"
import { achievements } from "@/data/portfolio-data"

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
          {achievements.map((achievement, index) => {
            const Icon =
              iconMap[achievement.type as keyof typeof iconMap] || Trophy

            return (
              <a
                key={achievement.title}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary inline-block mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>
                      {achievement.link?.endsWith(".pdf")
                        ? "View Certificate"
                        : "Open Link"}
                    </span>

                    <ExternalLink className="h-4 w-4" />
                  </div>
                </motion.div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import { Award, Database, BarChart3, Brain, ExternalLink } from "lucide-react"
import { certifications } from "@/data/portfolio-data"

const iconMap = {
  award: Award,
  database: Database,
  chart: BarChart3,
  brain: Brain,
}

export function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating my expertise in data science and analytics
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon as keyof typeof iconMap] || Award

            return (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-xl transition-all duration-300 text-center cursor-pointer"
              >
                <div className="p-4 rounded-2xl bg-primary/10 text-primary inline-block mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="font-semibold text-foreground mb-2 text-sm leading-tight">
                  {cert.title}
                </h3>

                <p className="text-xs text-muted-foreground mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Certificate</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
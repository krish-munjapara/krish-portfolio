"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { education } from "@/data/portfolio-data"

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-4 lg:gap-8 ${
                  index % 2 === 0 ? "" : "lg:text-right"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10 shadow-md" />

                {/* Content */}
                <div
                  className={`ml-12 lg:ml-0 ${
                    index % 2 === 0
                      ? "lg:pr-12"
                      : "lg:col-start-2 lg:pl-12 lg:text-left"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        {edu.specialization && (
                          <p className="text-primary font-medium text-sm">
                            ({edu.specialization})
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <p className="text-foreground font-medium">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {edu.duration}
                        </span>
                      </div>
                      <div className="pt-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty grid cell for layout */}
                {index % 2 === 0 && <div className="hidden lg:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail } from "lucide-react"
import { personalInfo, navLinks } from "@/data/portfolio-data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              {personalInfo.name}
              <span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {personalInfo.title}
              <br />
            </p>
            <p className="text-muted-foreground text-sm italic">
              &quot;Building software solutions with data-driven thinking.&quot;
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              {personalInfo.location}
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              Made with <Heart className="h-4 w-4 text-primary fill-primary" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

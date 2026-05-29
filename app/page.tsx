import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Education,
  Certifications,
  Achievements,
  Contact,
  Footer,
} from "@/components/portfolio"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}

import { useState, useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Mail, Gamepad2, Globe, Linkedin, Facebook, Twitter, Code  } from "lucide-react"
import ProjectsSection from "@/components/projectsection.jsx"
import CertificatesSection from "@/components/CertificatesSection.jsx"

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }, [dark])

  return (
    <div
      className={
        "relative min-h-screen overflow-hidden transition-colors duration-700 " +
        (dark
          ? "bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 text-white"
          : "bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-900")
      }
    >
      {/* Animated Glow Background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "rgb(168 85 247 / 0.6)" }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -20, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "rgb(59 130 246 / 0.5)" }}
      />

      {/*  Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="absolute right-6 top-6 z-20 rounded-full bg-white/20 px-4 py-2 backdrop-blur border border-white/30 text-sm"
      >
        {dark ? "☀ Light" : "🌙 Dark"}
      </button>

      {/* HERO */}
      <section className="relative z-10 container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Thanuphat Buakamsri
          </h1>
          <p className="text-xl opacity-80 mb-6">
            Game Developer • Unity • .NET
          </p>
          {/* <p className="mb-8 leading-relaxed max-w-xl">
            นักพัฒนาเกมเพื่อการเรียนรู้ สนใจเกมฝึกพิมพ์และระบบ Interactive
            มีประสบการณ์ Unity และ Web Development
          </p> */}
          <div className="flex gap-4">
            {/* <Button className="rounded-2xl">Download CV</Button> */}
            {/* <Button variant="outline" className="rounded-2xl">Contact</Button> */}
            <Button className="rounded-2xl" onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}>Contact</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/public/img/profile.jpg"
            alt="Profile"
            className="w-56 h-56 rounded-full object-cover shadow-2xl ring-4 ring-white/30"
          />
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-transform hover:-translate-y-2 hover:shadow-xl">
            <CardContent className="p-6">
              <Gamepad2 className="mb-4" />
              <h3 className="font-semibold mb-2">Game Development</h3>
              <p className="text-sm opacity-80">
                Unity, C#
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-transform hover:-translate-y-2 hover:shadow-xl">
            <CardContent className="p-6">
              <Globe className="mb-4" />
              <h3 className="font-semibold mb-2">Web Development</h3>
              <p className="text-sm opacity-80">
                React, Tailwind, .NET, ASP.NET Core, SQL, PHP, MySQL
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-transform hover:-translate-y-2 hover:shadow-xl">
            <CardContent className="p-6">
              <Code className="mb-4"/>
              <h3 className="font-semibold mb-2">Programming</h3>
              <p className="text-sm opacity-80">
                C, C++, C#, Python, JavaScript
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/*Edu*/}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">Education</h2>

        <div className="space-y-6">
          {/* Education Card */}
          <div
            className="relative rounded-2xl border p-6 bg-background/80 backdrop-blur transition-transform hover:-translate-y-2 hover:shadow-xl transition"
          >
            {/* Glow */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/10 blur-2xl opacity-0 hover:opacity-100 transition" />

            <h3 className="text-xl font-semibold">
              FACULTY OF INDUSTRIAL TECHNOLOGY AND MANAGEMENT
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
              King Mongkut's University of Technology North Bangkok  • 2024 – 2026
            </p>

            <p className="mt-4 text-sm leading-relaxed">
              Studied software development, web programming, and interactive systems,
              with a focus on building practical applications and user-centered
              digital experiences.
            </p>

            <ul className="mt-4 list-disc list-inside text-sm space-y-1">
              <li>
                Graduation Project: <span className="font-medium">
                  Kana Taisen – Typing Battle Game
                </span>
              </li>
              <li>Game Development with Unity &amp; C#</li>
              <li>Interactive UI/UX Design for Educational Games</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & CERTIFICATES */}
      <CertificatesSection />

      {/* PROJECTS */}
      <ProjectsSection />

      {/* CONTACT */}
      <section id="contact" className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <div className="flex flex-wrap gap-4">
          {/* Email */}
          <a href="mailto:thanuphat.dev@gmail.com">
            <Button
              variant="outline"
              className="
          relative rounded-2xl flex gap-2 overflow-hidden
          border-primary/40
          hover:text-primary-foreground
          transition
          before:absolute before:inset-0
          before:bg-primary/20
          before:opacity-0 hover:before:opacity-100
          before:blur-xl
        "
            >
              <Mail size={18} />
              Email
            </Button>
          </a>

          {/* GitHub */}
          <a href="https://github.com/AKirai0" target="_blank">
            <Button
              variant="outline"
              className="
          relative rounded-2xl flex gap-2 overflow-hidden
          border-primary/40
          hover:text-primary-foreground
          transition
          before:absolute before:inset-0
          before:bg-primary/20
          before:opacity-0 hover:before:opacity-100
          before:blur-xl
        "
            >
              <Github size={18} />
              GitHub
            </Button>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/akirai-545aa0344" target="_blank">
            <Button
              variant="outline"
              className="
          relative rounded-2xl flex gap-2 overflow-hidden
          border-primary/40
          hover:text-primary-foreground
          transition
          before:absolute before:inset-0
          before:bg-primary/20
          before:opacity-0 hover:before:opacity-100
          before:blur-xl
        "
            >
              <Linkedin size={18} />
              LinkedIn
            </Button>
          </a>

          {/* Facebook */}
          <a href="https://facebook.com/akirai.0.e.x.e" target="_blank">
            <Button
              variant="outline"
              className="
          relative rounded-2xl flex gap-2 overflow-hidden
          border-primary/40
          hover:text-primary-foreground
          transition
          before:absolute before:inset-0
          before:bg-primary/20
          before:opacity-0 hover:before:opacity-100
          before:blur-xl
        "
            >
              <Facebook size={18} />
              Facebook
            </Button>
          </a>

          {/* X (Twitter) */}
          <a href="https://x.com/Akirai0" target="_blank">
            <Button
              variant="outline"
              className=" relative rounded-2xl flex gap-2 overflow-hidden border-primary/40
          hover:text-primary-foreground
          transition
          before:absolute before:inset-0
          before:bg-primary/20
          before:opacity-0 hover:before:opacity-100
          before:blur-xl
        "
            >
              <Twitter size={18} />
              X
            </Button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-8 text-center text-sm opacity-70">
        © 2025 Thanuphat Buakamsri
      </footer>
    </div>
  )
}

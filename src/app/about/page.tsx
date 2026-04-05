"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Coffee,
  BookOpen,
  Music,
  Mountain,
  ArrowRight,
  Send,
  GitFork,
  Link2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "REST APIs"] },
  { category: "Design & Tools", items: ["Figma", "Git", "Docker", "Linux", "CI/CD", "Storybook"] },
];

const timeline = [
  {
    year: "2024 — Present",
    icon: <Briefcase size={16} />,
    title: "Senior Frontend Developer",
    company: "Leafwork Studio",
    desc: "Leading the design system team. Building accessible, performant component libraries used across 4 product lines. Mentoring junior developers and driving frontend architecture decisions.",
  },
  {
    year: "2023 — 2024",
    icon: <Briefcase size={16} />,
    title: "Full-Stack Developer",
    company: "Freelance",
    desc: "Delivered 12+ client projects ranging from SaaS dashboards to e-commerce platforms. Specialized in Next.js, TypeScript, and Tailwind CSS with a focus on performance and SEO.",
  },
  {
    year: "2022 — 2023",
    icon: <Briefcase size={16} />,
    title: "Frontend Developer",
    company: "Oasis Digital",
    desc: "Built interactive data visualizations and customer-facing dashboards. Reduced page load times by 60% through code splitting, lazy loading, and image optimization.",
  },
  {
    year: "2021 — 2022",
    icon: <GraduationCap size={16} />,
    title: "Self-Taught Journey",
    company: "The Internet",
    desc: "Completed freeCodeCamp, The Odin Project, and countless YouTube tutorials. Built 20+ practice projects. Fell in love with the intersection of code and design.",
  },
];

const interests = [
  { icon: <Mountain size={18} />, label: "Hiking", desc: "Atlas Mountains are my weekend escape" },
  { icon: <Coffee size={18} />, label: "Coffee", desc: "V60 pour-over, light roast, always" },
  { icon: <BookOpen size={18} />, label: "Reading", desc: "Sci-fi and design thinking books" },
  { icon: <Music size={18} />, label: "Music", desc: "Lo-fi beats while I code" },
];

const values = [
  { title: "Craft over speed", desc: "I believe good work takes care. I'd rather ship something polished a day late than push something half-baked." },
  { title: "Accessibility first", desc: "The web is for everyone. Every component I build is keyboard-navigable and screen-reader friendly." },
  { title: "Always learning", desc: "Technology moves fast. I dedicate time every week to exploring new tools, reading RFCs, and building experiments." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-40" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Photo */}
          <motion.div variants={fade} className="shrink-0">
            <div className="relative w-64 h-80 sm:w-72 sm:h-[22rem]">
              <div className="photo-frame overflow-hidden w-full h-full">
                <Image
                  src="/portfolio/images/about-photo.svg"
                  alt="Lina Laaraich"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Location badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl card-shadow px-4 py-2.5 flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span className="text-sm font-medium">Morocco</span>
              </div>
              <div className="absolute -inset-3 rounded-[1.5rem] border-2 border-dashed border-emerald-200/50 -z-10" />
            </div>
          </motion.div>

          {/* Bio */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p variants={fade} className="text-sm font-medium text-primary mb-2">About me</motion.p>
            <motion.h1 variants={fade} className="text-4xl sm:text-5xl font-bold mb-6">
              I&apos;m Lina, a developer<br />who loves great design
            </motion.h1>
            <motion.p variants={fade} className="text-muted-foreground leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
              I started my coding journey in 2021 with a simple curiosity: how do websites work?
              That curiosity became a passion, and now I spend my days building applications that
              are as beautiful as they are functional.
            </motion.p>
            <motion.p variants={fade} className="text-muted-foreground leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
              I specialize in React and Next.js, with a deep appreciation for design systems,
              accessibility, and performance. I think the best code is code that makes people
              feel something — a smooth animation, an intuitive layout, a page that just <em>works</em>.
            </motion.p>
            <motion.p variants={fade} className="text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Outside of work, I&apos;m an avid hiker, specialty coffee enthusiast, and
              science fiction bookworm. I live in Morocco and draw constant inspiration from
              its colors, patterns, and hospitality.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-20 px-6 bg-muted/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={fade} className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-1">How I work</p>
            <h2 className="text-3xl sm:text-4xl font-bold">My Values</h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fade}
                className="card-lift card-shadow rounded-2xl bg-white p-6 sm:p-8"
              >
                <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-lg font-bold text-primary mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={fade} className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-1">Toolbox</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {skills.map((group) => (
              <motion.div
                key={group.category}
                variants={fade}
                className="card-lift card-shadow rounded-2xl bg-white p-6"
              >
                <h3 className="font-semibold text-primary mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-sm py-1 px-3">
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section className="py-20 px-6 bg-muted/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-3xl"
        >
          <motion.div variants={fade} className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-1">Experience</p>
            <h2 className="text-3xl sm:text-4xl font-bold">My Journey</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div key={i} variants={fade} className="flex gap-6">
                  <div className="relative shrink-0 z-10">
                    <div className={cn(
                      "h-10 w-10 rounded-full flex items-center justify-center",
                      i === 0
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "bg-white text-muted-foreground card-shadow"
                    )}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="card-shadow rounded-2xl bg-white p-5 flex-1">
                    <p className="text-xs font-medium text-primary mb-1">{item.year}</p>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ INTERESTS ═══ */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={fade} className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-1">Off the clock</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Beyond Code</h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((item) => (
              <motion.div
                key={item.label}
                variants={fade}
                className="card-lift card-shadow rounded-2xl bg-white p-5 text-center"
              >
                <div className="h-11 w-11 rounded-xl bg-emerald-50 flex items-center justify-center text-primary mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="py-10 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/portfolio/images/gallery-1.svg", alt: "Mountain hike" },
              { src: "/portfolio/images/gallery-2.svg", alt: "Coffee and code" },
              { src: "/portfolio/images/gallery-3.svg", alt: "Workspace setup" },
              { src: "/portfolio/images/gallery-4.svg", alt: "Moroccan patterns" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fade}
                className="relative aspect-square rounded-2xl overflow-hidden card-shadow card-lift"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2 variants={fade} className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s work together
          </motion.h2>
          <motion.p variants={fade} className="text-muted-foreground mb-8 text-lg">
            Whether you have a project in mind or just want to chat about code and design —
            my inbox is always open.
          </motion.p>
          <motion.div variants={fade} className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@example.com"
              className={cn(buttonVariants(), "rounded-full px-6 h-11 gap-2")}
            >
              <Send size={16} />
              hello@example.com
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-5 h-11 gap-2")}
            >
              <GitFork size={16} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-5 h-11 gap-2")}
            >
              <Link2 size={16} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

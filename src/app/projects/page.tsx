"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const projects = [
  {
    title: "Verdant Commerce",
    desc: "A full-stack e-commerce platform with real-time inventory management, Stripe checkout, multi-currency support, wishlists, and intelligent product recommendations. The storefront features a magazine-style layout with editorial photography and smooth page transitions.",
    tags: ["Next.js", "Stripe", "Tailwind", "PostgreSQL", "Prisma"],
    image: "/portfolio/images/project-1.svg",
    link: "#",
    year: "2024",
  },
  {
    title: "Canopy Chat",
    desc: "An AI-powered chat application with real-time streaming, conversation branching, model comparison, and rich markdown rendering. Features team workspaces, shared prompt libraries, and an analytics dashboard tracking usage and costs.",
    tags: ["React", "TypeScript", "WebSocket", "OpenAI", "Redis"],
    image: "/portfolio/images/project-2.svg",
    link: "#",
    year: "2024",
  },
  {
    title: "Grove Tasks",
    desc: "A collaborative project management tool featuring kanban boards with drag-and-drop, real-time sync across devices, time tracking with Pomodoro integration, automated reporting, and a calendar view with deadline heatmaps.",
    tags: ["Next.js", "tRPC", "Prisma", "Tailwind", "WebSocket"],
    image: "/portfolio/images/project-3.svg",
    link: "#",
    year: "2023",
  },
  {
    title: "Fern UI Kit",
    desc: "An open-source component library built on Tailwind CSS and Radix primitives. Includes 40+ accessible components with dark mode, responsive design, comprehensive Storybook documentation, and full TypeScript support. Used by 200+ developers.",
    tags: ["React", "TypeScript", "Tailwind", "Storybook", "NPM"],
    image: "/portfolio/images/project-4.svg",
    link: "#",
    year: "2023",
  },
  {
    title: "Moss Analytics",
    desc: "A privacy-first, cookie-free analytics dashboard for web applications. Features real-time visitor tracking, custom event pipelines, funnel analysis, and beautiful data visualizations. Self-hostable with a single Docker command.",
    tags: ["Next.js", "ClickHouse", "D3.js", "Docker", "Go"],
    image: "/portfolio/images/project-5.svg",
    link: "#",
    year: "2023",
  },
  {
    title: "Willow Blog",
    desc: "A minimalist blogging platform with MDX support, syntax highlighting with 20+ themes, RSS/Atom feeds, automatic OG image generation, reading time estimates, and a custom headless CMS. Scores 100 on Lighthouse.",
    tags: ["Next.js", "MDX", "Tailwind", "Vercel", "Contentlayer"],
    image: "/portfolio/images/project-6.svg",
    link: "#",
    year: "2022",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-40" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative mx-auto max-w-6xl"
        >
          <motion.p variants={fade} className="text-sm font-medium text-primary mb-2">
            Portfolio
          </motion.p>
          <motion.h1 variants={fade} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Things I&apos;ve Built
          </motion.h1>
          <motion.p variants={fade} className="text-lg text-muted-foreground max-w-xl">
            A mix of client work, side projects, and open-source contributions.
            Each one taught me something new.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects — alternating layout */}
      <section className="px-6 pb-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="mx-auto max-w-6xl space-y-16"
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              variants={fade}
              className={`card-lift group flex flex-col gap-8 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center`}
            >
              {/* Image */}
              <div className="relative w-full lg:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden card-shadow">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-foreground backdrop-blur text-xs hover:bg-white/90">
                    {p.year}
                  </Badge>
                </div>
                <a
                  href={p.link}
                  className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur text-foreground hover:bg-white transition-all hover:scale-110"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Content */}
              <div className="flex-1 lg:py-4">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

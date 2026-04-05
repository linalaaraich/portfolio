"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LeafDecoration } from "@/components/blobs";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const projects = [
  {
    title: "Verdant Commerce",
    description:
      "A full-stack e-commerce platform with real-time inventory, Stripe checkout, and a beautifully crafted storefront. Supports multi-currency, wishlists, and intelligent product recommendations.",
    tags: ["Next.js", "Stripe", "Tailwind", "PostgreSQL", "Prisma"],
    image: "/portfolio/images/project-1.svg",
    color: "from-emerald-500/30 to-teal-600/20",
    link: "#",
  },
  {
    title: "Canopy Chat",
    description:
      "An AI-powered chat application with real-time streaming, conversation branching, model comparison, and rich markdown rendering. Built for power users and teams.",
    tags: ["React", "TypeScript", "WebSocket", "OpenAI", "Redis"],
    image: "/portfolio/images/project-2.svg",
    color: "from-green-400/30 to-emerald-500/20",
    link: "#",
  },
  {
    title: "Grove Tasks",
    description:
      "A collaborative project management tool featuring kanban boards, drag-and-drop, real-time sync, time tracking, and team analytics dashboards.",
    tags: ["Next.js", "tRPC", "Prisma", "Tailwind", "WebSocket"],
    image: "/portfolio/images/project-3.svg",
    color: "from-teal-400/30 to-cyan-500/20",
    link: "#",
  },
  {
    title: "Fern UI Kit",
    description:
      "An open-source component library built on top of Tailwind CSS and Radix primitives. 40+ accessible components with dark mode, responsive design, and full TypeScript support.",
    tags: ["React", "TypeScript", "Tailwind", "Storybook", "NPM"],
    image: "/portfolio/images/project-4.svg",
    color: "from-lime-400/20 to-green-500/20",
    link: "#",
  },
  {
    title: "Moss Analytics",
    description:
      "A privacy-first analytics dashboard for web apps. Cookie-free tracking, real-time visitor insights, custom events, and beautiful data visualizations.",
    tags: ["Next.js", "ClickHouse", "D3.js", "Docker", "Go"],
    image: "/portfolio/images/project-5.svg",
    color: "from-emerald-600/20 to-green-400/20",
    link: "#",
  },
  {
    title: "Willow Blog",
    description:
      "A minimalist blogging platform with MDX support, syntax highlighting, RSS feeds, SEO optimization, and a custom CMS for content management.",
    tags: ["Next.js", "MDX", "Tailwind", "Vercel", "Contentlayer"],
    image: "/portfolio/images/project-6.svg",
    color: "from-green-300/20 to-teal-400/20",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-30" />
        <LeafDecoration className="absolute top-10 left-10 w-20 h-20 text-primary opacity-30 -rotate-12 hidden lg:block" />
        <LeafDecoration className="absolute bottom-10 right-10 w-16 h-16 text-primary opacity-25 rotate-45 hidden lg:block" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative"
        >
          <motion.h1 variants={fadeUp} className="text-4xl font-bold sm:text-6xl mb-4">
            My <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto text-lg">
            A curated collection of things I&apos;ve built, from full-stack apps to open-source tools.
          </motion.p>
        </motion.div>
      </section>

      {/* Project Grid */}
      <section className="px-6 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className="card-whimsy group"
            >
              <div className={`glow rounded-2xl border border-border/50 bg-gradient-to-br ${project.color} overflow-hidden h-full flex flex-col`}>
                {/* Image area */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <a
                      href={project.link}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-transform hover:scale-110"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ExternalLink size={12} />
                      <span>Project {String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 pt-4">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs border border-primary/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

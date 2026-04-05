"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GitFork,
  Link2,
  Mail,
  ArrowRight,
  Sparkles,
  Heart,
  Leaf,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LeafDecoration } from "@/components/blobs";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const highlights = [
  { icon: <Sparkles size={20} />, label: "Creative Developer" },
  { icon: <Heart size={20} />, label: "UI/UX Enthusiast" },
  { icon: <Leaf size={20} />, label: "Clean Code Advocate" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Decorative leaves */}
        <LeafDecoration className="absolute top-20 right-10 w-24 h-24 text-primary opacity-40 rotate-12 hidden md:block" />
        <LeafDecoration className="absolute bottom-32 left-16 w-16 h-16 text-primary opacity-30 -rotate-45 hidden md:block" />

        {/* Dots pattern overlay */}
        <div className="absolute inset-0 dots-pattern opacity-40" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="secondary" className="mb-2 px-4 py-1.5 text-sm border border-primary/20">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for work
            </Badge>
          </motion.div>

          {/* Avatar */}
          <motion.div variants={fadeUp}>
            <div className="relative">
              <div className="organic h-28 w-28 bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 p-1">
                <div className="organic h-full w-full bg-background flex items-center justify-center">
                  <span className="text-3xl font-bold gradient-text">L</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <Sparkles size={12} className="text-primary-foreground" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold tracking-tight sm:text-7xl leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Lina</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-lg text-muted-foreground leading-relaxed"
          >
            A passionate developer who crafts beautiful, performant web experiences.
            I turn ideas into elegant digital products with a touch of whimsy.
          </motion.p>

          {/* Highlight pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary"
              >
                {h.icon}
                {h.label}
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-3 pt-2">
            <Link
              href="/portfolio/projects"
              className={cn(buttonVariants(), "gap-2 rounded-full px-6")}
            >
              View My Work
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/portfolio/about"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-6")}
            >
              About Me
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-4 pt-4">
            {[
              { href: "https://github.com", icon: <GitFork size={18} />, label: "GitHub" },
              { href: "https://linkedin.com", icon: <Link2 size={18} />, label: "LinkedIn" },
              { href: "mailto:hello@example.com", icon: <Mail size={18} />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-2 rounded-full bg-muted/50 px-4 py-2 text-sm text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              >
                {s.icon}
                <span className="hidden sm:inline">{s.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50 text-xs">
            <span>scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-primary/30 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Featured section */}
      <section className="relative py-24 px-6">
        <div className="wavy-top absolute inset-0 bg-muted/30" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="relative mx-auto max-w-4xl"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4 text-center">
            What I <span className="gradient-text">Create</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            From pixel-perfect interfaces to robust backends, I build experiences that delight.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Web Apps",
                desc: "Full-stack applications with modern frameworks, designed for scale and delight.",
                gradient: "from-emerald-500/20 to-teal-500/20",
                emoji: "🌿",
              },
              {
                title: "UI/UX Design",
                desc: "Thoughtful interfaces that balance beauty with usability and accessibility.",
                gradient: "from-green-400/20 to-emerald-500/20",
                emoji: "🎨",
              },
              {
                title: "Open Source",
                desc: "Contributing to the community with tools and libraries that solve real problems.",
                gradient: "from-teal-400/20 to-cyan-500/20",
                emoji: "🌱",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <div className={cn(
                  "card-whimsy glow rounded-2xl border border-border/50 bg-gradient-to-br p-6 h-full",
                  item.gradient
                )}>
                  <span className="text-3xl mb-3 block">{item.emoji}</span>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <Link
              href="/portfolio/projects"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-6 gap-2")}
            >
              See all projects
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

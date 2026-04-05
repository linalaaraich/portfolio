"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const featuredProjects = [
  {
    title: "Verdant Commerce",
    desc: "Full-stack e-commerce with Stripe, real-time inventory, and a stunning storefront.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/portfolio/images/project-1.svg",
  },
  {
    title: "Canopy Chat",
    desc: "AI chat app with streaming responses, branching conversations, and team sharing.",
    tags: ["React", "OpenAI", "WebSocket"],
    image: "/portfolio/images/project-2.svg",
  },
  {
    title: "Moss Analytics",
    desc: "Privacy-first analytics dashboard with real-time insights and beautiful charts.",
    tags: ["Next.js", "D3.js", "Go"],
    image: "/portfolio/images/project-5.svg",
  },
];

const testimonials = [
  {
    quote: "Lina has an incredible eye for detail. Every pixel is intentional, every interaction feels natural.",
    name: "Sarah Chen",
    role: "Product Manager, Vercel",
  },
  {
    quote: "Working with Lina was a delight. She turned our rough wireframes into a product our users love.",
    name: "Marc Dubois",
    role: "CTO, Leafwork Studio",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative px-6 pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-50" />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Text side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={fade}>
              <Badge className="mb-5 bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50">
                <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for freelance
              </Badge>
            </motion.div>

            <motion.h1
              variants={fade}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              I design &<br />
              build things<br />
              for the <span className="gradient-text">web</span>
            </motion.h1>

            <motion.p variants={fade} className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Hi, I&apos;m Lina — a developer and designer based in Morocco.
              I craft thoughtful digital experiences that are fast, accessible, and beautiful.
            </motion.p>

            <motion.div variants={fade} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                href="/projects"
                className={cn(buttonVariants(), "rounded-full px-6 gap-2 h-11 text-sm")}
              >
                View my work
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-6 h-11 text-sm")}
              >
                About me
              </Link>
            </motion.div>
          </div>

          {/* Photo side */}
          <motion.div variants={fade} className="relative shrink-0">
            <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] lg:w-96 lg:h-[26rem]">
              {/* Main photo */}
              <div className="photo-frame overflow-hidden w-full h-full">
                <Image
                  src="/portfolio/images/hero-portrait.svg"
                  alt="Lina Laaraich"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl card-shadow px-4 py-3 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Star size={18} className="text-emerald-600 fill-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">3+ years</p>
                  <p className="text-xs text-muted-foreground">building for the web</p>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-[1.5rem] border-2 border-dashed border-emerald-200/60 -z-10" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ LOGOS / TECH ═══ */}
      <section className="py-12 px-6 border-y bg-muted/30">
        <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted-foreground text-sm font-medium">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Figma", "Python"].map((t) => (
            <span key={t} className="opacity-50 hover:opacity-100 transition-opacity">{t}</span>
          ))}
        </div>
      </section>

      {/* ═══ FEATURED WORK ═══ */}
      <section className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={fade} className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-medium text-primary mb-1">Selected work</p>
              <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View all <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((p) => (
              <motion.div key={p.title} variants={fade}>
                <Link href="/projects" className="group block">
                  <div className="card-lift card-shadow rounded-2xl overflow-hidden bg-white">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                        <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/projects"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-6 gap-2")}
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ═══ ABOUT PREVIEW ═══ */}
      <section className="py-24 px-6 bg-muted/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Image */}
          <motion.div variants={fade} className="shrink-0">
            <div className="relative w-64 h-72 sm:w-72 sm:h-80">
              <div className="photo-frame overflow-hidden w-full h-full">
                <Image
                  src="/portfolio/images/about-photo.svg"
                  alt="Lina at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-[1.5rem] border-2 border-dashed border-emerald-200/50 -z-10" />
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p variants={fade} className="text-sm font-medium text-primary mb-1">About me</motion.p>
            <motion.h2 variants={fade} className="text-3xl sm:text-4xl font-bold mb-4">
              A developer who<br />loves great design
            </motion.h2>
            <motion.p variants={fade} className="text-muted-foreground leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">
              I believe the best digital products come from the intersection of clean engineering
              and thoughtful design. I obsess over the details — from the micro-interactions
              to the overall architecture.
            </motion.p>
            <motion.p variants={fade} className="text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              When I&apos;m not coding, you&apos;ll find me hiking mountain trails, brewing specialty
              coffee, or sketching interface ideas in my notebook.
            </motion.p>
            <motion.div variants={fade}>
              <Link
                href="/about"
                className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-6 gap-2")}
              >
                More about me <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={fade} className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-1">Kind words</p>
            <h2 className="text-3xl sm:text-4xl font-bold">What People Say</h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <motion.blockquote
                key={t.name}
                variants={fade}
                className="card-lift card-shadow rounded-2xl bg-white p-6 sm:p-8"
              >
                <p className="text-foreground leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-300 to-teal-400 flex items-center justify-center text-white font-semibold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
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
            Have a project in mind?
          </motion.h2>
          <motion.p variants={fade} className="text-muted-foreground mb-8 text-lg">
            I&apos;d love to hear about it. Let&apos;s build something beautiful together.
          </motion.p>
          <motion.div variants={fade}>
            <a
              href="mailto:hello@example.com"
              className={cn(buttonVariants(), "rounded-full px-8 h-12 text-base gap-2")}
            >
              Get in touch
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

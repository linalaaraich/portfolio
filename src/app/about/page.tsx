"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Coffee,
  BookOpen,
  Music,
  Mountain,
  ArrowRight,
  Send,
  GitFork,
  Link2,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { LeafDecoration } from "@/components/blobs";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "Linux", "CI/CD"] },
];

const timeline = [
  { year: "2024", title: "Senior Developer", desc: "Leading frontend architecture and design systems" },
  { year: "2023", title: "Full-Stack Developer", desc: "Building scalable web applications end-to-end" },
  { year: "2022", title: "Frontend Developer", desc: "Crafting beautiful UI components and interactions" },
  { year: "2021", title: "Started Coding", desc: "Fell in love with web development and never looked back" },
];

const interests = [
  { icon: <Coffee size={18} />, label: "Specialty coffee" },
  { icon: <BookOpen size={18} />, label: "Sci-fi novels" },
  { icon: <Music size={18} />, label: "Lo-fi beats" },
  { icon: <Mountain size={18} />, label: "Hiking trails" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-30" />
        <LeafDecoration className="absolute top-16 right-16 w-24 h-24 text-primary opacity-30 rotate-12 hidden lg:block" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative mx-auto max-w-4xl"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Avatar */}
            <motion.div variants={fadeUp} className="shrink-0">
              <div className="relative">
                <div className="organic-2 h-44 w-44 bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 p-1.5 shadow-lg shadow-emerald-500/20">
                  <div className="organic-2 h-full w-full overflow-hidden">
                    <Image
                      src="/portfolio/images/avatar.svg"
                      alt="Lina Laaraich"
                      width={176}
                      height={176}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-3 organic-2 border-2 border-dashed border-primary/20 -z-10" />
              </div>
            </motion.div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
                <Badge variant="secondary" className="border border-primary/20">
                  <MapPin size={12} className="mr-1" /> Morocco
                </Badge>
                <Badge variant="secondary" className="border border-primary/20">
                  <Calendar size={12} className="mr-1" /> 3+ years experience
                </Badge>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl font-bold sm:text-5xl mb-4">
                About <span className="gradient-text">Me</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-3 max-w-xl">
                I&apos;m Lina, a developer and designer based in Morocco who believes the web should
                be beautiful, fast, and accessible to everyone. I specialize in building modern web
                applications with thoughtful UI and clean architecture.
              </motion.p>

              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-xl">
                When I&apos;m not coding, you&apos;ll find me exploring nature trails, experimenting
                with new coffee brewing methods, or diving into a good science fiction novel.
                I believe great software comes from curiosity and care.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-4xl"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-8 text-center">
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {skills.map((group) => (
              <motion.div
                key={group.category}
                variants={fadeUp}
                className="card-whimsy rounded-2xl border border-border/50 bg-card/50 p-6 glow"
              >
                <h3 className="font-semibold text-primary mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-2xl"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-10 text-center">
            My <span className="gradient-text">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div key={item.year} variants={fadeUp} className="flex gap-6">
                  <div className="relative shrink-0">
                    <div className={cn(
                      "h-10 w-10 rounded-full border-2 flex items-center justify-center text-xs font-bold",
                      i === 0
                        ? "border-primary bg-primary/20 text-primary"
                        : "border-border bg-muted text-muted-foreground"
                    )}>
                      {item.year.slice(2)}
                    </div>
                  </div>
                  <div className="pb-2">
                    <span className="text-xs text-muted-foreground">{item.year}</span>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Interests */}
      <section className="py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-6">
            Beyond <span className="gradient-text">Code</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
            {interests.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2.5 text-sm text-primary border border-primary/10"
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
            I&apos;m always open to interesting conversations, collaborations, and new opportunities.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@example.com"
              className={cn(buttonVariants(), "rounded-full px-6 gap-2")}
            >
              <Send size={16} />
              Say Hello
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-6 gap-2")}
            >
              <GitFork size={16} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-6 gap-2")}
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

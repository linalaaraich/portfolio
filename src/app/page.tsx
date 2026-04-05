"use client";

import { motion } from "framer-motion";
import {
  GitFork,
  Link2,
  Mail,
  ExternalLink,
  ArrowDown,
  Code2,
  Palette,
  Zap,
  Send,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce app with cart, checkout, and payment integration. Built with modern web technologies.",
    tags: ["Next.js", "Stripe", "Tailwind", "PostgreSQL"],
    link: "#",
  },
  {
    title: "AI Chat Dashboard",
    description:
      "Real-time AI-powered chat interface with conversation history, model switching, and analytics.",
    tags: ["React", "OpenAI", "WebSocket", "TypeScript"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with drag-and-drop boards, real-time updates, and team features.",
    tags: ["Next.js", "Prisma", "tRPC", "Tailwind"],
    link: "#",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "Git",
  "Figma",
  "REST APIs",
  "GraphQL",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full glass">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold gradient-text">
            L.
          </a>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="secondary" className="mb-2 px-4 py-1.5 text-sm">
              Available for work
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold tracking-tight sm:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Lina</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-lg text-lg text-muted-foreground"
          >
            A passionate developer crafting beautiful, performant web experiences.
            I turn ideas into elegant digital products.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-3">
            <a href="#projects" className={cn(buttonVariants())}>
              View My Work
            </a>
            <a href="#contact" className={cn(buttonVariants({ variant: "outline" }))}>
              Get in Touch
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="flex gap-4 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GitFork size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Link2 size={20} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10"
        >
          <a href="#about">
            <ArrowDown size={20} className="animate-bounce text-muted-foreground" />
          </a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-5xl"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12 text-center">
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {[
              {
                icon: <Code2 size={24} />,
                title: "Clean Code",
                desc: "I write maintainable, well-tested code following best practices and modern patterns.",
              },
              {
                icon: <Palette size={24} />,
                title: "Great Design",
                desc: "I care deeply about UI/UX, creating interfaces that are both beautiful and intuitive.",
              },
              {
                icon: <Zap size={24} />,
                title: "Performance",
                desc: "I optimize for speed and efficiency, ensuring fast load times and smooth interactions.",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Card className="glass glow border-0 h-full">
                  <CardContent className="flex flex-col gap-3 p-6">
                    <div className="gradient-text">{item.icon}</div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-semibold mb-4 text-center">Skills & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Separator className="mx-auto max-w-5xl" />

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-5xl"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12 text-center">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <motion.div key={project.title} variants={fadeUp}>
                <Card className="glass glow border-0 h-full group transition-transform hover:-translate-y-1">
                  <CardContent className="flex flex-col gap-4 p-6 h-full">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <a
                        href={project.link}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Separator className="mx-auto max-w-5xl" />

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
            I&apos;m always open to new opportunities and collaborations.
            Feel free to reach out!
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href="mailto:hello@example.com"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              <Send size={16} />
              Say Hello
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Lina Laaraich. All rights reserved.</p>
      </footer>
    </div>
  );
}

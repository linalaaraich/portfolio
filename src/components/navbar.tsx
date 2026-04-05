"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/portfolio", label: "Home" },
  { href: "/portfolio/projects", label: "Projects" },
  { href: "/portfolio/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full glass">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/portfolio" className="flex items-center gap-2 text-lg font-bold">
          <Sparkles size={18} className="text-primary" />
          <span className="gradient-text">Lina</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm transition-all",
                pathname === link.href
                  ? "bg-primary/15 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-muted-foreground hover:text-foreground transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-border/50 px-6 py-4 glass">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-lg px-4 py-2.5 text-sm transition-all",
                pathname === link.href
                  ? "bg-primary/15 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

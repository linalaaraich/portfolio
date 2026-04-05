import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lina Laaraich | Portfolio",
  description: "Developer & designer crafting elegant digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Background decoration */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="blob absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-emerald-100/60" />
          <div
            className="blob-slow absolute top-1/3 -left-52 h-[500px] w-[500px] rounded-full bg-teal-50/80"
            style={{ animationDelay: "-6s" }}
          />
          <div
            className="blob absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-50/70"
            style={{ animationDelay: "-12s" }}
          />
        </div>

        <Navbar />
        <main className="flex-1 pt-16">{children}</main>

        <footer className="border-t py-10 px-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Lina Laaraich &middot; Crafted with care
          </p>
        </footer>
      </body>
    </html>
  );
}

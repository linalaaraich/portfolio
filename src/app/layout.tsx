import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { BackgroundBlobs } from "@/components/blobs";
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
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <BackgroundBlobs />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <footer className="border-t border-border/50 py-8 px-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lina Laaraich. Built with care & emerald dreams.</p>
        </footer>
      </body>
    </html>
  );
}

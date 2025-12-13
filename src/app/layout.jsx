import { Inter } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Kevin Bolaños - Frontend Developer",
  description:
    "Frontend developer specializing in React, Node.js, and modern technologies. Creating exceptional web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <div className="flex flex-col">
            <Navbar />
            <main className="flex flex-col flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

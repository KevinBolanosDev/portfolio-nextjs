import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
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
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

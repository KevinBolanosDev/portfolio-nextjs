import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { cookies } from "next/headers";

import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { LOCALE_COOKIE, resolveLocale } from "@/lib/i18n/config";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Kevin Bolaños - Frontend Developer",
  description:
    "Frontend developer specializing in React, Node.js, and modern technologies. Creating exceptional web experiences.",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get(LOCALE_COOKIE)?.value);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider>
          <LanguageProvider initialLocale={locale}>
            <div className="min-h-dvh flex flex-col">
              <main className="flex flex-col flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster position="top-right" richColors />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

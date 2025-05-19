import type React from "react"
import type { Metadata } from "next"
import { Lora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Lora({ subsets: ["latin" ] })

export const metadata: Metadata = {
  title: "VortexPlay Studio - Twórcy gry Knightblade",
  description: "Oficjalna strona studia VortexPlay, twórców gry Knightblade - rycerskiej przygody RPG",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

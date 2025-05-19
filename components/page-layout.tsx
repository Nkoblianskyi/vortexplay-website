import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/animations/page-transition"

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1">
        <PageTransition className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">{title}</h1>
            {description && <p className="text-zinc-400 text-lg mb-8">{description}</p>}
            <div className="prose prose-invert max-w-none">{children}</div>
          </div>
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}

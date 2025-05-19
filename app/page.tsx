import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { GameShowcase } from "@/components/game-showcase"
import { VideoSection } from "@/components/video-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <GameShowcase />
      <Features />
      <VideoSection />
      <About />
      <ContactSection />
      <Footer />
    </main>
  )
}

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverVideoPlayer } from "@/components/hover-video-player"

export function VideoSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ZOBACZ DARKRISE W AKCJI</h2>
            <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
              Najedź kursorem na wideo, aby zobaczyć zwiastun gry i przekonać się, co czeka na Ciebie w świecie Darkrise
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="mx-auto max-w-4xl">
          <HoverVideoPlayer
            src="/video.mp4"
            poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V3YLq4WSCJFBu58dcNyaXC2t859sjz.png"
            title="Darkrise - Zwiastun gry"
          />

          <StaggerChildren className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4" delay={0.5} staggerDelay={0.1}>
            <StaggerItem>
              <div className="rounded-lg border border-zinc-800 p-4 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
                <h3 className="text-lg font-bold mb-2">Dynamiczna walka</h3>
                <p className="text-zinc-400 text-sm">System walki pełen efektów wizualnych i intensywnej akcji</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-lg border border-zinc-800 p-4 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
                <h3 className="text-lg font-bold mb-2">4 klasy postaci</h3>
                <p className="text-zinc-400 text-sm">Wybierz spośród Maga, Wojownika, Łucznika i Rozbójnika</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-lg border border-zinc-800 p-4 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
                <h3 className="text-lg font-bold mb-2">Rozbudowany ekwipunek</h3>
                <p className="text-zinc-400 text-sm">System craftingu, kamieni i kart do personalizacji ekwipunku</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </FadeIn>
      </div>
    </section>
  )
}

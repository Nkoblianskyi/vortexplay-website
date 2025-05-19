import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { StaggerItem } from "@/components/animations/stagger-item"

export function GameShowcase() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">KNIGHTBLADE</h2>
            <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
              Retro gra RPG z otwartym światem, w którą możesz grać offline, bez zakupów w aplikacji i bez reklam!
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <FadeIn delay={0.2} direction="left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Czym jest Knightblade?</h3>
              <p className="text-zinc-400">
                Knightblade to gra fantasy z otwartym światem, połączona z elementami farmerskimi i symulacji życia. Po
                stworzeniu swojej postaci, nasz bohater przeprowadza się do pięknego małego miasteczka i rozpoczyna
                życie jako skromny farmer.
              </p>
              <p className="text-zinc-400">
                Szybko jednak odkrywasz, że w lochach kryje się tajemnica związana z Bogiem śmierci i Twoim własnym
                rodzinnym dziedzictwem. Eksploruj świat, uprawiaj ziemię, wydobywaj złoto, pomagaj mieszkańcom i wyrusz
                w głębokie, mroczne lochy...
              </p>

              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4" delay={0.4} staggerDelay={0.1}>
                <StaggerItem>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 p-4 hover:border-primary transition-colors duration-300">
                    <h4 className="text-lg font-bold">Otwarty świat</h4>
                    <p className="text-zinc-400 text-sm text-center">Eksploruj otwarty świat w stylu retro</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 p-4 hover:border-primary transition-colors duration-300">
                    <h4 className="text-lg font-bold">System walki</h4>
                    <p className="text-zinc-400 text-sm text-center">Animowane turowe bitwy z potworami</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 p-4 hover:border-primary transition-colors duration-300">
                    <h4 className="text-lg font-bold">Wirtualne życie</h4>
                    <p className="text-zinc-400 text-sm text-center">Uprawiaj rolę, wydobywaj surowce, łów ryby</p>
                  </div>
                </StaggerItem>
              </StaggerChildren>

              <div className="pt-6 flex flex-row gap-4">
                <Link href="/knightblade" className="inline-block">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto hover:scale-105 transition-transform duration-300"
                  >
                    Dowiedz się więcej
                  </Button>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.rpgmaker.only"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src="/google-play-badge-new.png"
                    alt="Pobierz z Google Play"
                    width={160}
                    height={47}
                    className="hover:opacity-90 transition-opacity"
                  />
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.4} direction="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
                <Image
                  src="/knightblade-farm.png"
                  alt="Knightblade - farma"
                  width={400}
                  height={300}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
                <Image
                  src="/knightblade-winter.png"
                  alt="Knightblade - zimowa wioska"
                  width={400}
                  height={300}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-zinc-800 sm:col-span-2 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
                <Image
                  src="/knightblade-tavern.png"
                  alt="Knightblade - karczma"
                  width={800}
                  height={300}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

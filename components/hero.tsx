import Link from "next/link"
import Image from "next/image"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { StaggerItem } from "@/components/animations/stagger-item"

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="absolute inset-0 z-0">
        <Image
          src="/dark-fantasy-rpg-background.png"
          alt="Tło gry Knightblade"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <StaggerChildren className="flex flex-col items-center space-y-4 text-center">
          <StaggerItem>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                RYCERSKA ODYSEJA W ŚWIECIE PEŁNYM PRZYGÓD
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-zinc-200 md:text-xl">
                Witamy w VortexPlay Studio, miejscu, gdzie nostalgia spotyka się z nowoczesną mechaniką gry! W naszej
                grze Knightblade, retro-style open-world RPG, przenosisz się do fascynującego świata fantazji. Czy
                jesteś gotowy na ekscytującą przygodę i odkrycie tajemnic swojej rodziny? Zostań mieszkańcem małego
                miasteczka, zarządzaj swoją farmą i zanurz się w głębokich lochach pełnych potworów oraz skarbów.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="hover:scale-105 transition-transform duration-300">
              <Link
                href="https://play.google.com/store/apps/details?id=com.rpgmaker.only"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/google-play-badge-new.png"
                  alt="Pobierz z Google Play"
                  width={200}
                  height={59}
                  className="hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  )
}

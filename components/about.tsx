import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">O VORTEXPLAY STUDIO</h2>
            <p className="mt-4 text-zinc-400 md:text-xl">
              VortexPlay Studio to zespół pasjonatów gier retro, którzy postanowili połączyć nostalgię za klasycznymi
              RPG z nowoczesnymi mechanikami rozgrywki. Naszą misją jest tworzenie gier, które przenoszą graczy w światy
              pełne przygód, tajemnic i wyzwań.
            </p>
            <p className="mt-4 text-zinc-400 md:text-xl">
              Knightblade to nasza flagowa produkcja, nad którą pracowaliśmy z pasją i zaangażowaniem. Każdy piksel,
              każda linia dialogowa i każdy element rozgrywki został starannie zaprojektowany, aby zapewnić graczom
              niezapomniane doświadczenie.
            </p>
            <p className="mt-4 text-zinc-400 md:text-xl">
              Wierzymy, że gry powinny nie tylko bawić, ale również inspirować i angażować emocjonalnie. Dlatego w
              Knightblade znajdziesz nie tylko wyzwania i walki, ale również poruszającą historię i możliwość
              podejmowania decyzji, które wpłyną na losy całego wirtualnego świata.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.3}>
            <div className="flex items-center justify-center">
              <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
                <Image
                  src="/pixel-art-game-dev-team.png"
                  alt="Zespół VortexPlay Studio"
                  width={600}
                  height={600}
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

import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { StaggerItem } from "@/components/animations/stagger-item"

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ODKRYJ ŚWIAT DARKRISE</h2>
            <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
              Poznaj główne cechy gry, które sprawią, że nie będziesz mógł się od niej oderwać.
            </p>
          </div>
        </FadeIn>
        <StaggerChildren
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
          delay={0.2}
          staggerDelay={0.1}
        >
          <StaggerItem>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 p-4 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="rounded-full bg-zinc-900 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">100 lokacji</h3>
              <p className="text-zinc-400 text-center">
                Eksploruj różnorodne lokacje, od lasów po lochy, każda z unikalnymi wyzwaniami i przeciwnikami.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 p-4 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="rounded-full bg-zinc-900 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">4 klasy postaci</h3>
              <p className="text-zinc-400 text-center">
                Wybierz spośród Maga, Wojownika, Łucznika i Rozbójnika, każdy z unikalnymi umiejętnościami.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 p-4 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="rounded-full bg-zinc-900 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Dynamiczna walka</h3>
              <p className="text-zinc-400 text-center">
                System walki pełen efektów wizualnych, szybkich ataków i intensywnej akcji.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 p-4 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="rounded-full bg-zinc-900 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                  <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">System craftingu</h3>
              <p className="text-zinc-400 text-center">
                Twórz, ulepszaj i przekuwaj swój ekwipunek, aby stać się potężniejszym w walce.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 p-4 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="rounded-full bg-zinc-900 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Unikalni wrogowie</h3>
              <p className="text-zinc-400 text-center">
                Walcz z różnorodnymi przeciwnikami, każdy z własnymi umiejętnościami i taktykami.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 p-4 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="rounded-full bg-zinc-900 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                  <circle cx="17" cy="7" r="5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Rozbudowany ekwipunek</h3>
              <p className="text-zinc-400 text-center">
                8 typów i 6 poziomów rzadkości ekwipunku, system kamieni i kart do personalizacji.
              </p>
            </div>
          </StaggerItem>
        </StaggerChildren>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <FadeIn delay={0.6} direction="left">
            <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8WNJ34ctMEPlKLefKqF1N8OCBqDEy7.png"
                alt="Darkrise - walka w lochu"
                width={600}
                height={400}
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.8} direction="right">
            <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xWPBsupZm7mQYC7PZb7DZhWlQlSeYi.png"
                alt="Darkrise - magiczne ataki"
                width={600}
                height={400}
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

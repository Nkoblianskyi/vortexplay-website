import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { FadeIn } from "@/components/animations/fade-in"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SKONTAKTUJ SIĘ Z NAMI</h2>
            <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
              Masz pytania dotyczące naszych gier lub chcesz nawiązać współpracę? Napisz do nas!
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn delay={0.2} direction="left">
            <h3 className="text-2xl font-bold mb-6">Napisz do nas</h3>
            <ContactForm simplified className="bg-zinc-900 border border-zinc-800 rounded-lg p-6" />
          </FadeIn>
          <FadeIn delay={0.4} direction="right">
            <h3 className="text-2xl font-bold mb-6">Dane kontaktowe</h3>
            <Card className="bg-zinc-900 border-zinc-800 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Adres</h4>
                    <p className="text-zinc-400">ul. Marszałkowska 87</p>
                    <p className="text-zinc-400">00-683 Warszawa, Poland</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Telefon</h4>
                    <p className="text-zinc-400">+48 503 428 192</p>
                  </div>
                  <div>
                    <h4 className="font-medium">E-mail</h4>
                    <p className="text-zinc-400">info@vortexplaystudio.com</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Godziny pracy</h4>
                    <p className="text-zinc-400">Poniedziałek - Piątek: 9:00 - 17:00</p>
                    <p className="text-zinc-400">Sobota - Niedziela: Zamknięte</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

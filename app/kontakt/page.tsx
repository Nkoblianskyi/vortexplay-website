import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export default function KontaktPage() {
  return (
    <PageLayout
      title="Skontaktuj się z nami"
      description="Masz pytania dotyczące naszych gier lub chcesz nawiązać współpracę? Skontaktuj się z nami!"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ContactForm />
        </div>
        <div>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Dane kontaktowe</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Adres</h3>
                  <p className="text-zinc-400">ul. Marszałkowska 87</p>
                  <p className="text-zinc-400">00-683 Warszawa, Poland</p>
                </div>
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <p className="text-zinc-400">+48 503 428 192</p>
                </div>
                <div>
                  <h3 className="font-medium">E-mail</h3>
                  <p className="text-zinc-400">info@vortexplaystudio.com</p>
                </div>
                <div>
                  <h3 className="font-medium">Godziny pracy</h3>
                  <p className="text-zinc-400">Poniedziałek - Piątek: 9:00 - 17:00</p>
                  <p className="text-zinc-400">Sobota - Niedziela: Zamknięte</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Dołącz do nas</h2>
                <p className="text-zinc-400 mb-4">
                  Śledź nas w mediach społecznościowych, aby być na bieżąco z najnowszymi informacjami o naszych grach i
                  promocjach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

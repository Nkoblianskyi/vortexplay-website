import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScreenshotSlider } from "@/components/screenshot-slider"

export default function KnightbladePage() {
  return (
    <PageLayout
      title="Darkrise - Pixel Action RPG"
      description="Odkryj świat Darkrise - klasycznej hardkorowej gry RPG w stylu pixel art, stworzonej przez niezależnych deweloperów!"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">O grze</h2>
            <p className="mb-4">
              Darkrise to klasyczna hardkorowa gra stworzona przez niezależnych deweloperów w nostalgicznym stylu pixel
              art. W tej dynamicznej grze akcji RPG możesz wybrać jedną z 4 klas postaci: Maga, Wojownika, Łucznika lub
              Rozbójnika. Każda z nich posiada unikalne umiejętności, mechaniki i cechy charakterystyczne.
            </p>
            <div className="mt-6 flex flex-row gap-4">
              <Link href="#features">
                <Button variant="outline">Dowiedz się więcej</Button>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.Roika.Darkrise"
                target="_blank"
                rel="noopener noreferrer"
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
          <div className="rounded-lg overflow-hidden border border-zinc-800">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V3YLq4WSCJFBu58dcNyaXC2t859sjz.png"
              alt="Darkrise - walka w lesie"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Fabuła i rozgrywka</h2>
          <p className="mb-4">
            Rodzinna kraina bohaterów została zajęta przez gobliny, nieumarłych, demony i armie sąsiednich krajów. Teraz
            muszą stać się silniejsi i oczyścić ziemie z najeźdźców. W grze znajdziesz około 100 lokacji i 3 poziomy
            trudności. Wrogowie pojawiają się przed tobą lub wychodzą z portali, które otwierają się losowo co kilka
            sekund.
          </p>
          <p className="mb-4">
            Każdy przeciwnik jest unikalny i posiada specjalne umiejętności. Czasami mogą pojawić się wadliwi wrogowie –
            ich statystyki są losowe i nie będziesz w stanie przewidzieć ich siły. System walki w Darkrise jest bardzo
            dynamiczny: kamera trzęsie się od uderzeń, błyski ataków, animacje utraty zdrowia, przedmioty rozlatują się
            na boki. Twoja postać i wrogowie są bardzo szybcy, więc musisz być w ciągłym ruchu, jeśli nie chcesz
            przegrać.
          </p>
        </div>

        <div className="space-y-4" id="features">
          <h2 className="text-2xl font-bold mb-4">Zrzuty ekranu z gry</h2>
          <ScreenshotSlider
            images={[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V3YLq4WSCJFBu58dcNyaXC2t859sjz.png",
                alt: "Darkrise - walka w lesie",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yy5pirLMIlfVjDyVPosGm9aJEJmt59.png",
                alt: "Darkrise - dialog z NPC",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p8Mfh1cFHKj4jk812RLXzaTxo98d5U.png",
                alt: "Darkrise - walka na cmentarzu",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8WNJ34ctMEPlKLefKqF1N8OCBqDEy7.png",
                alt: "Darkrise - walka w lochu",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xWPBsupZm7mQYC7PZb7DZhWlQlSeYi.png",
                alt: "Darkrise - magiczne ataki",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JRqxeWIDYOfwHP2mK2CzhHTzJYdUjG.png",
                alt: "Darkrise - drzewo umiejętności",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9j1gVwXBQHEQJgk7yU17IZwEwWdJ3C.png",
                alt: "Darkrise - system craftingu",
              },
            ]}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Rozwój postaci</h2>
          <p className="mb-4">
            W Darkrise masz wiele sposobów na wzmocnienie swojej postaci. W grze znajdziesz 8 typów i 6 poziomów
            rzadkości ekwipunku. Możesz tworzyć sloty w zbroi i wkładać do nich drogocenne kamienie i karty, a także
            łączyć kilka takich samych kamieni, aby je ulepszyć. Kowal w mieście z przyjemnością wzmocni i przekuje
            twoją zbroję, czyniąc ją jeszcze potężniejszą.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden border border-zinc-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JRqxeWIDYOfwHP2mK2CzhHTzJYdUjG.png"
                alt="Darkrise - drzewo umiejętności"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-zinc-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9j1gVwXBQHEQJgk7yU17IZwEwWdJ3C.png"
                alt="Darkrise - system craftingu"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Główne cechy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">4 klasy postaci</h3>
                <p className="text-zinc-400">
                  Wybierz spośród Maga, Wojownika, Łucznika i Rozbójnika, każdy z unikalnymi umiejętnościami.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Dynamiczna walka</h3>
                <p className="text-zinc-400">
                  System walki pełen efektów wizualnych, szybkich ataków i intensywnej akcji.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Rozbudowany ekwipunek</h3>
                <p className="text-zinc-400">
                  8 typów i 6 poziomów rzadkości ekwipunku, system kamieni i kart do personalizacji.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">100 lokacji</h3>
                <p className="text-zinc-400">
                  Eksploruj różnorodne lokacje, od lasów po lochy, każda z unikalnymi wyzwaniami.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">3 poziomy trudności</h3>
                <p className="text-zinc-400">
                  Dostosuj wyzwanie do swoich umiejętności, od początkującego po hardkorowy poziom.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">System craftingu</h3>
                <p className="text-zinc-400">Twórz, ulepszaj i przekuwaj swój ekwipunek, aby stać się potężniejszym.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Informacje techniczne</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Szczegóły techniczne</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>
                    <strong>Wersja:</strong> 0.24.9
                  </li>
                  <li>
                    <strong>Aktualizacja:</strong> 2 maja 2025 r.
                  </li>
                  <li>
                    <strong>Wymagany system:</strong> Android 6.0 i nowszy
                  </li>
                  <li>
                    <strong>Rozmiar:</strong> ~140 MB
                  </li>
                  <li>
                    <strong>Ograniczenia wiekowe:</strong> Od 7 lat (umiarkowana przemoc)
                  </li>
                  <li>
                    <strong>Data wydania:</strong> 4 marca 2021 r.
                  </li>
                  <li>
                    <strong>Producent:</strong> Roika
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Kompatybilność</h3>
                <p className="text-zinc-400 mb-4">
                  Gra działa na większości urządzeń z systemem Android 6.0 i nowszym. Sprawdź kompatybilność swojego
                  urządzenia w Google Play.
                </p>
                <div className="mt-4">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.Roika.Darkrise"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full">Sprawdź w Google Play</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-6">Rozpocznij swoją przygodę już dziś!</h2>
          <div className="flex justify-center gap-4">
            <Link href="#features">
              <Button variant="outline">Dowiedz się więcej</Button>
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.Roika.Darkrise"
              target="_blank"
              rel="noopener noreferrer"
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
      </div>
    </PageLayout>
  )
}

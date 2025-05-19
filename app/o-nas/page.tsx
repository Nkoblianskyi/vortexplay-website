import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScreenshotSlider } from "@/components/screenshot-slider"

export default function ONasPage() {
  return (
    <PageLayout title="O nas" description="Poznaj VortexPlay Studio - twórców gry Darkrise">
      <div className="space-y-12">
        {/* Sekcja o firmie */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">VortexPlay Studio</h2>
              <p className="mb-4 text-zinc-200">
                VortexPlay Studio to niezależne studio deweloperskie z siedzibą w Warszawie, specjalizujące się w
                tworzeniu gier retro z nowoczesnym podejściem. Nasza pasja do klasycznych gier RPG i chęć tworzenia
                unikalnych doświadczeń dla graczy doprowadziła nas do współpracy przy grze Darkrise - naszym flagowym
                projekcie.
              </p>
              <p className="mb-4 text-zinc-200">
                Założone w 2020 roku przez grupę pasjonatów gier retro, nasze studio łączy nostalgię za złotą erą gier
                wideo z innowacyjnymi mechanikami rozgrywki. Wierzymy, że najlepsze gry to te, które potrafią przenieść
                graczy w inny świat, jednocześnie oferując im dynamiczną akcję i możliwość rozwoju postaci.
              </p>
              <p className="text-zinc-200">
                Naszą misją jest tworzenie gier, które nie tylko bawią, ale również inspirują i angażują emocjonalnie.
                Każdy projekt traktujemy jako dzieło sztuki, w które wkładamy całe serce i duszę.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-zinc-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JRqxeWIDYOfwHP2mK2CzhHTzJYdUjG.png"
                alt="Drzewo umiejętności w grze Darkrise"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Sekcja o naszej filozofii */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Nasza filozofia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pasja</h3>
                <p className="text-zinc-400">
                  Tworzymy gry, w które sami chcielibyśmy grać. Każdy projekt jest napędzany naszą pasją do tworzenia
                  wyjątkowych doświadczeń dla graczy.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Jakość</h3>
                <p className="text-zinc-400">
                  Wierzymy w jakość ponad ilość. Wolimy spędzić więcej czasu na dopracowaniu każdego szczegółu, niż
                  tworzyć niedopracowane gry.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Innowacja</h3>
                <p className="text-zinc-400">
                  Łączymy klasyczne elementy z nowoczesnymi rozwiązaniami, tworząc gry, które są jednocześnie znajome i
                  świeże.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sekcja o naszej grze */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Nasza gra: Darkrise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
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
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold mb-2">Darkrise: Pixel Action RPG</h3>
              <p className="mb-4 text-zinc-200">
                Darkrise to klasyczna hardkorowa gra RPG w stylu pixel art, stworzona przez niezależnych deweloperów.
                Jest doskonałym przykładem naszych możliwości i pasji do tworzenia gier, które łączą nostalgię za
                klasycznymi tytułami z nowoczesnymi mechanikami rozgrywki.
              </p>
              <p className="mb-4 text-zinc-200">
                W grze wcielasz się w jedną z 4 klas postaci (Mag, Wojownik, Łucznik lub Rozbójnik), aby oczyścić
                rodzinną krainę z goblinów, nieumarłych, demonów i armii sąsiednich krajów. Każda klasa posiada unikalne
                umiejętności, mechaniki i cechy charakterystyczne.
              </p>
              <p className="mb-6 text-zinc-200">
                Gra oferuje dynamiczny system walki, około 100 lokacji, 3 poziomy trudności oraz rozbudowany system
                ekwipunku i craftingu. Wszystko to w pięknej, pikselowej oprawie graficznej, która przywołuje
                wspomnienia złotej ery gier RPG.
              </p>
              <div className="flex flex-row gap-4">
                <Link href="/knightblade">
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
        </section>

        {/* Sekcja o procesie tworzenia */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Nasz proces tworzenia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Koncepcja</h3>
              <p className="text-zinc-400">
                Każda gra zaczyna się od pomysłu. Burza mózgów, szkice i prototypy pomagają nam zdefiniować wizję
                projektu.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Projektowanie</h3>
              <p className="text-zinc-400">
                Tworzymy szczegółowy projekt gry, definiując mechaniki, fabułę, postacie i świat gry.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Rozwój</h3>
              <p className="text-zinc-400">
                Nasz zespół programistów i artystów przekształca koncepcję w działającą grę, tworząc kod i assety.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Testowanie</h3>
              <p className="text-zinc-400">
                Przeprowadzamy dokładne testy, aby wykryć i naprawić błędy oraz upewnić się, że gra jest zbalansowana.
              </p>
            </div>
          </div>
        </section>

        {/* Sekcja o zespole */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Nasz zespół</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/game-developer-portrait.png"
                    alt="Założyciel i dyrektor kreatywny"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Adam Nowak</h3>
                <p className="text-zinc-400 mb-2">Założyciel i dyrektor kreatywny</p>
                <p className="text-zinc-400">
                  Pasjonat gier retro z 15-letnim doświadczeniem w branży. Adam jest wizjonerem stojącym za współpracą
                  przy grze Darkrise.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/female-game-developer-portrait.png"
                    alt="Główna projektantka"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Marta Kowalska</h3>
                <p className="text-zinc-400 mb-2">Główna projektantka</p>
                <p className="text-zinc-400">
                  Ekspertka w dziedzinie projektowania gier z pasją do tworzenia dynamicznych systemów walki i rozwoju
                  postaci.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/pixel-artist-portrait.png"
                    alt="Dyrektor artystyczny"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Piotr Wiśniewski</h3>
                <p className="text-zinc-400 mb-2">Dyrektor artystyczny</p>
                <p className="text-zinc-400">
                  Utalentowany artysta pixel art, który nadaje naszym grom charakterystyczny, retro wygląd z dbałością o
                  każdy szczegół.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sekcja kontaktowa */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Skontaktuj się z nami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-zinc-200">
                Jesteśmy zawsze otwarci na feedback, pytania i propozycje współpracy. Skontaktuj się z nami, aby
                dowiedzieć się więcej o naszym studio lub naszych projektach.
              </p>
              <div className="space-y-2 text-zinc-200">
                <p>
                  <strong>Adres:</strong> ul. Marszałkowska 87, 00-683 Warszawa, Poland
                </p>
                <p>
                  <strong>Telefon:</strong> +48 503 428 192
                </p>
                <p>
                  <strong>Email:</strong> info@vortexplaystudio.com
                </p>
              </div>
              <div className="mt-6">
                <Link href="/kontakt">
                  <Button>Formularz kontaktowy</Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-zinc-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xWPBsupZm7mQYC7PZb7DZhWlQlSeYi.png"
                alt="Magiczne ataki w grze Darkrise"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

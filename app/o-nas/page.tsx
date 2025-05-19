import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScreenshotSlider } from "@/components/screenshot-slider"

export default function ONasPage() {
  return (
    <PageLayout title="O nas" description="Poznaj VortexPlay Studio - twórców gry Knightblade">
      <div className="space-y-12">
        {/* Sekcja o firmie */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">VortexPlay Studio</h2>
              <p className="mb-4 text-zinc-200">
                VortexPlay Studio to niezależne studio deweloperskie z siedzibą w Warszawie, specjalizujące się w
                tworzeniu gier retro z nowoczesnym podejściem. Nasza pasja do klasycznych gier RPG i chęć tworzenia
                unikalnych doświadczeń dla graczy doprowadziła nas do stworzenia Knightblade - naszego flagowego
                projektu.
              </p>
              <p className="mb-4 text-zinc-200">
                Założone w 2020 roku przez grupę pasjonatów gier retro, nasze studio łączy nostalgię za złotą erą gier
                wideo z innowacyjnymi mechanikami rozgrywki. Wierzymy, że najlepsze gry to te, które potrafią przenieść
                graczy w inny świat, jednocześnie oferując im swobodę eksploracji i odkrywania na własnych zasadach.
              </p>
              <p className="text-zinc-200">
                Naszą misją jest tworzenie gier, które nie tylko bawią, ale również inspirują i angażują emocjonalnie.
                Każdy projekt traktujemy jako dzieło sztuki, w które wkładamy całe serce i duszę.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-zinc-800">
              <Image
                src="/unnamed.webp"
                alt="Zespół VortexPlay Studio"
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
                  Tworzymy gry, które sami chcielibyśmy grać. Każdy projekt jest napędzany naszą pasją do tworzenia
                  wyjątkowych doświadczeń dla graczy.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Jakość</h3>
                <p className="text-zinc-400">
                  Wierzymy w jakość ponad ilość. Wolimy spędzić więcej czasu na dopracowaniu każdego szczegółu, niż
                  wypuszczać niedokończone produkty.
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
          <h2 className="text-2xl font-bold mb-4">Nasza gra: Knightblade</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <ScreenshotSlider
                images={[
                  { src: "/knightblade-farm.png", alt: "Knightblade - farma" },
                  { src: "/knightblade-winter.png", alt: "Knightblade - zimowa wioska" },
                  { src: "/knightblade-tavern.png", alt: "Knightblade - karczma" },
                  { src: "/knightblade-autumn.png", alt: "Knightblade - jesienna sceneria" },
                  { src: "/knightblade-world.png", alt: "Knightblade - mapa świata" },
                  { src: "/knightblade-dungeon.png", alt: "Knightblade - loch" },
                  { src: "/knightblade-shop.png", alt: "Knightblade - sklep" },
                  { src: "/knightblade-dual-screenshot.png", alt: "Knightblade - walka i wioska" },
                ]}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold mb-2">Knightblade: Rycerska Odyseja</h3>
              <p className="mb-4 text-zinc-200">
                Knightblade to nasza flagowa produkcja - retro gra RPG z otwartym światem, która łączy nostalgię za
                klasycznymi grami z nowoczesnymi mechanikami rozgrywki. Gra została zaprojektowana z myślą o zapewnieniu
                graczom pełnej swobody eksploracji i odkrywania fascynującego świata fantasy.
              </p>
              <p className="mb-4 text-zinc-200">
                W Knightblade wcielasz się w postać, która przeprowadza się do małego miasteczka, aby rozpocząć nowe
                życie jako farmer. Szybko jednak odkrywasz, że w okolicznych lochach kryje się mroczna tajemnica
                związana z Bogiem śmierci i twoim rodzinnym dziedzictwem.
              </p>
              <p className="mb-6 text-zinc-200">
                Gra oferuje połączenie eksploracji otwartego świata, turowych walk z potworami, zarządzania farmą i
                rozbudowanej fabuły. Wszystko to w pięknej, pikselowej oprawie graficznej, która przywołuje wspomnienia
                złotej ery gier RPG.
              </p>
              <div className="flex flex-row gap-4">
                <Link href="/knightblade">
                  <Button variant="outline">Dowiedz się więcej</Button>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.rpgmaker.only"
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
                Nasz zespół programistów i artystów współpracuje, aby przekształcić projekt w działającą grę.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Wydanie</h3>
              <p className="text-zinc-400">
                Po dokładnym testowaniu i dopracowaniu, wydajemy grę i zbieramy opinie graczy do przyszłych
                aktualizacji.
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
                  Pasjonat gier retro z 15-letnim doświadczeniem w branży. Adam jest wizjonerem stojącym za koncepcją
                  Knightblade.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/female-game-developer-portrait.png"
                    alt="Główna programistka"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Marta Kowalska</h3>
                <p className="text-zinc-400 mb-2">Główna programistka</p>
                <p className="text-zinc-400">
                  Ekspertka w dziedzinie programowania gier z pasją do tworzenia immersyjnych światów i płynnej
                  rozgrywki.
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
                src="/modern-game-studio.png"
                alt="Biuro VortexPlay Studio"
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

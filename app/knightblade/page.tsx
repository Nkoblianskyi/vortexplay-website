import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScreenshotSlider } from "@/components/screenshot-slider"

export default function KnightbladePage() {
  return (
    <PageLayout
      title="Knightblade - Świat Przygód RPG"
      description="Odkryj magiczny świat Knightblade - retro RPG z otwartym światem, bez reklam i mikropłatności!"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">O grze</h2>
            <p className="mb-4">
              Retro gra RPG z otwartym światem, w którą możesz grać offline, bez zakupów w aplikacji i bez reklam! Kup
              raz i ciesz się nią przez całe życie. Port gry komputerowej!
            </p>
            <div className="mt-6 flex flex-row gap-4">
              <Link href="#features">
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
          <div className="rounded-lg overflow-hidden border border-zinc-800">
            <Image
              src="/knightblade-farm.png"
              alt="Knightblade - farma"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Czym jest Knightblade?</h2>
          <p className="mb-4">
            Knightblade najlepiej opisać jako grę fantasy z otwartym światem, połączoną z elementami farmerskimi i
            symulacji życia, jakby została stworzona w złotej erze gier wideo. Po stworzeniu swojej postaci z 8
            dostępnych opcji (cztery klasy, dwie płcie, osiem wariantów sprite'ów), nasz przyszły bohater przeprowadza
            się do pięknego małego miasteczka i rozpoczyna życie jako skromny farmer.
          </p>
          <p className="mb-4">
            Szybko jednak odkrywasz, że w lochach kryje się tajemnica. Tajemnica związana z Bogiem śmierci i Twoim
            własnym rodzinnym dziedzictwem. Eksploruj świat za pomocą mapy w stylu retro, odkrywaj miasta i lokacje
            regionu. Uprawiaj ziemię i wydobywaj cenne złoto. Pomagaj lokalnym mieszkańcom w wykonywaniu zadań. Zakochaj
            się. Następnie wyrusz w głębokie, mroczne lochy... Oczyść każdy z nich, zabijając potwory i zbierając
            skarby, a tajemnica tego, dlaczego przybyłeś do tego miasta, stopniowo się wyjaśnia. To właśnie Knightblade.
          </p>
        </div>

        <div className="space-y-4" id="features">
          <h2 className="text-2xl font-bold mb-4">Zrzuty ekranu z gry</h2>
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

        <div>
          <h2 className="text-2xl font-bold mb-4">Rozgrywka</h2>
          <p className="mb-4">
            To niedrogie gra, zaprojektowana z główną fabułą, którą można ukończyć w kilka godzin. Gracze mogą się
            spieszyć, ale nie odkryją wszystkiego, co gra ma do zaoferowania. Zachęcamy do grania we własnym tempie i
            eksplorowania świata. Elementy farmienia nie są skomplikowane, większy nacisk kładzie się na oczyszczanie
            lochów. Każdy oczyszczony loch posuwa historię do przodu. Ale głównym celem jest swoboda dla gracza. Gracze
            mogą grindować w lochach lub skupić się na innych rzeczach.
          </p>
        </div>

        <div className="space-y-4">
          <ScreenshotSlider
            images={[
              { src: "/knightblade-tavern.png", alt: "Knightblade - karczma" },
              { src: "/knightblade-shop.png", alt: "Knightblade - sklep" },
              { src: "/knightblade-farm.png", alt: "Knightblade - farma" },
              { src: "/knightblade-winter.png", alt: "Knightblade - zimowa wioska" },
              { src: "/knightblade-autumn.png", alt: "Knightblade - jesienna sceneria" },
              { src: "/knightblade-world.png", alt: "Knightblade - mapa świata" },
              { src: "/knightblade-dungeon.png", alt: "Knightblade - loch" },
              { src: "/knightblade-dual-screenshot.png", alt: "Knightblade - walka i wioska" },
            ]}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Główne cechy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Otwarty świat</h3>
                <p className="text-zinc-400">Eksploruj otwarty świat w stylu retro pełen tajemnic i przygód.</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">System walki</h3>
                <p className="text-zinc-400">Walcz z potworami w animowanych turowych bitwach.</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Wirtualne życie</h3>
                <p className="text-zinc-400">
                  Żyj wirtualnym życiem. Zawieraj małżeństwa! Uprawiaj rolę! Wydobywaj surowce! Łów ryby!
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Fabuła</h3>
                <p className="text-zinc-400">Ukończ główny wątek fabularny i odblokuj nowe zadania.</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Nieskończona rozgrywka</h3>
                <p className="text-zinc-400">2 godziny fabuły z nieograniczoną rozgrywką po zakończeniu historii.</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Styl graficzny</h3>
                <p className="text-zinc-400">Zmieniaj style graficzne, filtry lub przełącz na czarno-białe retro!</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Wymagania systemowe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Informacje techniczne</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>
                    <strong>Wersja:</strong> 3.1
                  </li>
                  <li>
                    <strong>Aktualizacja:</strong> 18 sierpnia 2023 r.
                  </li>
                  <li>
                    <strong>Wymagany system:</strong> Android 5.0 i nowszy
                  </li>
                  <li>
                    <strong>Rozmiar:</strong> 55 MB
                  </li>
                  <li>
                    <strong>Ograniczenia wiekowe:</strong> Od 7 lat (umiarkowana przemoc)
                  </li>
                  <li>
                    <strong>Data wydania:</strong> 26 października 2022 r.
                  </li>
                  <li>
                    <strong>Producent:</strong> Solohack3r Studios
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Kompatybilność</h3>
                <p className="text-zinc-400 mb-4">
                  Gra działa na większości urządzeń z systemem Android 5.0 i nowszym. Sprawdź kompatybilność swojego
                  urządzenia w Google Play.
                </p>
                <div className="mt-4">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.rpgmaker.only"
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
    </PageLayout>
  )
}

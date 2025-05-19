import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScreenshotSlider } from "@/components/screenshot-slider"

export default function NaszeUslugiPage() {
  return (
    <PageLayout
      title="Nasze usługi"
      description="Poznaj szczegółowo usługi tworzenia gier oferowane przez VortexPlay Studio"
    >
      <div className="space-y-12">
        {/* Wprowadzenie */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Tworzenie gier z pasją</h2>
              <p className="mb-4 text-zinc-200">
                W VortexPlay Studio specjalizujemy się w tworzeniu wyjątkowych doświadczeń dla graczy. Nasze wieloletnie
                doświadczenie w branży gier pozwala nam oferować kompleksowe usługi deweloperskie, od koncepcji po
                wydanie gotowego produktu.
              </p>
              <p className="mb-4 text-zinc-200">
                Niezależnie od tego, czy marzysz o stworzeniu prostej gry mobilnej, czy złożonego RPG z otwartym
                światem, nasz zespół ekspertów pomoże Ci przekształcić Twoją wizję w rzeczywistość. Łączymy kreatywność
                z techniczną wiedzą, aby dostarczać gry, które angażują, bawią i inspirują.
              </p>
              <p className="text-zinc-200">
                Nasza flagowa produkcja, Knightblade, jest doskonałym przykładem naszych możliwości i pasji do tworzenia
                gier, które łączą nostalgię za klasycznymi tytułami z nowoczesnymi mechanikami rozgrywki.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-zinc-800">
              <Image
                src="/e3da0a3209b0797b8fc1fb2e90a2155a.jpg"
                alt="Zespół deweloperski VortexPlay Studio"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Nasze usługi - główne kategorie */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Kompleksowe usługi deweloperskie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="rounded-full bg-zinc-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
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
                    className="text-primary"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Projektowanie gier</h3>
                <p className="text-zinc-400">
                  Tworzymy kompleksowe projekty gier, definiując mechaniki, fabułę, postacie i świat gry. Nasze projekty
                  są szczegółowe i zorientowane na zapewnienie wyjątkowego doświadczenia dla graczy.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="rounded-full bg-zinc-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
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
                    className="text-primary"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Rozwój oprogramowania</h3>
                <p className="text-zinc-400">
                  Nasz zespół programistów tworzy wydajny, skalowalny i niezawodny kod, wykorzystując najnowsze
                  technologie i najlepsze praktyki. Specjalizujemy się w tworzeniu gier na różne platformy.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="rounded-full bg-zinc-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
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
                    className="text-primary"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Grafika i animacja</h3>
                <p className="text-zinc-400">
                  Nasi utalentowani artyści tworzą piękne, spójne i charakterystyczne assety graficzne, od koncepcji
                  artystycznych po finalne modele i animacje. Specjalizujemy się w stylu pixel art.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Szczegółowe usługi */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold mb-4">Szczegółowy zakres usług</h2>

          {/* Projektowanie gier */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-l-4 border-primary pl-4">Projektowanie gier</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
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
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <h4 className="font-bold">Koncepcja i dokumentacja gry</h4>
                      <p className="text-zinc-400">
                        Tworzymy szczegółowe dokumenty projektowe (GDD), które definiują wszystkie aspekty gry, od
                        mechanik po fabułę i postacie.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
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
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <h4 className="font-bold">Projektowanie mechanik</h4>
                      <p className="text-zinc-400">
                        Opracowujemy unikalne i angażujące mechaniki rozgrywki, które są intuicyjne dla graczy i
                        zapewniają satysfakcjonujące doświadczenie.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
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
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <h4 className="font-bold">Projektowanie poziomów</h4>
                      <p className="text-zinc-400">
                        Tworzymy zróżnicowane, interesujące i zbalansowane poziomy, które zapewniają odpowiednie
                        wyzwanie i nagradzają eksplorację.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
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
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <h4 className="font-bold">Projektowanie interfejsu użytkownika</h4>
                      <p className="text-zinc-400">
                        Projektujemy intuicyjne i estetyczne interfejsy, które ułatwiają interakcję z grą i zwiększają
                        immersję.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden border border-zinc-800">
                <Image
                  src="/knightblade-shop.png"
                  alt="Interfejs sklepu w grze Knightblade"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Rozwój oprogramowania */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-l-4 border-primary pl-4">Rozwój oprogramowania</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-lg overflow-hidden border border-zinc-800">
                  <Image
                    src="/knightblade-world.png"
                    alt="Mapa świata w grze Knightblade"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <ul className="space-y-4">
                  <li className="flex items-start">
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
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <h4 className="font-bold">Programowanie gier</h4>
                      <p className="text-zinc-400">
                        Tworzymy wydajny i niezawodny kod, wykorzystując najnowsze technologie i silniki gier, takie jak
                        Unity, Unreal Engine czy własne rozwiązania.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
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
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <h4 className="font-bold">Implementacja mechanik</h4>
                      <p className="text-zinc-400">
                        Przekształcamy zaprojektowane mechaniki w funkcjonalny kod, zapewniając płynną i responsywną
                        rozgrywkę.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
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
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <h4 className="font-bold">Optymalizacja wydajności</h4>
                      <p className="text-zinc-400">
                        Dbamy o to, aby nasze gry działały płynnie na docelowych platformach, optymalizując kod i
                        zasoby.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
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
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <h4 className="font-bold">Testowanie i debugowanie</h4>
                      <p className="text-zinc-400">
                        Przeprowadzamy dokładne testy, aby wykryć i naprawić błędy, zapewniając stabilne i bezproblemowe
                        działanie gry.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Grafika i animacja */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-l-4 border-primary pl-4">Grafika i animacja</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
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
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <h4 className="font-bold">Koncepcja artystyczna</h4>
                      <p className="text-zinc-400">
                        Tworzymy unikalne i spójne koncepcje artystyczne, które definiują wizualny styl gry i pomagają w
                        budowaniu jej tożsamości.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
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
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <h4 className="font-bold">Pixel art</h4>
                      <p className="text-zinc-400">
                        Specjalizujemy się w tworzeniu wysokiej jakości pixel artu, od sprite'ów postaci po elementy
                        otoczenia i interfejsu.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
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
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <h4 className="font-bold">Animacja</h4>
                      <p className="text-zinc-400">
                        Tworzymy płynne i ekspresyjne animacje, które ożywiają postacie i świat gry, zwiększając
                        immersję.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
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
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <h4 className="font-bold">Efekty wizualne</h4>
                      <p className="text-zinc-400">
                        Projektujemy i implementujemy efekty wizualne, które podkreślają akcję i zwiększają atrakcyjność
                        wizualną gry.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden border border-zinc-800">
                <Image
                  src="/knightblade-autumn.png"
                  alt="Jesienna sceneria w grze Knightblade"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dodatkowe usługi */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Dodatkowe usługi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Dźwięk i muzyka</h3>
                <p className="text-zinc-400">
                  Tworzymy i implementujemy efekty dźwiękowe oraz ścieżki dźwiękowe, które budują atmosferę i wzmacniają
                  doświadczenie z gry.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Testowanie gier</h3>
                <p className="text-zinc-400">
                  Przeprowadzamy kompleksowe testy, aby wykryć błędy, problemy z balansem i inne kwestie, które mogą
                  wpłynąć na doświadczenie gracza.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Publikacja i dystrybucja</h3>
                <p className="text-zinc-400">
                  Pomagamy w przygotowaniu gry do publikacji i dystrybucji na różnych platformach, takich jak Google
                  Play, App Store czy Steam.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Wsparcie po wydaniu</h3>
                <p className="text-zinc-400">
                  Oferujemy wsparcie po wydaniu gry, w tym aktualizacje, poprawki błędów i dodawanie nowej zawartości.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nasza gra */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Nasza flagowa produkcja</h2>
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
                klasycznymi grami z nowoczesnymi mechanikami rozgrywki. Jest doskonałym przykładem naszych możliwości i
                pasji do tworzenia wyjątkowych doświadczeń dla graczy.
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

        {/* Kontakt */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Zainteresowany naszymi usługami?</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Skontaktuj się z nami, aby omówić Twój projekt</h3>
            <p className="mb-6 text-zinc-200 max-w-2xl mx-auto">
              Niezależnie od tego, czy masz już gotowy pomysł na grę, czy potrzebujesz pomocy w jego dopracowaniu, nasz
              zespół ekspertów jest gotowy, aby pomóc Ci w realizacji Twojej wizji. Skontaktuj się z nami, aby rozpocząć
              współpracę.
            </p>
            <Link href="/kontakt">
              <Button size="lg">Skontaktuj się z nami</Button>
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

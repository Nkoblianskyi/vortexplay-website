import { PageLayout } from "@/components/page-layout"

export default function RegulaminPage() {
  return (
    <PageLayout title="Regulamin" description="Regulamin korzystania z usług VortexPlay Studio.">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">§1. Postanowienia ogólne</h2>
          <p>
            1.1. Niniejszy Regulamin określa zasady korzystania z usług oferowanych przez VortexPlay Studio, w
            szczególności zasady korzystania z gry Knightblade.
          </p>
          <p className="mt-2">
            1.2. Właścicielem i administratorem serwisu jest VortexPlay Studio z siedzibą w Warszawie, ul. Marszałkowska
            87, 00-683 Warszawa, Polska.
          </p>
          <p className="mt-2">
            1.3. Korzystanie z usług oferowanych przez VortexPlay Studio oznacza akceptację niniejszego Regulaminu.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">§2. Definicje</h2>
          <p>2.1. Użyte w Regulaminie pojęcia oznaczają:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Serwis</strong> - strona internetowa dostępna pod adresem vortexplaystudio.com oraz wszystkie jej
              podstrony;
            </li>
            <li>
              <strong>Użytkownik</strong> - osoba fizyczna korzystająca z Serwisu;
            </li>
            <li>
              <strong>Gra</strong> - gra Knightblade dostępna na urządzeniach z systemem Android;
            </li>
            <li>
              <strong>Konto</strong> - zbiór zasobów i uprawnień w ramach Gry przypisanych konkretnemu Użytkownikowi;
            </li>
            <li>
              <strong>Usługi</strong> - wszelkie usługi świadczone przez VortexPlay Studio na rzecz Użytkowników.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">§3. Zasady korzystania z Serwisu</h2>
          <p>
            3.1. Korzystanie z Serwisu jest dobrowolne i bezpłatne, z wyjątkiem usług płatnych wyraźnie oznaczonych jako
            takie.
          </p>
          <p className="mt-2">
            3.2. Użytkownik zobowiązuje się do korzystania z Serwisu zgodnie z obowiązującymi przepisami prawa, normami
            społecznymi i obyczajowymi oraz postanowieniami niniejszego Regulaminu.
          </p>
          <p className="mt-2">
            3.3. Użytkownik ponosi pełną odpowiedzialność za treści umieszczane przez niego w Serwisie.
          </p>
          <p className="mt-2">3.4. Zabrania się dostarczania przez Użytkownika treści o charakterze bezprawnym.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">§4. Zasady korzystania z Gry</h2>
          <p>4.1. Korzystanie z Gry wymaga zainstalowania jej na urządzeniu z systemem Android oraz założenia Konta.</p>
          <p className="mt-2">
            4.2. Użytkownik zobowiązuje się do korzystania z Gry zgodnie z jej przeznaczeniem oraz niniejszym
            Regulaminem.
          </p>
          <p className="mt-2">
            4.3. Zabrania się korzystania z nieautoryzowanych programów, modyfikacji lub innych narzędzi ingerujących w
            Grę.
          </p>
          <p className="mt-2">
            4.4. VortexPlay Studio zastrzega sobie prawo do modyfikacji, zawieszenia lub zakończenia świadczenia usług
            związanych z Grą w dowolnym momencie.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">§5. Prawa autorskie</h2>
          <p>
            5.1. Wszelkie prawa do Serwisu i Gry, w tym prawa autorskie, prawa do nazwy, logotypów, elementów
            graficznych, znaków towarowych, należą do VortexPlay Studio lub podmiotów, z którymi VortexPlay Studio
            zawarło stosowne umowy.
          </p>
          <p className="mt-2">
            5.2. Korzystanie z Serwisu i Gry nie oznacza nabycia przez Użytkownika jakichkolwiek praw do utworów w nim
            zawartych.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">§6. Odpowiedzialność</h2>
          <p>
            6.1. VortexPlay Studio nie ponosi odpowiedzialności za przerwy w funkcjonowaniu Serwisu i Gry wynikające z
            przyczyn technicznych lub innych okoliczności niezależnych od VortexPlay Studio.
          </p>
          <p className="mt-2">
            6.2. VortexPlay Studio nie ponosi odpowiedzialności za szkody poniesione przez Użytkownika w związku z
            korzystaniem z Serwisu i Gry, chyba że szkoda powstała z winy umyślnej VortexPlay Studio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">§7. Postanowienia końcowe</h2>
          <p>
            7.1. VortexPlay Studio zastrzega sobie prawo do zmiany niniejszego Regulaminu w dowolnym czasie. Zmiany
            wchodzą w życie z chwilą opublikowania zmienionego Regulaminu na stronie Serwisu.
          </p>
          <p className="mt-2">
            7.2. W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego.
          </p>
          <p className="mt-2">
            7.3. Wszelkie spory wynikłe z korzystania z Serwisu i Gry będą rozstrzygane przez sąd właściwy dla siedziby
            VortexPlay Studio.
          </p>
        </section>
      </div>
    </PageLayout>
  )
}

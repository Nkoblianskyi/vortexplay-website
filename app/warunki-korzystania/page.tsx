import { PageLayout } from "@/components/page-layout"

export default function WarunkiKorzystaniaPage() {
  return (
    <PageLayout
      title="Warunki korzystania z usługi"
      description="Szczegółowe warunki korzystania z usług oferowanych przez VortexPlay Studio."
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Wprowadzenie</h2>
          <p>
            Niniejsze Warunki korzystania z usługi określają zasady korzystania z gry Knightblade oraz innych usług
            oferowanych przez VortexPlay Studio. Korzystając z naszych usług, akceptujesz niniejsze warunki.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Licencja i ograniczenia</h2>
          <p>
            2.1. VortexPlay Studio udziela Użytkownikowi ograniczonej, niewyłącznej, nieprzenoszalnej licencji na
            korzystanie z Gry na urządzeniach z systemem Android.
          </p>
          <p className="mt-2">2.2. Użytkownik nie ma prawa do:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              Kopiowania, modyfikowania, adaptowania, tłumaczenia, dekompilowania, dezasemblowania lub tworzenia dzieł
              pochodnych na podstawie Gry;
            </li>
            <li>
              Usuwania, zmieniania lub ukrywania jakichkolwiek informacji o prawach autorskich, znakach towarowych lub
              innych prawach własności intelektualnej zawartych w Grze;
            </li>
            <li>Korzystania z Gry w sposób naruszający obowiązujące przepisy prawa;</li>
            <li>Korzystania z Gry w celu tworzenia produktów lub usług konkurencyjnych;</li>
            <li>Wykorzystywania błędów w Grze w celu uzyskania nieuczciwej przewagi nad innymi Użytkownikami.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Konto użytkownika</h2>
          <p>3.1. Korzystanie z niektórych funkcji Gry może wymagać utworzenia konta użytkownika.</p>
          <p className="mt-2">
            3.2. Użytkownik jest odpowiedzialny za zachowanie poufności swoich danych logowania oraz za wszystkie
            działania podejmowane przy użyciu jego konta.
          </p>
          <p className="mt-2">
            3.3. VortexPlay Studio zastrzega sobie prawo do zawieszenia lub usunięcia konta Użytkownika w przypadku
            naruszenia niniejszych Warunków.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Zakupy w aplikacji</h2>
          <p>4.1. Gra może oferować możliwość dokonywania zakupów w aplikacji.</p>
          <p className="mt-2">
            4.2. Wszystkie zakupy są ostateczne i nie podlegają zwrotowi, chyba że obowiązujące przepisy prawa stanowią
            inaczej.
          </p>
          <p className="mt-2">
            4.3. Użytkownik jest odpowiedzialny za wszystkie opłaty związane z zakupami dokonanymi za pośrednictwem
            swojego konta.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Aktualizacje i zmiany</h2>
          <p>
            5.1. VortexPlay Studio może okresowo wydawać aktualizacje Gry, które mogą zawierać poprawki błędów, nowe
            funkcje lub inne zmiany.
          </p>
          <p className="mt-2">
            5.2. Użytkownik zgadza się na automatyczne pobieranie i instalowanie takich aktualizacji.
          </p>
          <p className="mt-2">
            5.3. VortexPlay Studio zastrzega sobie prawo do zmiany, zawieszenia lub zakończenia świadczenia usług
            związanych z Grą w dowolnym momencie, bez uprzedniego powiadomienia.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Prywatność</h2>
          <p>
            6.1. Korzystanie z Gry podlega naszej Polityce Prywatności, która jest dostępna na stronie internetowej
            VortexPlay Studio.
          </p>
          <p className="mt-2">
            6.2. Korzystając z Gry, Użytkownik wyraża zgodę na zbieranie, przechowywanie i przetwarzanie jego danych
            zgodnie z Polityką Prywatności.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Ograniczenie odpowiedzialności</h2>
          <p>7.1. Gra jest dostarczana "tak jak jest" i "jak dostępna", bez jakichkolwiek gwarancji.</p>
          <p className="mt-2">
            7.2. VortexPlay Studio nie ponosi odpowiedzialności za jakiekolwiek szkody wynikające z korzystania lub
            niemożności korzystania z Gry.
          </p>
          <p className="mt-2">7.3. VortexPlay Studio nie gwarantuje, że Gra będzie działać bez przerw lub błędów.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Rozwiązanie umowy</h2>
          <p>8.1. Użytkownik może w dowolnym momencie zaprzestać korzystania z Gry.</p>
          <p className="mt-2">
            8.2. VortexPlay Studio może rozwiązać umowę z Użytkownikiem w przypadku naruszenia niniejszych Warunków.
          </p>
          <p className="mt-2">
            8.3. W przypadku rozwiązania umowy, Użytkownik traci dostęp do swojego konta i wszystkich związanych z nim
            danych.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">9. Postanowienia końcowe</h2>
          <p>
            9.1. Niniejsze Warunki stanowią całość porozumienia pomiędzy Użytkownikiem a VortexPlay Studio w zakresie
            korzystania z Gry.
          </p>
          <p className="mt-2">
            9.2. Jeżeli jakiekolwiek postanowienie niniejszych Warunków zostanie uznane za nieważne lub niewykonalne,
            pozostałe postanowienia pozostają w mocy.
          </p>
          <p className="mt-2">9.3. Niniejsze Warunki podlegają prawu polskiemu.</p>
        </section>
      </div>
    </PageLayout>
  )
}

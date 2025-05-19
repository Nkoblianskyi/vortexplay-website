import { PageLayout } from "@/components/page-layout"

export default function PolitykaCookiesPage() {
  return (
    <PageLayout
      title="Polityka Cookies"
      description="Informacje o tym, jak wykorzystujemy pliki cookies na naszej stronie."
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Czym są pliki cookies?</h2>
          <p>
            Pliki cookies (tzw. "ciasteczka") to niewielkie pliki tekstowe, które są zapisywane na urządzeniu końcowym
            użytkownika podczas korzystania z naszej strony internetowej. Pliki te zawierają informacje, które są
            niezbędne do prawidłowego funkcjonowania naszej strony.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Rodzaje plików cookies</h2>
          <p>Na naszej stronie wykorzystujemy następujące rodzaje plików cookies:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Niezbędne pliki cookies</strong> - są to pliki, które są konieczne do prawidłowego funkcjonowania
              strony. Bez tych plików strona nie będzie działać poprawnie.
            </li>
            <li>
              <strong>Funkcjonalne pliki cookies</strong> - są to pliki, które zapamiętują preferencje użytkownika i
              dostosowują stronę do jego potrzeb.
            </li>
            <li>
              <strong>Analityczne pliki cookies</strong> - są to pliki, które zbierają informacje o sposobie korzystania
              ze strony przez użytkownika, np. które podstrony odwiedza najczęściej.
            </li>
            <li>
              <strong>Marketingowe pliki cookies</strong> - są to pliki, które są wykorzystywane do wyświetlania reklam
              dopasowanych do zainteresowań użytkownika.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Cel wykorzystania plików cookies</h2>
          <p>Pliki cookies wykorzystujemy w następujących celach:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Zapewnienie prawidłowego funkcjonowania strony</li>
            <li>Dostosowanie strony do preferencji użytkownika</li>
            <li>Analiza sposobu korzystania ze strony przez użytkowników</li>
            <li>Wyświetlanie reklam dopasowanych do zainteresowań użytkownika</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Zarządzanie plikami cookies</h2>
          <p>
            Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce
            internetowej. Brak zmiany tych ustawień oznacza akceptację dla stosowanych tu plików cookies.
          </p>
          <p className="mt-2">
            Instrukcje dotyczące zarządzania plikami cookies w najpopularniejszych przeglądarkach internetowych:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <a href="#" className="text-primary hover:underline">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline">
                Internet Explorer
              </a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline">
                Opera
              </a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline">
                Safari
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Zmiany w polityce cookies</h2>
          <p>
            Zastrzegamy sobie prawo do zmiany niniejszej polityki cookies. Wszelkie zmiany będą publikowane na tej
            stronie.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Kontakt</h2>
          <p>
            W przypadku jakichkolwiek pytań dotyczących naszej polityki cookies, prosimy o kontakt pod adresem:{" "}
            <a href="mailto:info@vortexplaystudio.com" className="text-primary hover:underline">
              info@vortexplaystudio.com
            </a>
          </p>
        </section>
      </div>
    </PageLayout>
  )
}

import { PageLayout } from "@/components/page-layout"

export default function PolitykaPrivatnosciPage() {
  return (
    <PageLayout title="Polityka Prywatności" description="Informacje o tym, jak przetwarzamy Twoje dane osobowe.">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Informacje ogólne</h2>
          <p>
            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez
            Użytkowników w związku z korzystaniem przez nich z usług oferowanych przez stronę internetową VortexPlay
            Studio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest VortexPlay Studio z siedzibą w Warszawie, ul. Marszałkowska 87, 00-683
            Warszawa, Polska.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Cel i zakres zbierania danych</h2>
          <p>Dane osobowe Użytkowników są przetwarzane w następujących celach:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Realizacja usług świadczonych przez VortexPlay Studio</li>
            <li>Komunikacja z Użytkownikiem</li>
            <li>Marketing własnych produktów i usług</li>
            <li>Analiza i statystyka</li>
          </ul>
          <p className="mt-2">
            Zakres przetwarzanych danych obejmuje: imię i nazwisko, adres e-mail, numer telefonu oraz inne dane podane
            dobrowolnie przez Użytkownika.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Podstawa prawna przetwarzania danych</h2>
          <p>
            Dane osobowe Użytkowników są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
            2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
            osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
            rozporządzenie o ochronie danych, RODO).
          </p>
          <p className="mt-2">Podstawą prawną przetwarzania danych osobowych jest:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Zgoda Użytkownika (art. 6 ust. 1 lit. a RODO)</li>
            <li>Niezbędność do wykonania umowy (art. 6 ust. 1 lit. b RODO)</li>
            <li>Prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Prawa Użytkownika</h2>
          <p>Użytkownik ma prawo do:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Dostępu do swoich danych osobowych</li>
            <li>Sprostowania swoich danych osobowych</li>
            <li>Usunięcia swoich danych osobowych</li>
            <li>Ograniczenia przetwarzania swoich danych osobowych</li>
            <li>Przenoszenia swoich danych osobowych</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania swoich danych osobowych</li>
            <li>Cofnięcia zgody na przetwarzanie swoich danych osobowych</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Okres przechowywania danych</h2>
          <p>
            Dane osobowe Użytkowników będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały
            zebrane, a po tym czasie przez okres wymagany przez przepisy prawa lub do czasu przedawnienia roszczeń.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Udostępnianie danych</h2>
          <p>
            Dane osobowe Użytkowników mogą być udostępniane podmiotom uprawnionym do ich otrzymania na mocy
            obowiązujących przepisów prawa, a także podmiotom współpracującym z Administratorem w zakresie niezbędnym do
            realizacji celów przetwarzania.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Bezpieczeństwo danych</h2>
          <p>
            Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo danych
            osobowych, w tym ochronę przed niedozwolonym lub niezgodnym z prawem przetwarzaniem oraz przypadkową utratą,
            zniszczeniem lub uszkodzeniem.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">9. Zmiany w polityce prywatności</h2>
          <p>
            Administrator zastrzega sobie prawo do zmiany niniejszej Polityki Prywatności. Wszelkie zmiany będą
            publikowane na tej stronie.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">10. Kontakt</h2>
          <p>
            W przypadku jakichkolwiek pytań dotyczących naszej Polityki Prywatności, prosimy o kontakt pod adresem:{" "}
            <p className="text-primary hover:underline">
              info@vortexplaystudio.com
            </p>
          </p>
        </section>
      </div>
    </PageLayout>
  )
}

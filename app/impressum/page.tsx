import Link from "next/link";

export const metadata = {
  title: "Impressum – Nico Studio",
};

export default function Impressum() {
  return (
    <main className="bg-white text-zinc-900 antialiased min-h-screen">
      <header className="border-b border-zinc-100 px-6 h-16 flex items-center">
        <div className="max-w-3xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="text-[17px] font-semibold tracking-tight text-zinc-900">
            Nico<span className="text-zinc-400">Studio</span>
          </Link>
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            ← Zurück
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-400 mb-5">
          Rechtliches
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-16">
          Impressum
        </h1>

        <div className="space-y-12 text-zinc-600 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Nico Haase<br />
              Nico Studio<br />
              [Straße & Hausnummer]<br />
              [PLZ] [Ort]<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a href="mailto:lokaltexte.service@gmail.com" className="text-zinc-900 underline underline-offset-4 hover:text-zinc-500 transition-colors">
                lokaltexte.service@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Umsatzsteuer-ID</h2>
            <p>
              Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Nico Haase<br />
              [Straße & Hausnummer]<br />
              [PLZ] [Ort]
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Haftung für Links</h2>
            <p>
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich
              keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>

      <footer className="border-t border-zinc-100 py-8 px-6 mt-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-zinc-400">
          <span>© 2026 Nico Studio</span>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-zinc-700 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-zinc-700 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
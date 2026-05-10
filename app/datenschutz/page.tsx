import Link from "next/link";

export const metadata = {
  title: "Datenschutz – Nico Studio",
};

export default function Datenschutz() {
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
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
          Datenschutzerklärung
        </h1>
        <p className="text-zinc-400 text-sm mb-16">Stand: Januar 2026</p>

        <div className="space-y-12 text-zinc-600 text-[15px] leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">1. Verantwortlicher</h2>
            <p>Verantwortlicher im Sinne der DSGVO ist:</p>
            <div className="mt-3 p-5 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-700">
              Nico Haase · Nico Studio<br />
              [Achstraße 65], [82386] [Oberhausen]<br />
              E-Mail:{" "}
              <a href="mailto:lokaltexte.service@gmail.com" className="text-zinc-900 underline underline-offset-4 hover:text-zinc-500 transition-colors">
                lokaltexte.service@gmail.com
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">2. Erhebung personenbezogener Daten</h2>
            <p>
              Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst
              (Server-Logfiles): Browsertyp, Betriebssystem, Hostname, Datum und Uhrzeit des Abrufs.
              Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen
              Datenquellen zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">3. Kontaktaufnahme per E-Mail</h2>
            <p>
              Wenn du mir per E-Mail Kontakt aufnimmst, werden deine Angaben (E-Mail-Adresse, Name,
              Nachrichteninhalt) zur Bearbeitung der Anfrage gespeichert. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden nicht ohne deine Einwilligung
              weitergegeben und nach Abschluss der Anfrage gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">4. Cookies</h2>
            <p>
              Diese Website verwendet <strong className="text-zinc-900 font-medium">keine Tracking-Cookies</strong> und
              keine Analyse- oder Werbe-Tools. Es werden ausschließlich technisch notwendige
              Cookies eingesetzt, die für den Betrieb der Website erforderlich sind. Eine
              Einwilligung ist hierfür gemäß § 25 Abs. 2 TTDSG nicht erforderlich.
            </p>
            <div className="mt-5 p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
              <p className="font-medium text-zinc-800 mb-3">Verwendete Cookies</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-zinc-600">
                  <thead>
                    <tr className="border-b border-zinc-200">
                      <th className="text-left py-2 pr-4 font-medium text-zinc-700">Name</th>
                      <th className="text-left py-2 pr-4 font-medium text-zinc-700">Zweck</th>
                      <th className="text-left py-2 font-medium text-zinc-700">Laufzeit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">__session</td>
                      <td className="py-2 pr-4">Technisch notwendig</td>
                      <td className="py-2">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">5. Hosting</h2>
            <p>
              Diese Website wird über <strong className="text-zinc-900 font-medium">Vercel Inc.</strong> (440 N Barranca Ave #4133,
              Covina, CA 91723, USA) gehostet. Beim Aufruf werden technische Daten an Vercel
              übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Infos:{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
                className="text-zinc-900 underline underline-offset-4 hover:text-zinc-500 transition-colors">
                Datenschutzerklärung von Vercel
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">6. Deine Rechte</h2>
            <p>Du hast folgende Rechte gegenüber mir:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Auskunft über gespeicherte Daten (Art. 15 DSGVO)",
                "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
                "Löschung deiner Daten (Art. 17 DSGVO)",
                "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Datenübertragbarkeit (Art. 20 DSGVO)",
                "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
              ].map((right) => (
                <li key={right} className="flex gap-3 items-start">
                  <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                    <span className="text-zinc-400 text-[9px]">✓</span>
                  </span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5">
              Anfragen per E-Mail an:{" "}
              <a href="mailto:lokaltexte.service@gmail.com" className="text-zinc-900 underline underline-offset-4 hover:text-zinc-500 transition-colors">
                lokaltexte.service@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">7. Aktualität</h2>
            <p>
              Diese Datenschutzerklärung hat den Stand Januar 2026 und kann bei Bedarf
              aktualisiert werden.
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
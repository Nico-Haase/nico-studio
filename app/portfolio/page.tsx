import Link from "next/link";

export const metadata = {
  title: "Müller Finanzberatung – Demo | Nico Studio",
  description: "Demo-Website für eine Finanzberatung – erstellt von Nico Studio.",
};

export default function FinanzDemo() {
  return (
    <main className="bg-white text-zinc-900 antialiased">

      {/* Demo Banner */}
      <div className="bg-[#0f2044] text-white text-center py-2.5 px-4 text-[12px] tracking-wide">
        <span className="text-blue-300">Demo-Website von</span>{" "}
        <Link href="/" className="font-semibold text-white hover:text-blue-200 transition-colors">
          Nico Studio
        </Link>
        <span className="text-blue-400 mx-3">·</span>
        <Link href="/#kontakt" className="text-blue-300 hover:text-blue-100 transition-colors font-medium">
          Eigene Website anfragen →
        </Link>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-zinc-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0f2044] flex items-center justify-center">
              <span className="text-white font-bold text-xs">MF</span>
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900 leading-none">Müller Finanzberatung</p>
              <p className="text-[10px] text-zinc-400">Unabhängige Beratung seit 2005</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
            {["Leistungen", "Philosophie", "Team", "Kontakt"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="hover:text-zinc-900 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a href="#erstberatung"
            className="bg-[#0f2044] text-white text-sm px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1a3560] transition-colors">
            Erstberatung anfragen
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#0f2044] text-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-blue-700 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-blue-300">
                Unabhängige Finanzberatung · Köln
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.06] mb-6">
              Ihre Finanzen.<br />
              <span className="text-blue-400">Ihre Entscheidung.</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-10 max-w-lg">
              Unabhängige Beratung ohne Provisionsinteressen. Wir arbeiten
              ausschließlich für Sie, nicht für Produktanbieter.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#erstberatung"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                Kostenlose Erstberatung
              </a>
              <a href="#leistungen"
                className="inline-flex items-center justify-center border border-blue-700 text-blue-200 px-8 py-4 rounded-lg text-sm font-semibold hover:border-blue-500 hover:text-white transition-colors">
                Leistungen ansehen
              </a>
            </div>
          </div>
          {/* Trust metrics */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "20 J.", lbl: "Erfahrung", sub: "Seit 2005 am Markt" },
              { val: "98%", lbl: "Weiterempfehlung", sub: "Kundenbefragung 2025" },
              { val: "350+", lbl: "Kunden", sub: "Privatpersonen & Unternehmen" },
              { val: "Unabh.", lbl: "Beratung", sub: "Kein Provisionsinteresse" },
            ].map((s) => (
              <div key={s.lbl} className="bg-[#162d55] rounded-2xl p-6 border border-blue-900">
                <p className="text-2xl font-bold text-white mb-1">{s.val}</p>
                <p className="text-blue-300 text-sm font-semibold mb-1">{s.lbl}</p>
                <p className="text-blue-500 text-xs">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 block mb-4">
              Leistungen
            </span>
            <h2 className="text-4xl font-bold tracking-tight">Ganzheitliche Finanzplanung</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "◈",
                title: "Altersvorsorge",
                desc: "Private Rente, betriebliche Altersvorsorge, Riester & Rürup. Wir finden die beste Lösung für Ihre Situation.",
                items: ["Rentenanalyse", "Versorgungslücke ermitteln", "Produktvergleich", "Langzeitplanung"],
              },
              {
                icon: "◻",
                title: "Vermögensaufbau",
                desc: "Kapitalanlage, ETF-Portfolios, Immobilien. Renditestark und risikogerecht.",
                items: ["Anlageberatung", "ETF & Fonds", "Depot-Optimierung", "Steueroptimierung"],
              },
              {
                icon: "◇",
                title: "Absicherung",
                desc: "Berufsunfähigkeit, Haftpflicht, Krankenversicherung. Sinnvoller Schutz ohne Überversicherung.",
                items: ["Risikoanalyse", "BU-Versicherung", "PKV vs. GKV", "Haftpflicht"],
              },
              {
                icon: "△",
                title: "Immobilien",
                desc: "Kauf oder Miete? Finanzierungsoptimierung, Tilgungsplanung und Fördermittel.",
                items: ["Finanzierungsberatung", "Fördermittel", "Tilgungsplan", "Objektanalyse"],
              },
              {
                icon: "◎",
                title: "Nachfolgeplanung",
                desc: "Erbschaft, Schenkung, Testament. Ihr Vermögen für die nächste Generation sichern.",
                items: ["Erbschaftssteuer", "Schenkungsstrategie", "Testament", "Unternehmensnachfolge"],
              },
              {
                icon: "○",
                title: "Unternehmensberatung",
                desc: "Für Selbstständige und Unternehmer. Von der GmbH-Gründung bis zur Betriebsrente.",
                items: ["Gesellschaftsformen", "Betriebliche Altersvorsorge", "Liquiditätsplanung", "Exit-Strategie"],
              },
            ].map((s) => (
              <div key={s.title}
                className="group p-7 rounded-2xl bg-white border border-zinc-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
                <span className="text-2xl text-blue-200 group-hover:text-blue-400 block mb-5 transition-colors">
                  {s.icon}
                </span>
                <h3 className="font-bold text-zinc-900 mb-3">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-zinc-500">
                      <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section id="philosophie" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 block mb-4">
              Unsere Philosophie
            </span>
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Unabhängig. Transparent. Langfristig.
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-5">
              Wir erhalten keine Provisionen von Produktanbietern. Unsere Vergütung
              ist transparent und richtet sich ausschließlich nach unserem Beratungsaufwand.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-10">
              Das bedeutet: Wir empfehlen immer das, was für Sie am besten ist, nicht
              das, was uns die höchste Provision einbringt.
            </p>
            <div className="space-y-4">
              {[
                { title: "Honorarberatung", desc: "Klare, transparente Kosten. Keine versteckten Provisionen." },
                { title: "Produktunabhängig", desc: "Wir vergleichen den gesamten Markt, nicht nur Partner." },
                { title: "Langfristige Begleitung", desc: "Einmal Kunde, immer Berater. Wir wachsen mit Ihnen." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-zinc-100 hover:border-blue-100 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#0f2044] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-[10px]">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 mb-0.5">{item.title}</p>
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Zertifikate */}
          <div className="bg-zinc-50 rounded-3xl p-8">
            <p className="font-bold text-zinc-900 mb-6">Qualifikationen & Zertifikate</p>
            <div className="space-y-3">
              {[
                "Certified Financial Planner (CFP)",
                "BaFin zugelassen §34f GewO",
                "Mitglied im FPSB Deutschland",
                "IHK geprüfter Finanzberater",
                "Zertifizierter Nachlassberater",
              ].map((cert) => (
                <div key={cert} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-zinc-200">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm font-medium text-zinc-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="erstberatung" className="py-24 px-6 bg-[#0f2044] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 block mb-5">
            Erstberatung
          </span>
          <h2 className="text-4xl font-bold mb-5">
            Kostenlose Erstberatung anfragen
          </h2>
          <p className="text-blue-200 mb-10 max-w-xl mx-auto leading-relaxed">
            60 Minuten, unverbindlich und kostenlos. Wir analysieren Ihre Situation
            und zeigen Ihnen, wo Optimierungspotenzial besteht.
          </p>
          <a href="mailto:info@mueller-finanz.de"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
            Jetzt Termin vereinbaren
          </a>
          <p className="text-blue-500 text-xs mt-5">
            Mo–Fr 9–18 Uhr · Telefonisch oder vor Ort in Köln
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080f1e] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-900">
          <span className="font-semibold text-blue-700">Müller Finanzberatung · Köln</span>
          <span className="text-zinc-600">Demo-Website von{" "}
            <Link href="/" className="text-zinc-400 hover:text-white transition-colors">Nico Studio</Link>
          </span>
          <span className="text-zinc-700">© 2026 Müller Finanzberatung</span>
        </div>
      </footer>
    </main>
  );
}
import Link from "next/link";

export const metadata = { title: "Müller Finanzberatung – Demo | Nico Studio" };

export default function FinanzDemo() {
  return (
    <main className="bg-white text-zinc-900 antialiased">
      <div className="bg-[#0a1628] text-white text-center py-2.5 px-4 text-[11px] tracking-[0.15em]">
        <span className="text-blue-400/60">Demo von</span>{" "}
        <Link href="/" className="font-semibold hover:text-blue-200 transition-colors">Nico Studio</Link>
        <span className="text-blue-800 mx-3">·</span>
        <Link href="/#kontakt" className="text-blue-300 font-medium hover:text-blue-100 transition-colors">Eigene Website anfragen →</Link>
      </div>

      <nav className="sticky top-0 z-50 bg-white border-b border-zinc-100 shadow-sm shadow-zinc-100/50">
        <div className="max-w-6xl mx-auto px-8 h-18 flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0a1628] flex items-center justify-center shadow-md">
              <span className="text-white font-black text-[13px] tracking-tight">MF</span>
            </div>
            <div>
              <p className="text-[16px] font-bold text-zinc-900 leading-none">Müller Finanzberatung</p>
              <p className="text-[10px] text-zinc-400 tracking-[0.1em] mt-0.5">Unabhängige Honorarberatung · Köln</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Leistungen", "Philosophie", "Team", "Kontakt"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] text-zinc-500 hover:text-zinc-900 transition-colors font-medium">{item}</a>
            ))}
          </div>
          <a href="#erstberatung" className="bg-[#0a1628] text-white text-[12px] px-6 py-3 rounded-xl font-semibold hover:bg-[#162040] transition-colors">
            Erstberatung anfragen
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-32 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-500/5" />
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 border border-blue-700/50 rounded-full px-5 py-2 mb-10">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-blue-300 font-semibold">Unabhängige Honorarberatung · Köln</span>
            </div>
            <h1 className="text-[58px] md:text-[72px] font-bold tracking-[-0.02em] leading-[1.05] mb-8">
              Ihre Finanzen.<br />
              <span className="text-blue-400">Ihre Entscheidung.</span><br />
              <span className="text-zinc-600 font-light">Unser Rat.</span>
            </h1>
            <p className="text-blue-200/70 text-[17px] leading-[1.85] mb-12 max-w-lg">
              Wir beraten unabhängig, transparent und ausschließlich in Ihrem Interesse. Keine Provisionen, keine versteckten Interessen, nur die beste Lösung für Ihre Situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#erstberatung" className="inline-flex items-center justify-center bg-blue-500 text-white px-10 py-4 rounded-xl text-[13px] font-semibold hover:bg-blue-600 transition-colors">
                Kostenlose Erstberatung
              </a>
              <a href="#leistungen" className="inline-flex items-center justify-center border border-blue-800 text-blue-300 px-10 py-4 rounded-xl text-[13px] font-semibold hover:border-blue-600 hover:text-white transition-colors">
                Leistungen ansehen
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "20 J.", lbl: "Erfahrung", sub: "Gegründet 2005" },
              { val: "98 %", lbl: "Weiterempfehlung", sub: "Aus Kundenbefragung" },
              { val: "350+", lbl: "Klienten", sub: "Privat & Unternehmen" },
              { val: "Unabh.", lbl: "Beratung", sub: "0 € Provisionen" },
            ].map(s => (
              <div key={s.lbl} className="bg-white/5 border border-blue-900/50 rounded-2xl p-7 hover:bg-white/8 transition-colors">
                <p className="text-[34px] font-bold text-white leading-none mb-1">{s.val}</p>
                <p className="text-blue-300 text-[13px] font-semibold mb-1">{s.lbl}</p>
                <p className="text-blue-600 text-[11px]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-blue-500 py-10 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { icon: "◈", title: "BaFin reguliert", desc: "§34f GewO zugelassen" },
            { icon: "◻", title: "CFP zertifiziert", desc: "Höchste Beratungsqualität" },
            { icon: "◇", title: "Honorarberatung", desc: "Keine Provisionen" },
            { icon: "◎", title: "FPSB Mitglied", desc: "Ethikkodex verpflichtet" },
          ].map(item => (
            <div key={item.title} className="flex items-center gap-4">
              <span className="text-2xl text-white/50 shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-white text-[14px]">{item.title}</p>
                <p className="text-blue-100 text-[12px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-28 px-8 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-[10px] tracking-[0.35em] uppercase text-blue-600 font-bold block mb-4">Leistungen</span>
            <h2 className="text-[48px] font-bold tracking-tight">Ganzheitliche Finanzplanung</h2>
            <p className="text-zinc-500 text-[16px] leading-relaxed mt-4 max-w-xl">Von der Altersvorsorge bis zur Unternehmensnachfolge. Wir begleiten Sie in allen finanziellen Lebensphasen.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "◈", title: "Altersvorsorge", desc: "Private Rente, betriebliche Altersvorsorge, Riester & Rürup. Wir analysieren Ihre Versorgungslücke und entwickeln eine Strategie, die wirklich zu Ihrer Lebenssituation passt.", items: ["Rentenanalyse & Versorgungslücke", "Produktvergleich am Gesamtmarkt", "Betriebliche Altersvorsorge", "Riester & Rürup Optimierung"] },
              { icon: "◻", title: "Vermögensaufbau", desc: "Kapitalanlage, ETF-Portfolios, Immobilien. Renditestark, steueroptimiert und an Ihren persönlichen Risikoappetit angepasst.", items: ["ETF & Fonds-Portfolios", "Depot-Analyse & Optimierung", "Steueroptimierung", "Immobilien als Anlage"] },
              { icon: "◇", title: "Absicherung", desc: "Berufsunfähigkeit, Haftpflicht, Krankenversicherung. Sinnvoller Schutz ohne Überversicherung – nur was Sie wirklich brauchen.", items: ["Berufsunfähigkeitsversicherung", "PKV vs. GKV Entscheidung", "Privathaftpflicht", "Risikolebensversicherung"] },
              { icon: "△", title: "Immobilienfinanzierung", desc: "Kauf, Bau oder Anschlussfinanzierung. Wir finden die optimale Finanzierung und alle verfügbaren Fördermittel für Ihr Immobilienprojekt.", items: ["Finanzierungsvergleich", "KfW & Fördermittel", "Tilgungsplanung", "Anschlussfinanzierung"] },
              { icon: "◎", title: "Nachfolgeplanung", desc: "Erbschaft, Schenkung, Testament. Ihr aufgebautes Vermögen für die nächste Generation sichern und optimal übergeben.", items: ["Erbschaftssteuer-Optimierung", "Schenkungsstrategie", "Testamentgestaltung", "Generationenübergabe"] },
              { icon: "○", title: "Unternehmensberatung", desc: "Für Selbstständige und Unternehmer. Von der Rechtsform bis zur Betriebsrente und dem Exit.", items: ["Rechtsformwahl & Optimierung", "Betriebliche Altersvorsorge", "Liquiditätsplanung", "Exit-Strategie"] },
            ].map(s => (
              <div key={s.title} className="group p-8 bg-white rounded-2xl border border-zinc-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <span className="text-3xl text-blue-100 group-hover:text-blue-300 block mb-6 transition-colors duration-300">{s.icon}</span>
                <h3 className="text-[20px] font-bold text-zinc-900 mb-3">{s.title}</h3>
                <p className="text-zinc-500 text-[14px] leading-[1.75] mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-[13px] text-zinc-500">
                      <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section id="philosophie" className="py-28 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-blue-600 font-bold block mb-6">Unsere Philosophie</span>
            <h2 className="text-[48px] font-bold tracking-tight mb-8 leading-tight">Unabhängig.<br />Transparent.<br />Auf Ihrer Seite.</h2>
            <p className="text-zinc-500 text-[16px] leading-[1.85] mb-6">
              Wir erhalten keine Provisionen von Produktanbietern. Unsere Vergütung ist klar, transparent und richtet sich ausschließlich nach unserem Beratungsaufwand – als Honorar, das Sie kennen.
            </p>
            <p className="text-zinc-500 text-[16px] leading-[1.85] mb-12">
              Das bedeutet in der Praxis: Wir empfehlen nur, was für Sie die beste Lösung ist. Nicht das, was uns die höchste Provision einbringt. Diese Unabhängigkeit ist unser wichtigstes Versprechen.
            </p>
            <div className="space-y-4">
              {[
                { title: "Honorarberatung ohne Provision", desc: "Sie zahlen ein faires Honorar. Wir beraten ohne Interessenkonflikt." },
                { title: "Vollständiger Marktvergleich", desc: "Wir vergleichen alle Anbieter und Produkte am deutschen Markt." },
                { title: "Langfristige Partnerschaft", desc: "Wir begleiten Sie durch alle Lebensphasen – nicht nur einmalig." },
              ].map(item => (
                <div key={item.title} className="flex gap-5 p-6 border border-zinc-100 rounded-xl hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
                  <div className="w-7 h-7 rounded-full bg-[#0a1628] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-[10px] font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 mb-1">{item.title}</p>
                    <p className="text-zinc-500 text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-zinc-50 rounded-3xl p-10 border border-zinc-100">
            <p className="font-bold text-zinc-900 text-[18px] mb-8">Qualifikationen & Zulassungen</p>
            <div className="space-y-4">
              {[
                { cert: "Certified Financial Planner (CFP)", org: "FPSB Deutschland" },
                { cert: "BaFin Zulassung §34f GewO", org: "Bundesanstalt für Finanzdienstl." },
                { cert: "Mitglied FPSB Deutschland", org: "Berufsverband" },
                { cert: "IHK-geprüfter Finanzanlagenverm.", org: "IHK Köln" },
                { cert: "Zertifizierter Nachlassberater", org: "DVEV e.V." },
              ].map(c => (
                <div key={c.cert} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-zinc-100">
                  <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <span className="text-blue-600 text-[11px] font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-800 text-[14px]">{c.cert}</p>
                    <p className="text-zinc-400 text-[11px] mt-0.5">{c.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Erstberatung CTA */}
      <section id="erstberatung" className="py-28 px-8 bg-[#0a1628] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] tracking-[0.35em] uppercase text-blue-400 font-bold block mb-6">Erstberatung</span>
              <h2 className="text-[52px] font-bold mb-6 leading-tight">Kostenlos.<br />Unverbindlich.<br />60 Minuten.</h2>
              <p className="text-blue-200/70 text-[16px] leading-[1.85] mb-10">
                Wir analysieren Ihre aktuelle Situation, identifizieren Optimierungspotenzial und erläutern, wie eine Zusammenarbeit aussehen würde. Kostenlos und ohne jede Verpflichtung.
              </p>
              <div className="space-y-4">
                {["Analyse Ihrer aktuellen Finanzstruktur", "Identifikation von Optimierungsfeldern", "Transparente Erläuterung unserer Honorare", "Kein Abschluss, kein Druck"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <span className="text-blue-400 text-[9px]">✓</span>
                    </div>
                    <span className="text-blue-200/80 text-[14px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-10">
              <p className="font-bold text-zinc-900 text-[20px] mb-8">Termin anfragen</p>
              <div className="space-y-5">
                {[["Vollständiger Name *", "text"], ["Telefonnummer *", "tel"], ["E-Mail-Adresse *", "email"]].map(([label]) => (
                  <div key={label}>
                    <label className="text-[11px] font-bold text-zinc-500 tracking-wide block mb-2 uppercase">{label}</label>
                    <div className="h-12 rounded-xl border-2 border-zinc-100 bg-zinc-50" />
                  </div>
                ))}
                <div>
                  <label className="text-[11px] font-bold text-zinc-500 tracking-wide block mb-2 uppercase">Ihr Anliegen (optional)</label>
                  <div className="h-24 rounded-xl border-2 border-zinc-100 bg-zinc-50" />
                </div>
                <div className="h-14 rounded-xl bg-blue-500 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <span className="text-white font-bold tracking-wide text-[14px]">Termin anfragen →</span>
                </div>
                <p className="text-center text-[11px] text-zinc-400">Antwort innerhalb von 24 Stunden · Alle Daten vertraulich</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#060e1a] py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] text-zinc-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#0a1628] border border-blue-900 flex items-center justify-center"><span className="text-blue-300 font-black text-[11px]">MF</span></div>
            <div><p className="font-bold text-zinc-500">Müller Finanzberatung</p><p className="text-zinc-700">Unabhängige Honorarberatung · Köln</p></div>
          </div>
          <span>Demo von <Link href="/" className="text-zinc-500 hover:text-white transition-colors">Nico Studio</Link></span>
          <span>© 2026 Müller Finanzberatung GmbH</span>
        </div>
      </footer>
    </main>
  );
}
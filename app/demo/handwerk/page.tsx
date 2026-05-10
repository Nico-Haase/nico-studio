import Link from "next/link";

export const metadata = {
  title: "Bauer Bau & Handwerk – Demo | Nico Studio",
  description: "Demo-Website für einen Handwerksbetrieb – erstellt von Nico Studio.",
};

export default function HandwerkDemo() {
  return (
    <main className="bg-white text-zinc-900 antialiased">

      {/* Demo Banner */}
      <div className="bg-amber-500 text-white text-center py-2.5 px-4 text-[12px] tracking-wide">
        <span className="text-amber-100">Demo-Website von</span>{" "}
        <Link href="/" className="font-semibold text-white hover:text-amber-100 transition-colors">
          Nico Studio
        </Link>
        <span className="text-amber-200 mx-3">·</span>
        <Link href="/#kontakt" className="font-semibold underline underline-offset-2 hover:text-amber-100 transition-colors">
          Eigene Website anfragen →
        </Link>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-lg font-bold tracking-tight">Bauer Bau</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-500 font-medium">
            {["Leistungen", "Referenzen", "Über uns", "Kontakt"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-zinc-900 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a href="#anfrage"
            className="bg-amber-500 text-white text-sm px-5 py-2.5 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
            Jetzt anfragen
          </a>
        </div>
      </nav>

      {/* Hero – full width bold */}
      <section className="bg-zinc-900 text-white py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-amber-400">
                  Seit 1998 · Stuttgart & Umgebung
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.02] mb-6">
                Handwerk,<br />
                <span className="text-amber-400">dem man vertrauen kann.</span>
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-lg">
                Maurer, Fliesenleger, Trockenbau, Renovierungen. Über 25 Jahre
                Erfahrung, hunderte zufriedene Kunden in der Region.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#anfrage"
                  className="inline-flex items-center justify-center bg-amber-500 text-white px-8 py-4 rounded-lg text-sm font-bold hover:bg-amber-600 transition-colors">
                  Kostenloses Angebot
                </a>
                <a href="#referenzen"
                  className="inline-flex items-center justify-center border border-zinc-600 text-zinc-300 px-8 py-4 rounded-lg text-sm font-semibold hover:border-zinc-400 hover:text-white transition-colors">
                  Referenzen ansehen
                </a>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "25+", lbl: "Jahre Erfahrung", icon: "🏗" },
                { val: "500+", lbl: "Projekte", icon: "✓" },
                { val: "12", lbl: "Fachkräfte", icon: "👷" },
                { val: "4.8★", lbl: "Google Rating", icon: "⭐" },
              ].map((s) => (
                <div key={s.lbl}
                  className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6">
                  <p className="text-2xl font-black text-white mb-1">{s.val}</p>
                  <p className="text-zinc-400 text-sm">{s.lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-500 block mb-4">
              Leistungen
            </span>
            <h2 className="text-4xl font-black tracking-tight">Was wir für Sie bauen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Maurerarbeiten",
                desc: "Neubau, Umbau, Sanierung. Wir setzen Ihre Bauprojekte sauber und termingerecht um.",
                items: ["Außenmauern", "Keller", "Fundamente", "Sanierung"],
              },
              {
                title: "Fliesenleger",
                desc: "Bad, Küche, Terrasse. Präzises Verlegen für langlebige Ergebnisse.",
                items: ["Bad & WC", "Küchen", "Terrassen", "Großformat"],
              },
              {
                title: "Trockenbau",
                desc: "Wände, Decken, Trennwände. Schnell, sauber und flexibel.",
                items: ["Wände", "Decken", "Schallschutz", "Brandschutz"],
              },
              {
                title: "Renovierung",
                desc: "Komplette Renovierung oder einzelne Gewerke. Wir koordinieren alles.",
                items: ["Badsanierung", "Küche", "Wohnräume", "Komplettsanierung"],
              },
              {
                title: "Außenbereich",
                desc: "Einfahrten, Terrassen, Wege. Robust und wetterfest.",
                items: ["Einfahrten", "Terrassen", "Wege", "Naturstein"],
              },
              {
                title: "Notfalldienst",
                desc: "Schaden am Bau? Wir sind für Sie da. Schnelle Hilfe bei dringenden Fällen.",
                items: ["24h erreichbar", "Sofortmaßnahmen", "Gutachten", "Reparatur"],
              },
            ].map((s) => (
              <div key={s.title}
                className="group p-7 rounded-2xl border border-zinc-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-zinc-900 mb-3">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section id="referenzen" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-500 block mb-4">
              Referenzen
            </span>
            <h2 className="text-4xl font-black tracking-tight">Abgeschlossene Projekte</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Badsanierung Wohnhaus", type: "Fliesenleger · Sanierung", location: "Stuttgart", year: "2025" },
              { title: "Neubau Gewerbegebäude", type: "Maurer · Rohbau", location: "Ludwigsburg", year: "2024" },
              { title: "Terrassenanlage", type: "Außenbereich · Naturstein", location: "Esslingen", year: "2024" },
              { title: "Komplettrenov. Mehrfamilienhaus", type: "Trockenbau · Fliesen", location: "Stuttgart", year: "2025" },
              { title: "Einfahrt & Carport", type: "Außenbereich · Pflaster", location: "Böblingen", year: "2025" },
              { title: "Umbau Ladenlokal", type: "Trockenbau · Maurer", location: "Stuttgart", year: "2024" },
            ].map((r) => (
              <div key={r.title}
                className="group rounded-2xl overflow-hidden border border-zinc-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                <div className="h-40 bg-zinc-200 group-hover:bg-amber-50 transition-colors" />
                <div className="p-5">
                  <p className="font-bold text-zinc-900 mb-1">{r.title}</p>
                  <p className="text-xs text-zinc-500 mb-3">{r.type}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-400">{r.location}</span>
                    <span className="text-xs font-semibold text-amber-600">{r.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anfrage */}
      <section id="anfrage" className="py-24 px-6 bg-amber-500">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-5">
                Kostenloses Angebot anfordern
              </h2>
              <p className="text-amber-100 leading-relaxed mb-6">
                Beschreiben Sie uns Ihr Projekt. Wir melden uns innerhalb von 24 Stunden
                mit einem unverbindlichen Angebot.
              </p>
              <div className="space-y-3">
                {["Kostenlose Erstberatung", "Vor-Ort-Besichtigung möglich", "Schriftliches Angebot", "Faire Preise"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] font-bold">✓</span>
                    </div>
                    <span className="text-white text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <p className="font-bold text-zinc-900 mb-6 text-lg">Projekt anfragen</p>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-zinc-500 block mb-1.5">Name</label>
                  <div className="h-10 rounded-lg border border-zinc-200 bg-zinc-50" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-500 block mb-1.5">Telefon</label>
                  <div className="h-10 rounded-lg border border-zinc-200 bg-zinc-50" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-500 block mb-1.5">Projektbeschreibung</label>
                  <div className="h-24 rounded-lg border border-zinc-200 bg-zinc-50" />
                </div>
                <div className="h-11 rounded-lg bg-amber-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">Anfrage absenden</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span className="font-bold text-zinc-300">Bauer Bau & Handwerk · Stuttgart</span>
          <span>Demo-Website von{" "}
            <Link href="/" className="text-zinc-300 hover:text-white transition-colors">Nico Studio</Link>
          </span>
          <span>© 2026 Bauer Bau</span>
        </div>
      </footer>
    </main>
  );
}
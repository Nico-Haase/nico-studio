import Link from "next/link";

export const metadata = { title: "Bauer Bau & Handwerk – Demo | Nico Studio" };

export default function HandwerkDemo() {
  return (
    <main className="bg-white text-zinc-900 antialiased">
      <div className="bg-amber-500 text-white text-center py-2.5 px-4 text-[11px] tracking-[0.15em]">
        <span className="text-amber-100">Demo von</span>{" "}
        <Link href="/" className="font-semibold hover:text-amber-100 transition-colors">Nico Studio</Link>
        <span className="text-amber-300 mx-3">·</span>
        <Link href="/#kontakt" className="font-semibold underline underline-offset-2 hover:text-amber-100 transition-colors">Eigene Website anfragen →</Link>
      </div>

      <nav className="sticky top-0 z-50 bg-white border-b border-zinc-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 h-18 flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-md shadow-amber-200">
              <span className="text-white font-black text-base">B</span>
            </div>
            <div>
              <p className="text-[16px] font-black text-zinc-900 leading-none">Bauer Bau</p>
              <p className="text-[10px] text-zinc-400 tracking-wide mt-0.5">Meisterbetrieb · Stuttgart</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Leistungen", "Referenzen", "Über uns", "Kontakt"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-[13px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors">{item}</a>
            ))}
          </div>
          <a href="#anfrage" className="bg-amber-500 text-white text-[12px] tracking-wide font-bold px-6 py-3 rounded-xl hover:bg-amber-600 transition-colors shadow-sm">
            Jetzt anfragen
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-zinc-900 text-white py-32 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px"}} />
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-amber-500/5" />
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 bg-amber-500/15 border border-amber-500/25 rounded-full px-5 py-2 mb-10">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-amber-400 font-semibold">Meisterbetrieb · Seit 1998 · Stuttgart</span>
            </div>
            <h1 className="text-[60px] md:text-[72px] font-black tracking-[-0.02em] leading-[1.0] mb-8">
              Handwerk,<br />
              <span className="text-amber-400">dem man<br />vertrauen kann.</span>
            </h1>
            <p className="text-zinc-400 text-[17px] leading-[1.8] mb-12 max-w-lg">
              Maurer, Fliesenleger, Trockenbau, Sanierungen. Über 25 Jahre Erfahrung und mehr als 500 abgeschlossene Projekte in der Region Stuttgart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#anfrage" className="inline-flex items-center justify-center bg-amber-500 text-white px-10 py-4 rounded-xl text-[13px] font-black tracking-wide hover:bg-amber-600 transition-colors shadow-lg shadow-amber-900/30">
                Kostenloses Angebot
              </a>
              <a href="#referenzen" className="inline-flex items-center justify-center border border-zinc-700 text-zinc-300 px-10 py-4 rounded-xl text-[13px] font-semibold hover:border-zinc-500 hover:text-white transition-colors">
                Referenzen ansehen
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "25+", lbl: "Jahre Erfahrung", sub: "Meisterbetrieb seit 1998" },
              { val: "500+", lbl: "Projekte", sub: "Erfolgreich abgeschlossen" },
              { val: "12", lbl: "Fachkräfte", sub: "Im festen Team" },
              { val: "4.8★", lbl: "Google Rating", sub: "Aus 120 Bewertungen" },
            ].map(s => (
              <div key={s.lbl} className="bg-zinc-800/60 border border-zinc-700/50 rounded-2xl p-6">
                <p className="text-[32px] font-black text-white leading-none mb-1">{s.val}</p>
                <p className="text-amber-400 text-[12px] font-bold mb-1">{s.lbl}</p>
                <p className="text-zinc-600 text-[11px]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertrauen */}
      <section className="py-14 px-8 bg-amber-500">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { icon: "✓", title: "Meisterbetrieb", desc: "Staatlich geprüfte Qualität" },
            { icon: "◈", title: "Festpreisgarantie", desc: "Kein Angebot ohne Besichtigung" },
            { icon: "◇", title: "10 Jahre Garantie", desc: "Auf alle unsere Arbeiten" },
            { icon: "◎", title: "Terminzuverlässig", desc: "Pünktlich geliefert" },
          ].map(item => (
            <div key={item.title} className="flex items-center gap-4">
              <span className="text-2xl text-white/60 shrink-0">{item.icon}</span>
              <div>
                <p className="font-black text-white text-[14px]">{item.title}</p>
                <p className="text-amber-100 text-[12px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-28 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-[10px] tracking-[0.35em] uppercase text-amber-500 font-bold block mb-4">Leistungen</span>
            <h2 className="text-[48px] font-black tracking-tight">Was wir für Sie bauen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Maurerarbeiten", desc: "Neubau, Umbau, Sanierung – sauber ausgeführt und termingerecht fertig.", items: ["Außenmauern & Fundamente", "Keller & Untergeschoss", "Sanierungsarbeiten", "Sichtmauerwerk"] },
              { title: "Fliesenleger", desc: "Bad, Küche, Terrasse. Präzises Verlegen auch großformatiger Fliesen.", items: ["Bad & WC komplett", "Küchenspiegel & Böden", "Terrassen & Balkone", "Großformat bis 120×120"] },
              { title: "Trockenbau", desc: "Wände, Decken, Trennwände. Schnell, sauber und flexibel in der Gestaltung.", items: ["Trennwände & Vorsatzschalen", "Abgehängte Decken", "Schall- & Wärmeschutz", "Brandschutzsysteme"] },
              { title: "Badsanierung", desc: "Komplette Badsanierungen aus einer Hand. Vom Abriss bis zur fertigen Fliese.", items: ["Komplettabriss & Neubau", "Barrierefreier Umbau", "Seniorengerechte Bäder", "Design-Bäder"] },
              { title: "Außenbereich", desc: "Einfahrten, Terrassen, Wege in Pflaster, Naturstein oder Beton.", items: ["Pflastersteinarbeiten", "Natursteinverlegung", "Terrassenplatten", "Einfahrten & Carports"] },
              { title: "Notfalldienst", desc: "24/7 erreichbar bei Schäden am Bau. Sofortmaßnahmen innerhalb von 2 Stunden.", items: ["Wassereinbruch", "Sturmschäden", "Rissabdichtung", "Sofortreparaturen"] },
            ].map(s => (
              <div key={s.title} className="group p-8 border border-zinc-100 rounded-2xl hover:border-amber-200 hover:shadow-xl hover:shadow-amber-50 transition-all duration-300">
                <h3 className="text-[20px] font-black text-zinc-900 mb-3">{s.title}</h3>
                <p className="text-zinc-500 text-[14px] leading-[1.75] mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-[13px] text-zinc-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referenzen */}
      <section id="referenzen" className="py-28 px-8 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-[10px] tracking-[0.35em] uppercase text-amber-500 font-bold block mb-4">Referenzen</span>
            <h2 className="text-[48px] font-black tracking-tight">Abgeschlossene Projekte</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Komplett-Badsanierung", type: "Fliesenleger · Sanitär", loc: "Stuttgart-Mitte", year: "2025", size: "8 m²" },
              { title: "Rohbau Einfamilienhaus", type: "Maurer · Rohbau", loc: "Ludwigsburg", year: "2024", size: "180 m²" },
              { title: "Naturstein-Terrasse", type: "Außenbereich", loc: "Esslingen", year: "2025", size: "45 m²" },
              { title: "Mehrfamilienhaus Sanierung", type: "Trockenbau · Fliesen", loc: "Stuttgart-West", year: "2025", size: "320 m²" },
              { title: "Gepflasterte Einfahrt", type: "Außenbereich · Pflaster", loc: "Böblingen", year: "2025", size: "60 m²" },
              { title: "Umbau Ladenlokal", type: "Trockenbau · Maurer", loc: "Stuttgart City", year: "2024", size: "95 m²" },
            ].map(r => (
              <div key={r.title} className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
                <div className="h-44 bg-gradient-to-br from-zinc-200 to-zinc-300 relative group-hover:from-amber-50 group-hover:to-zinc-200 transition-colors duration-300">
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                    <span className="text-[10px] font-bold text-zinc-500">{r.year}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-black text-zinc-900 text-[16px] mb-1">{r.title}</p>
                  <p className="text-zinc-500 text-[12px] mb-4">{r.type}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-zinc-400 flex items-center gap-1">📍 {r.loc}</span>
                    <span className="text-[12px] font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">{r.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über */}
      <section id="uber-uns" className="py-28 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-amber-500 font-bold block mb-6">Über uns</span>
            <h2 className="text-[48px] font-black tracking-tight mb-8">Meisterbetrieb mit Geschichte.</h2>
            <p className="text-zinc-500 text-[16px] leading-[1.85] mb-6">
              1998 von Hans Bauer als Einzelbetrieb gegründet, ist Bauer Bau heute ein Familienbetrieb mit 12 Fachkräften. Drei Generationen Handwerk. Einer für alle, alle für das Ergebnis.
            </p>
            <p className="text-zinc-500 text-[16px] leading-[1.85] mb-10">
              Unser Versprechen: Wir behandeln Ihr Projekt wie unser eigenes. Termintreue, Sauberkeit und Qualität sind für uns keine Marketingbegriffe, sondern tägliche Praxis.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[["1998", "Gründungsjahr"], ["12", "Fachkräfte im Team"], ["500+", "Projekte abgeschlossen"], ["10 J.", "Gewährleistung"]].map(([v, l]) => (
                <div key={l} className="bg-zinc-50 border border-zinc-100 rounded-xl p-5">
                  <p className="text-[26px] font-black text-zinc-900">{v}</p>
                  <p className="text-[12px] text-zinc-500 mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-gradient-to-br from-zinc-200 to-zinc-300 rounded-3xl relative overflow-hidden">
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl p-6 shadow-xl">
              <p className="font-black text-zinc-900 text-[18px]">Hans Bauer</p>
              <p className="text-zinc-500 text-[13px]">Geschäftsführer · Maurermeister</p>
              <div className="flex gap-1 mt-3">
                {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-sm">★</span>)}
                <span className="text-zinc-500 text-[12px] ml-2">4.8 / 5 auf Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anfrage */}
      <section id="anfrage" className="py-28 px-8 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-amber-400 font-bold block mb-6">Kostenloses Angebot</span>
            <h2 className="text-[52px] font-black tracking-tight mb-8 leading-tight">Ihr Projekt.<br/>Unser Handwerk.</h2>
            <p className="text-zinc-400 text-[16px] leading-[1.85] mb-10">
              Beschreiben Sie uns Ihr Vorhaben. Wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot nach Vor-Ort-Besichtigung.
            </p>
            <div className="space-y-5">
              {["Kostenlose Erstberatung & Besichtigung", "Schriftliches Angebot mit Festpreis", "Termingerechte Ausführung garantiert", "10 Jahre Gewährleistung auf alle Leistungen"].map(item => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                    <span className="text-white text-[10px] font-black">✓</span>
                  </div>
                  <span className="text-zinc-300 text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10">
            <p className="font-black text-zinc-900 text-[20px] mb-8">Anfrage senden</p>
            <div className="space-y-5">
              {[["Name *", "text"], ["Telefonnummer *", "tel"], ["E-Mail", "email"]].map(([label, type]) => (
                <div key={label}>
                  <label className="text-[11px] font-bold text-zinc-500 tracking-wide block mb-2 uppercase">{label}</label>
                  <div className="h-12 rounded-xl border-2 border-zinc-100 bg-zinc-50 focus-within:border-amber-400 transition-colors" />
                </div>
              ))}
              <div>
                <label className="text-[11px] font-bold text-zinc-500 tracking-wide block mb-2 uppercase">Projektbeschreibung *</label>
                <div className="h-28 rounded-xl border-2 border-zinc-100 bg-zinc-50" />
              </div>
              <div className="h-14 rounded-xl bg-amber-500 flex items-center justify-center cursor-pointer hover:bg-amber-600 transition-colors">
                <span className="text-white font-black tracking-wide text-[13px]">Anfrage absenden →</span>
              </div>
              <p className="text-center text-[11px] text-zinc-400">Antwort innerhalb von 24 Stunden · Kostenlos & unverbindlich</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] text-zinc-600">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center"><span className="text-white font-black text-sm">B</span></div>
            <div><p className="font-black text-zinc-400">Bauer Bau & Handwerk</p><p className="text-zinc-700">Meisterbetrieb · Stuttgart</p></div>
          </div>
          <span>Demo von <Link href="/" className="text-zinc-500 hover:text-white transition-colors">Nico Studio</Link></span>
          <span>© 2026 Bauer Bau GmbH</span>
        </div>
      </footer>
    </main>
  );
}
import Link from "next/link";

export const metadata = {
  title: "PEAK Personal Training – Demo | Nico Studio",
  description: "Demo-Website für ein Fitness & Personal Training Studio – erstellt von Nico Studio.",
};

export default function FitnessDemo() {
  return (
    <main className="bg-[#080808] text-white antialiased">

      {/* Demo Banner */}
      <div className="bg-lime-400 text-zinc-900 text-center py-2.5 px-4 text-[12px] tracking-wide">
        <span className="text-zinc-700">Demo-Website von</span>{" "}
        <Link href="/" className="font-bold text-zinc-900 hover:text-zinc-700 transition-colors">
          Nico Studio
        </Link>
        <span className="text-zinc-600 mx-3">·</span>
        <Link href="/#kontakt" className="font-bold underline underline-offset-2 hover:text-zinc-700 transition-colors">
          Eigene Website anfragen →
        </Link>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#080808]/95 backdrop-blur border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter">
            PEAK<span className="text-lime-400">.</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            {["Training", "Preise", "Trainer", "Kontakt"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>
          <a href="#start"
            className="bg-lime-400 text-zinc-900 text-sm px-5 py-2.5 rounded-full font-black hover:bg-lime-300 transition-colors">
            Jetzt starten
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[95vh] flex flex-col justify-center px-6 pt-10 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-lime-400">
                Personal Training · Frankfurt
              </span>
            </span>
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-[100px] font-black tracking-tighter leading-[0.92] mb-8">
            KEIN<br />
            <span className="text-lime-400">BULLSHIT.</span><br />
            NUR ERGEBNISSE.
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-zinc-400 text-xl leading-relaxed">
              Personal Training, das funktioniert. Individuell, konsequent,
              messbar. Du kommst für Ziele. Ich sorge dafür, dass du sie erreichst.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#start"
                className="inline-flex items-center justify-center bg-lime-400 text-zinc-900 px-8 py-4 rounded-full text-sm font-black hover:bg-lime-300 transition-colors">
                Gratis Erstgespräch
              </a>
              <a href="#training"
                className="inline-flex items-center justify-center border border-zinc-700 text-zinc-300 px-8 py-4 rounded-full text-sm font-bold hover:border-zinc-400 hover:text-white transition-colors">
                Training ansehen
              </a>
            </div>
          </div>
          {/* Stats bar */}
          <div className="grid grid-cols-4 gap-4 mt-20 pt-10 border-t border-zinc-800">
            {[
              { val: "200+", lbl: "Klienten" },
              { val: "8 J.", lbl: "Erfahrung" },
              { val: "5★", lbl: "Bewertung" },
              { val: "93%", lbl: "Zielerreichung" },
            ].map((s) => (
              <div key={s.lbl}>
                <p className="text-3xl font-black text-lime-400">{s.val}</p>
                <p className="text-zinc-500 text-sm mt-1">{s.lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section id="training" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-lime-400 block mb-4">
              Training
            </span>
            <h2 className="text-5xl font-black tracking-tight">Was wir trainieren</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "1:1 Personal Training",
                tag: "Flagship",
                desc: "Komplett individualisiertes Training. Jede Session auf dein Ziel ausgerichtet. Kein Standard-Plan.",
                details: ["Individuelle Programmplanung", "Technik-Coaching", "Ernährungsberatung", "Wöchentliches Check-in"],
                highlight: true,
              },
              {
                title: "Online Coaching",
                tag: "Flexibel",
                desc: "Mein Coaching, dein Ort. Trainingsplan, Check-ins und Feedback per App.",
                details: ["Trainingsplan digital", "Video-Feedback", "Monatliche Anpassung", "Community Zugang"],
                highlight: false,
              },
              {
                title: "Transformation Programme",
                tag: "12 Wochen",
                desc: "Strukturiertes 12-Wochen-Programm für maximale Veränderung. Mit Ernährungsplan.",
                details: ["Komplett-Paket", "Ernährungsplan", "2x/Woche Training", "Vorher-Nachher Fotos"],
                highlight: false,
              },
              {
                title: "Gruppen-Training",
                tag: "3–6 Personen",
                desc: "Training in kleinen Gruppen. Günstiger als 1:1, persönlicher als das Studio.",
                details: ["Max. 6 Personen", "Gemeinsame Ziele", "Teamdynamik", "Günstiger Einstieg"],
                highlight: false,
              },
            ].map((t) => (
              <div key={t.title}
                className={`group p-8 rounded-3xl border transition-all duration-300 ${
                  t.highlight
                    ? "bg-lime-400 border-lime-400 text-zinc-900"
                    : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"
                }`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-[10px] font-black tracking-widest uppercase ${t.highlight ? "text-zinc-700" : "text-lime-400"}`}>
                    {t.tag}
                  </span>
                </div>
                <h3 className={`text-2xl font-black mb-3 ${t.highlight ? "text-zinc-900" : "text-white"}`}>
                  {t.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${t.highlight ? "text-zinc-700" : "text-zinc-400"}`}>
                  {t.desc}
                </p>
                <ul className="space-y-2">
                  {t.details.map((d) => (
                    <li key={d} className={`flex items-center gap-2 text-sm font-medium ${t.highlight ? "text-zinc-800" : "text-zinc-300"}`}>
                      <span className={`text-xs font-black ${t.highlight ? "text-zinc-700" : "text-lime-400"}`}>✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer */}
      <section id="trainer" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-lime-400 block mb-4">
              Dein Trainer
            </span>
            <h2 className="text-5xl font-black tracking-tight mb-6">
              Ich bin Max.<br />
              <span className="text-zinc-500">Kein Influencer.</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              8 Jahre persönliches Training. Staatlich geprüfter Trainer, Ernährungscoach,
              Ex-Leistungssportler. Ich kenne den Unterschied zwischen Training für Social Media
              und Training für echte Ergebnisse.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-10">
              Du bekommst kein Programm von der Stange. Du bekommst meine volle Aufmerksamkeit.
            </p>
            <div className="flex flex-wrap gap-2">
              {["B-Lizenz DFB", "Ernährungscoach IHK", "Crossfit L1", "FMS zertifiziert"].map((cert) => (
                <span key={cert}
                  className="text-xs font-bold border border-zinc-700 text-zinc-300 px-3 py-1.5 rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="aspect-[3/4] rounded-3xl bg-zinc-900 border border-zinc-800 relative">
            <div className="absolute bottom-6 left-6 right-6 bg-lime-400 rounded-2xl p-5">
              <p className="font-black text-zinc-900">Gratis Erstgespräch</p>
              <p className="text-xs text-zinc-700 mt-1">30 Min. · Kein Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preise" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-lime-400 block mb-4">
              Preise
            </span>
            <h2 className="text-5xl font-black tracking-tight">Investition in dich</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Online", price: "149", unit: "/ Monat", features: ["Trainingsplan", "App-Tracking", "Chat-Support", "Monatliches Update"] },
              { name: "Hybrid", price: "299", unit: "/ Monat", features: ["2x Training/Woche", "Online zwischen Sessions", "Ernährungsplan", "Priority Support"], hot: true },
              { name: "Premium 1:1", price: "499", unit: "/ Monat", features: ["3x Training/Woche", "Volle Betreuung", "Ernährung & Lifestyle", "24/7 Erreichbar"] },
            ].map((p) => (
              <div key={p.name}
                className={`rounded-3xl p-8 border ${p.hot ? "bg-lime-400 border-lime-400" : "bg-zinc-900 border-zinc-800"}`}>
                {p.hot && (
                  <span className="inline-block text-[10px] font-black tracking-widest uppercase bg-zinc-900 text-lime-400 px-3 py-1 rounded-full mb-4">
                    Beliebteste Wahl
                  </span>
                )}
                <p className={`font-black mb-2 ${p.hot ? "text-zinc-900" : "text-zinc-400"}`}>{p.name}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-5xl font-black ${p.hot ? "text-zinc-900" : "text-white"}`}>€{p.price}</span>
                  <span className={`text-sm ${p.hot ? "text-zinc-700" : "text-zinc-500"}`}>{p.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm font-medium ${p.hot ? "text-zinc-800" : "text-zinc-300"}`}>
                      <span className={`text-xs font-black ${p.hot ? "text-zinc-700" : "text-lime-400"}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#start"
                  className={`block text-center py-3.5 rounded-full text-sm font-black transition-colors ${
                    p.hot
                      ? "bg-zinc-900 text-lime-400 hover:bg-zinc-800"
                      : "border border-zinc-700 text-zinc-300 hover:border-lime-400 hover:text-lime-400"
                  }`}>
                  Starten
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-28 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-6xl font-black tracking-tight mb-6">
            Bereit?<br />
            <span className="text-lime-400">Dann los.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Gratis Erstgespräch. 30 Minuten. Kein Bullshit, kein Verkaufsdruck.
            Wir schauen, ob wir zusammenpassen.
          </p>
          <a href="mailto:info@peak-training.de"
            className="inline-flex items-center gap-2 bg-lime-400 text-zinc-900 px-10 py-5 rounded-full text-base font-black hover:bg-lime-300 transition-colors">
            Gratis Erstgespräch buchen →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <span className="font-black text-zinc-400">PEAK<span className="text-lime-400">.</span> Frankfurt</span>
          <span>Demo-Website von{" "}
            <Link href="/" className="text-zinc-400 hover:text-white transition-colors">Nico Studio</Link>
          </span>
          <span>© 2026 PEAK Training</span>
        </div>
      </footer>
    </main>
  );
}
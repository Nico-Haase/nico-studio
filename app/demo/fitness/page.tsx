import Link from "next/link";

export const metadata = { title: "PEAK Personal Training – Demo | Nico Studio" };

export default function FitnessDemo() {
  return (
    <main className="bg-[#060606] text-white antialiased">
      <div className="bg-lime-400 text-zinc-900 text-center py-2.5 px-4 text-[11px] tracking-[0.15em]">
        <span className="text-zinc-600">Demo von</span>{" "}
        <Link href="/" className="font-black hover:text-zinc-700 transition-colors">Nico Studio</Link>
        <span className="text-zinc-500 mx-3">·</span>
        <Link href="/#kontakt" className="font-black underline underline-offset-2 hover:text-zinc-700 transition-colors">Eigene Website anfragen →</Link>
      </div>

      <nav className="sticky top-0 z-50 bg-[#060606]/95 backdrop-blur-xl border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-8 h-18 flex items-center justify-between py-4">
          <div>
            <p className="text-[24px] font-black tracking-tighter">PEAK<span className="text-lime-400">.</span></p>
            <p className="text-[8px] tracking-[0.35em] uppercase text-zinc-600 -mt-0.5">Personal Training Frankfurt</p>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Training", "Ergebnisse", "Trainer", "Preise"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[12px] tracking-[0.1em] uppercase text-zinc-500 hover:text-white transition-colors font-medium">{item}</a>
            ))}
          </div>
          <a href="#start" className="bg-lime-400 text-zinc-900 text-[12px] tracking-wide font-black px-7 py-3 rounded-full hover:bg-lime-300 transition-colors">
            Gratis Erstgespräch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-10 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "48px 48px"}} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40%] h-[80%] bg-lime-400/3 blur-3xl" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="mb-10">
            <div className="inline-flex items-center gap-3 bg-lime-400/10 border border-lime-400/20 rounded-full px-5 py-2.5">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-lime-400 font-bold">Personal Training · Frankfurt am Main</span>
            </div>
          </div>
          <h1 className="text-[80px] sm:text-[100px] md:text-[130px] font-black tracking-[-0.04em] leading-[0.88] mb-10">
            KEIN<br />
            <span className="text-lime-400">BULL</span>SHIT.<br />
            <span className="text-zinc-700">NUR ZIELE.</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-end mt-4">
            <p className="text-zinc-400 text-[18px] leading-[1.85]">
              Personal Training, das auf dich ausgerichtet ist. Nicht auf den Durchschnitt, nicht auf irgendein Programm. Auf dich, deine Ziele, deine Ausgangslage.
            </p>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#start" className="inline-flex items-center justify-center bg-lime-400 text-zinc-900 px-10 py-4 rounded-full text-[13px] font-black tracking-wide hover:bg-lime-300 transition-colors">
                  Gratis Erstgespräch
                </a>
                <a href="#training" className="inline-flex items-center justify-center border border-zinc-800 text-zinc-400 px-10 py-4 rounded-full text-[13px] font-bold hover:border-zinc-600 hover:text-white transition-colors">
                  Training ansehen
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6 mt-16 pt-12 border-t border-zinc-900">
            {[["200+", "Klienten trainiert"], ["8 J.", "Coaching-Erfahrung"], ["5.0 ★", "Google Bewertung"], ["93 %", "Zielerreichungsrate"]].map(([v, l]) => (
              <div key={l}>
                <p className="text-[36px] font-black text-lime-400 tracking-tight leading-none">{v}</p>
                <p className="text-zinc-500 text-[12px] mt-2 leading-snug">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section id="training" className="py-28 px-8 md:px-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase text-lime-400 font-bold mb-5">Was wir trainieren</p>
            <h2 className="text-[60px] font-black tracking-tighter">TRAINING</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { tag: "Flagship", title: "1:1 Personal Training", desc: "Komplett auf dich zugeschnittenes Training. Jede Session geplant, jede Bewegung analysiert, jedes Feedback sofort. Das ist der Unterschied zwischen Training und Transformation.", details: ["Wöchentliche Programmplanung", "Technik-Analyse per Video", "Ernährungsberatung inklusive", "Wöchentliches Fortschritts-Check-in", "Zugang zum privaten PEAK-Kanal"], featured: true, price: "ab 299 € / Monat" },
              { tag: "Flexibel", title: "Online Coaching", desc: "Mein Coaching, dein Ort, deine Zeit. Trainingsplan per App, Video-Feedback innerhalb von 48 Stunden, monatliche Anpassung basierend auf deinem Fortschritt.", details: ["Individueller Trainingsplan digital", "Video-Feedback auf Technik", "Monatliche Plan-Anpassung", "Ernährungsplan optional", "Community-Zugang"], price: "ab 149 € / Monat" },
              { tag: "12 Wochen", title: "Transformation Programm", desc: "Ein strukturiertes 12-Wochen-Intensivprogramm für maximale Veränderung. Mit Ernährungsplan, täglichem Check-in und garantierten, messbaren Ergebnissen.", details: ["3x Training pro Woche", "Vollständiger Ernährungsplan", "Tägliche Accountability", "Vorher-Nachher-Dokumentation", "Lifetime Zugang zur Community"], price: "ab 899 € Komplett" },
              { tag: "3–6 Personen", title: "Semi-Privat Training", desc: "Training in einer kleinen, ausgewählten Gruppe. Günstiger als 1:1, persönlicher als jedes Gym. Gemeinsame Energie, individuelle Aufmerksamkeit.", details: ["Max. 6 Personen pro Session", "Individuelle Anpassung", "Gemeinsame Herausforderungen", "Community-Dynamik", "Günstiger Einstieg"], price: "ab 199 € / Monat" },
            ].map(t => (
              <div key={t.title} className={`group p-10 rounded-3xl border transition-all duration-300 ${t.featured ? 'bg-lime-400 border-lime-400' : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600'}`}>
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[10px] tracking-[0.3em] uppercase font-black ${t.featured ? 'text-zinc-700' : 'text-lime-400'}`}>{t.tag}</span>
                  <span className={`text-[13px] font-bold ${t.featured ? 'text-zinc-800' : 'text-zinc-400'}`}>{t.price}</span>
                </div>
                <h3 className={`text-[28px] font-black tracking-tight mb-5 ${t.featured ? 'text-zinc-900' : 'text-white'}`}>{t.title}</h3>
                <p className={`text-[14px] leading-[1.8] mb-8 ${t.featured ? 'text-zinc-700' : 'text-zinc-400'}`}>{t.desc}</p>
                <ul className="space-y-3">
                  {t.details.map(d => (
                    <li key={d} className={`flex items-center gap-3 text-[13px] font-medium ${t.featured ? 'text-zinc-800' : 'text-zinc-300'}`}>
                      <span className={`text-[10px] font-black ${t.featured ? 'text-zinc-600' : 'text-lime-400'}`}>✓</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ergebnisse */}
      <section id="ergebnisse" className="py-28 px-8 md:px-16 bg-[#060606]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase text-lime-400 font-bold mb-5">Echte Ergebnisse</p>
            <h2 className="text-[60px] font-black tracking-tighter">WAS KLIENTEN SAGEN</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "MARCUS K.", role: "1:1 Klient · 6 Monate", result: "-18 kg in 6 Monaten", text: "Ich habe in 6 Monaten mehr erreicht als in 3 Jahren auf eigene Faust im Fitnessstudio. Max weiß nicht nur wie man trainiert, er weiß wie man Menschen motiviert und bei der Stange hält." },
              { name: "JULIA F.", role: "Transformation Programm", result: "Erste Klimmzüge nach 35", text: "Als Frau über 35 dachte ich, bestimmte Ziele wären nicht mehr erreichbar. Das Programm hat mich vom Gegenteil überzeugt. Strukturiert, effektiv und mit echter Begeisterung vermittelt." },
              { name: "TOBIAS R.", role: "Online Coaching · 4 Monate", result: "+12 kg Muskelmasse", text: "Online-Coaching mit dem Niveau von Personal Training. Video-Feedback auf jede Übung, wöchentliche Anpassungen. Ich konnte von zuhause aus bessere Ergebnisse erzielen als je zuvor." },
            ].map(t => (
              <div key={t.name} className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10 hover:border-zinc-700 transition-colors">
                <div className="inline-block bg-lime-400/10 border border-lime-400/20 rounded-full px-4 py-1.5 mb-8">
                  <p className="text-lime-400 text-[11px] font-bold tracking-wide">{t.result}</p>
                </div>
                <p className="text-zinc-300 text-[15px] leading-[1.85] mb-8 font-light">"{t.text}"</p>
                <div className="border-t border-zinc-900 pt-6">
                  <p className="font-black text-white text-[14px] tracking-tight">{t.name}</p>
                  <p className="text-zinc-600 text-[11px] tracking-[0.1em] mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer */}
      <section id="trainer" className="py-28 px-8 md:px-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-lime-400 font-bold mb-6">Dein Trainer</p>
            <h2 className="text-[56px] font-black tracking-tighter mb-3">Ich bin Max.</h2>
            <p className="text-[24px] font-black text-zinc-600 tracking-tight mb-10">Kein Influencer. Ein Trainer.</p>
            <p className="text-zinc-400 text-[16px] leading-[1.85] mb-6">
              8 Jahre Personal Training. Staatlich geprüfter Trainer, zertifizierter Ernährungscoach, Ex-Leistungssportler im Kraftdreikampf. Ich kenne den Unterschied zwischen Training für Instagram und Training für echte Ergebnisse.
            </p>
            <p className="text-zinc-400 text-[16px] leading-[1.85] mb-12">
              Du bekommst keine Routine von der Stange. Du bekommst meine volle Aufmerksamkeit, meine jahrelange Erfahrung und einen Plan, der wirklich für dich funktioniert.
            </p>
            <div className="flex flex-wrap gap-2">
              {["B-Lizenz DFB", "Ernährungscoach IHK", "Crossfit L1", "FMS Level 2", "NASM Certified"].map(c => (
                <span key={c} className="text-[11px] font-bold border border-zinc-800 text-zinc-400 px-4 py-2 rounded-full">{c}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-lime-400 rounded-2xl p-6">
                  <p className="font-black text-zinc-900 text-[18px]">Gratis Erstgespräch</p>
                  <p className="text-zinc-700 text-[13px] mt-1">30 Min. · Online oder vor Ort · Kein Commitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="py-28 px-8 md:px-16 bg-[#060606]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-lime-400 font-bold mb-5">Investition</p>
            <h2 className="text-[60px] font-black tracking-tighter">PREISE</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Online", price: "149", unit: "/ Monat", features: ["Individueller Trainingsplan", "App-Tracking", "Video-Feedback", "Monatliche Anpassung"] },
              { name: "Semi-Privat", price: "199", unit: "/ Monat", features: ["2–3x Training/Woche", "Max. 6 Personen", "Ernährungsberatung", "Community-Zugang"], hot: true },
              { name: "1:1 Premium", price: "299", unit: "/ Monat", features: ["3x Training/Woche", "Ernährungsplan", "Täglicher Support", "24/7 Erreichbar"] },
            ].map(p => (
              <div key={p.name} className={`rounded-3xl p-10 border ${p.hot ? 'bg-lime-400 border-lime-400' : 'bg-zinc-900 border-zinc-800'}`}>
                {p.hot && <span className="inline-block text-[10px] font-black tracking-widest uppercase bg-zinc-900 text-lime-400 px-3 py-1.5 rounded-full mb-6">Meistgewählt</span>}
                <p className={`font-black text-[14px] mb-3 ${p.hot ? 'text-zinc-800' : 'text-zinc-500'}`}>{p.name}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`text-[56px] font-black leading-none tracking-tight ${p.hot ? 'text-zinc-900' : 'text-white'}`}>€{p.price}</span>
                  <span className={`text-[14px] ${p.hot ? 'text-zinc-700' : 'text-zinc-500'}`}>{p.unit}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {p.features.map(f => (
                    <li key={f} className={`flex items-center gap-3 text-[14px] font-medium ${p.hot ? 'text-zinc-800' : 'text-zinc-300'}`}>
                      <span className={`text-[10px] font-black ${p.hot ? 'text-zinc-600' : 'text-lime-400'}`}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#start" className={`block text-center py-4 rounded-full text-[13px] font-black tracking-wide transition-colors ${p.hot ? 'bg-zinc-900 text-lime-400 hover:bg-zinc-800' : 'border border-zinc-700 text-zinc-300 hover:border-lime-400 hover:text-lime-400'}`}>
                  Jetzt starten
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-36 px-8 bg-[#060606]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[80px] md:text-[100px] font-black tracking-tighter leading-[0.9] mb-10">
            BEREIT?<br /><span className="text-lime-400">DANN LOS.</span>
          </h2>
          <p className="text-zinc-400 text-[18px] leading-relaxed mb-14 max-w-lg mx-auto">
            30 Minuten. Gratis. Kein Bullshit, kein Verkaufsdruck. Wir schauen ob wir zusammenpassen und ich erkläre dir, wie dein Programm aussehen würde.
          </p>
          <a href="mailto:info@peak-training.de" className="inline-flex items-center gap-3 bg-lime-400 text-zinc-900 px-14 py-6 rounded-full text-[15px] font-black hover:bg-lime-300 transition-colors">
            Gratis Erstgespräch buchen →
          </a>
          <p className="text-zinc-700 text-[12px] mt-8 tracking-wide">Antwort innerhalb von 2 Stunden · Frankfurt & Online</p>
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-zinc-700">
          <p className="text-[20px] font-black text-zinc-500">PEAK<span className="text-lime-400">.</span></p>
          <span>Demo von <Link href="/" className="text-zinc-500 hover:text-white transition-colors">Nico Studio</Link></span>
          <span>© 2026 PEAK Personal Training</span>
        </div>
      </footer>
    </main>
  );
}
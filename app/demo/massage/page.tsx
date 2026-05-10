import Link from "next/link";

export const metadata = {
  title: "Serenity Massage & Wellness – Demo | Nico Studio",
  description: "Demo-Website für ein Massage und Wellness Studio – erstellt von Nico Studio.",
};

export default function MassageDemo() {
  return (
    <main className="bg-[#f8f6f1] text-[#1c1a17] antialiased">

      {/* Demo Banner */}
      <div className="bg-[#1c1a17] text-white text-center py-2.5 px-4 text-[12px] tracking-wide">
        <span className="text-zinc-400">Demo-Website von</span>{" "}
        <Link href="/" className="font-semibold text-white hover:text-zinc-300 transition-colors">Nico Studio</Link>
        <span className="text-zinc-500 mx-3">·</span>
        <Link href="/#kontakt" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Eigene Website anfragen →</Link>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#f8f6f1]/95 backdrop-blur-md border-b border-stone-200/40">
        <div className="max-w-6xl mx-auto px-8 h-18 flex items-center justify-between py-4">
          <div>
            <span className="text-xl font-light tracking-[0.15em] text-[#1c1a17] uppercase">Serenity</span>
            <span className="text-xs tracking-[0.3em] text-stone-400 block uppercase">Wellness & Massage</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[13px] tracking-wide text-stone-500">
            {["Angebote", "Ablauf", "Preise", "Kontakt"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#1c1a17] transition-colors">{item}</a>
            ))}
          </div>
          <a href="#termin" className="border border-[#1c1a17] text-[#1c1a17] text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#1c1a17] hover:text-white transition-all duration-300">
            Termin buchen
          </a>
        </div>
      </nav>

      {/* Hero – full bleed, zen */}
      <section className="min-h-screen flex items-center px-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-stone-200/40" />
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-8">München · Seit 2016</p>
            <h1 className="text-6xl md:text-7xl font-light tracking-tight leading-[1.1] mb-8 text-[#1c1a17]">
              Stille.<br />
              Wärme.<br />
              <em className="italic text-stone-400">Heilung.</em>
            </h1>
            <p className="text-stone-500 text-lg leading-loose mb-12 max-w-sm">
              Professionelle Massagetherapie, die tief wirkt. Jede Behandlung
              individuell, jeder Moment ganz für dich.
            </p>
            <div className="flex items-center gap-6">
              <a href="#termin" className="bg-[#1c1a17] text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-stone-700 transition-colors">
                Termin vereinbaren
              </a>
              <a href="#angebote" className="text-xs tracking-[0.2em] uppercase text-stone-500 hover:text-[#1c1a17] transition-colors">
                Angebote entdecken →
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-stone-300/60 rounded-none relative">
              <div className="absolute -bottom-8 -left-8 bg-[#f8f6f1] border border-stone-200 p-6 shadow-sm">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-sm">★</span>)}
                </div>
                <p className="text-xs text-stone-600 max-w-[160px] leading-relaxed">"Die beste Massage, die ich je erlebt habe."</p>
                <p className="text-[10px] text-stone-400 mt-2">Maria K., Kundin seit 2021</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-stone-800 text-white p-5 text-center">
                <p className="text-3xl font-light">8</p>
                <p className="text-[10px] tracking-widest uppercase text-stone-400 mt-1">Jahre</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className="py-28 px-8 bg-[#1c1a17] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-stone-500 mb-8">Unsere Philosophie</p>
          <h2 className="text-4xl md:text-5xl font-light leading-[1.3] text-stone-100">
            "Der Körper spricht. <em className="italic text-stone-400">Wir hören zu.</em>"
          </h2>
          <div className="w-12 h-px bg-stone-600 mx-auto my-10" />
          <p className="text-stone-400 text-lg leading-loose max-w-xl mx-auto">
            Jede Behandlung beginnt mit einem Gespräch. Was brauchst du heute?
            Entspannung, Schmerzlinderung oder einfach Zeit für dich?
          </p>
        </div>
      </section>

      {/* Angebote */}
      <section id="angebote" className="py-28 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-4">Behandlungen</p>
          <h2 className="text-4xl font-light mb-20">Unsere Angebote</h2>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { name: "Klassische Massage", dauer: "60 Min", preis: "75 €", desc: "Ganzkörperentspannung mit langen, fließenden Griffen. Löst Verspannungen, beruhigt das Nervensystem." },
              { name: "Hot Stone Massage", dauer: "90 Min", preis: "115 €", desc: "Vulkanische Basaltsteine wärmen die Muskulatur tief durch. Intensiv entspannend, wohltuend bis in den Kern.", featured: true },
              { name: "Aromatherapie", dauer: "75 Min", preis: "95 €", desc: "Erlesene ätherische Öle verstärken die Wirkung der Massage. Körper, Geist und Seele in Balance." },
              { name: "Tiefengewebsmassage", dauer: "60 Min", preis: "85 €", desc: "Gezielte Arbeit in tiefen Muskelschichten. Effektiv bei chronischen Verspannungen und Schmerzen." },
              { name: "Rücken & Nacken", dauer: "45 Min", preis: "60 €", desc: "Fokussierte Behandlung der häufigsten Problemzonen. Ideal für den Büroalltag." },
              { name: "Wellness-Ritual", dauer: "120 Min", preis: "155 €", desc: "Das komplette Erlebnis. Hot Stone, Aromaöl und Ganzkörpermassage in einer Session." },
            ].map(s => (
              <div key={s.name} className={`p-8 border-b border-r border-stone-100 ${s.featured ? 'bg-stone-50' : 'bg-white'} hover:bg-stone-50 transition-colors group`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-[#1c1a17]">{s.name}</h3>
                  {s.featured && <span className="text-[9px] tracking-widest uppercase bg-stone-800 text-white px-2 py-1">Beliebt</span>}
                </div>
                <p className="text-stone-400 text-xs mb-4">{s.dauer}</p>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-light text-[#1c1a17]">{s.preis}</span>
                  <a href="#termin" className="text-xs tracking-wide text-stone-400 group-hover:text-[#1c1a17] transition-colors">Buchen →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über */}
      <section className="py-28 px-8 bg-[#f8f6f1]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="aspect-[4/5] bg-stone-300/60 relative">
            <div className="absolute bottom-0 right-0 left-0 bg-[#1c1a17]/80 backdrop-blur p-6">
              <p className="text-white font-light text-lg">Sandra Meier</p>
              <p className="text-stone-400 text-xs tracking-widest uppercase mt-1">Zertifizierte Massagetherapeutin</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-6">Über mich</p>
            <h2 className="text-4xl font-light mb-8">Mit Erfahrung und Hingabe.</h2>
            <p className="text-stone-500 leading-loose mb-6">
              Seit 8 Jahren begleite ich Menschen auf ihrem Weg zu mehr Wohlbefinden.
              Jede Behandlung ist für mich eine Begegnung, kein Dienstleistungsvorgang.
            </p>
            <p className="text-stone-500 leading-loose mb-10">
              Ausgebildet in klassischer Massagetherapie, Hot Stone und Aromatherapie.
              Weiterbildungen in ganzheitlicher Körperarbeit und Stressmedizin.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[["120+", "Kunden"], ["8 J.", "Erfahrung"], ["6", "Techniken"]].map(([v, l]) => (
                <div key={l} className="text-center p-4 border border-stone-200">
                  <p className="text-2xl font-light text-[#1c1a17]">{v}</p>
                  <p className="text-[10px] tracking-widest uppercase text-stone-400 mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="py-28 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-4 text-center">Wie es läuft</p>
          <h2 className="text-4xl font-light mb-16 text-center">Dein Weg zur Behandlung</h2>
          <div className="space-y-0">
            {[
              { n: "01", title: "Termin buchen", desc: "Online, telefonisch oder per E-Mail. Wähle Behandlung, Datum und Uhrzeit." },
              { n: "02", title: "Vorgespräch", desc: "Kurzes Gespräch zu deinen Wünschen, Beschwerden und Erwartungen." },
              { n: "03", title: "Behandlung", desc: "Vollständige Aufmerksamkeit, ruhige Atmosphäre, individuelle Anpassung." },
              { n: "04", title: "Nachruhe", desc: "Zeit zum Ankommen. Kräutertee, Ruhe, sanfter Übergang zurück in den Alltag." },
            ].map(step => (
              <div key={step.n} className="flex gap-12 py-8 border-b border-stone-100 group hover:bg-stone-50 px-4 transition-colors">
                <span className="text-4xl font-light text-stone-200 group-hover:text-stone-300 transition-colors shrink-0">{step.n}</span>
                <div>
                  <h3 className="font-medium text-[#1c1a17] mb-2">{step.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-8 bg-[#1c1a17]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-stone-600 mb-16 text-center">Kundenstimmen</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria K.", text: "Zum ersten Mal seit Jahren habe ich wirklich abschalten können. Die Hot Stone Massage war ein Erlebnis für alle Sinne.", stars: 5 },
              { name: "Thomas B.", text: "Professionell, einfühlsam und wirklich heilsam. Meine chronischen Rückenschmerzen haben sich nach 3 Sitzungen deutlich gebessert.", stars: 5 },
              { name: "Julia S.", text: "Das Wellness-Ritual war ein Geschenk an mich selbst. 2 Stunden komplette Auszeit. Ich komme jeden Monat wieder.", stars: 5 },
            ].map(t => (
              <div key={t.name} className="border border-stone-800 p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                </div>
                <p className="text-stone-300 leading-loose mb-6 font-light">"{t.text}"</p>
                <p className="text-stone-500 text-xs tracking-widest uppercase">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="termin" className="py-28 px-8 bg-[#f8f6f1]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-6">Termin buchen</p>
          <h2 className="text-4xl font-light mb-6">Bereit für deine Auszeit?</h2>
          <p className="text-stone-500 leading-loose mb-12">
            Schreib mir eine Nachricht oder ruf an. Ich melde mich innerhalb von 24 Stunden
            mit einem passenden Termin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@serenity-wellness.de" className="bg-[#1c1a17] text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-stone-700 transition-colors">
              E-Mail schreiben
            </a>
            <a href="tel:+4989123456" className="border border-stone-300 text-[#1c1a17] text-xs tracking-[0.2em] uppercase px-10 py-4 hover:border-stone-500 transition-colors">
              Anrufen
            </a>
          </div>
          <p className="text-stone-400 text-xs mt-8">Mo–Fr 9–19 Uhr · Sa 10–16 Uhr · Maxvorstadt, München</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1a17] py-10 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <span className="tracking-widest uppercase text-stone-500">Serenity Wellness · München</span>
          <span>Demo von <Link href="/" className="text-stone-400 hover:text-white transition-colors">Nico Studio</Link></span>
          <span>© 2026 Serenity Wellness</span>
        </div>
      </footer>
    </main>
  );
}
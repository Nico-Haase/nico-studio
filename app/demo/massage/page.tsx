import Link from "next/link";

export const metadata = {
  title: "Serenity Massage & Wellness – Demo | Nico Studio",
  description: "Demo-Website für ein Premium Massage Studio.",
};

export default function MassageDemo() {
  return (
    <main className="bg-[#f7f4ef] text-[#1a1714] antialiased">

      {/* Demo Banner */}
      <div className="bg-[#1a1714] text-white text-center py-2.5 px-4 text-[11px] tracking-[0.15em]">
        <span className="text-zinc-500">Demo von</span>{" "}
        <Link href="/" className="font-semibold text-white hover:text-zinc-300 transition-colors">Nico Studio</Link>
        <span className="text-zinc-600 mx-3">·</span>
        <Link href="/#kontakt" className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors">Eigene Website anfragen →</Link>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#f7f4ef]/95 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <div>
            <p className="text-[18px] font-light tracking-[0.12em] text-[#1a1714] uppercase">Serenity</p>
            <p className="text-[9px] tracking-[0.35em] text-stone-400 uppercase -mt-0.5">Wellness & Massage · München</p>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Behandlungen", "Über uns", "Preise", "Kontakt"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[12px] tracking-[0.08em] text-stone-500 hover:text-[#1a1714] transition-colors">{item}</a>
            ))}
          </div>
          <a href="#termin" className="border border-[#1a1714] text-[#1a1714] text-[11px] tracking-[0.18em] uppercase px-7 py-3 hover:bg-[#1a1714] hover:text-white transition-all duration-300">
            Termin buchen
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[95vh] flex items-center px-8 py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-stone-200/50" />
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-stone-400 mb-10 flex items-center gap-3">
              <span className="w-8 h-px bg-stone-400" />Seit 2016 in München
            </p>
            <h1 className="text-[64px] md:text-[80px] font-extralight tracking-[-0.02em] leading-[1.05] mb-10 text-[#1a1714]">
              Stille.<br />
              Wärme.<br />
              <span className="italic text-stone-400 font-light">Heilung.</span>
            </h1>
            <p className="text-stone-500 text-[17px] leading-[1.8] mb-14 max-w-[360px]">
              Professionelle Massagetherapie, die wirklich tief wirkt. Jede Behandlung individuell abgestimmt, jeder Moment ganz für dich.
            </p>
            <div className="flex items-center gap-6">
              <a href="#termin" className="bg-[#1a1714] text-white text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-stone-700 transition-colors">
                Termin vereinbaren
              </a>
              <a href="#behandlungen" className="text-[11px] tracking-[0.18em] uppercase text-stone-500 hover:text-[#1a1714] transition-colors flex items-center gap-2">
                Angebote <span>→</span>
              </a>
            </div>
            <div className="flex gap-10 mt-16 pt-10 border-t border-stone-200">
              {[["120+", "zufriedene Kunden"], ["8 J.", "Erfahrung"], ["6", "Behandlungen"]].map(([v, l]) => (
                <div key={l}>
                  <p className="text-[28px] font-light text-[#1a1714]">{v}</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-stone-400 mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-[3/4] bg-gradient-to-br from-stone-300/80 to-stone-400/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-[#f7f4ef]/95 backdrop-blur p-6">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-amber-500 text-base">★</span>)}
                  </div>
                  <p className="text-[13px] text-stone-600 leading-relaxed italic">"Die beste Massage meines Lebens. Ich komme jeden Monat wieder."</p>
                  <p className="text-[10px] tracking-widest uppercase text-stone-400 mt-3">Maria K. · Kundin seit 2021</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-[#1a1714] text-white p-7 text-center">
              <p className="text-[36px] font-extralight">8</p>
              <p className="text-[9px] tracking-[0.3em] uppercase text-stone-400 mt-1">Jahre<br/>Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-8 bg-[#1a1714]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-stone-600 block mb-8">Unsere Philosophie</span>
          <h2 className="text-[40px] md:text-[52px] font-extralight text-stone-100 leading-[1.3] italic">
            "Der Körper kennt den Weg zur Heilung.<br />
            <span className="text-stone-500">Wir begleiten ihn."</span>
          </h2>
          <div className="w-16 h-px bg-stone-700 mx-auto mt-10" />
        </div>
      </section>

      {/* Behandlungen */}
      <section id="behandlungen" className="py-28 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-20">
            <div>
              <span className="text-[10px] tracking-[0.35em] uppercase text-stone-400 block mb-4">Behandlungen</span>
              <h2 className="text-[44px] font-light tracking-tight">Unsere Angebote</h2>
            </div>
            <p className="text-stone-400 text-sm max-w-xs text-right leading-relaxed hidden md:block">
              Jede Behandlung kann auf deine persönlichen Bedürfnisse abgestimmt werden.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-stone-100">
            {[
              { name: "Klassische Massage", dauer: "60 Min.", preis: "75 €", desc: "Ganzkörperentspannung mit langen, fließenden Griffen. Löst Verspannungen, beruhigt das Nervensystem und fördert die Durchblutung." },
              { name: "Hot Stone Massage", dauer: "90 Min.", preis: "115 €", desc: "Vulkanische Basaltsteine wärmen die Muskulatur tief durch. Intensiv entspannend, wohltuend bis in den Kern.", featured: true },
              { name: "Aromatherapie", dauer: "75 Min.", preis: "95 €", desc: "Erlesene ätherische Öle verstärken die heilende Wirkung. Körper, Geist und Seele finden gemeinsam in Balance." },
              { name: "Tiefengewebsmassage", dauer: "60 Min.", preis: "85 €", desc: "Gezielte Arbeit in tiefen Muskelschichten. Effektiv bei chronischen Verspannungen, Schmerzen und Verhärtungen." },
              { name: "Rücken & Nacken", dauer: "45 Min.", preis: "60 €", desc: "Fokussierte Behandlung der häufigsten Problemzonen. Besonders wirksam nach langen Tagen am Schreibtisch." },
              { name: "Wellness-Ritual", dauer: "120 Min.", preis: "155 €", desc: "Das ultimative Erlebnis: Hot Stone, Aromatherapie und Ganzkörpermassage in einer einzigartigen Session.", featured: true },
            ].map(s => (
              <div key={s.name} className={`group p-10 bg-white hover:bg-stone-50 transition-colors cursor-default ${s.featured ? 'bg-stone-50/80' : ''}`}>
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-[17px] font-medium text-[#1a1714] leading-snug">{s.name}</h3>
                  {s.featured && <span className="text-[8px] tracking-[0.2em] uppercase bg-stone-800 text-white px-2.5 py-1 shrink-0 ml-3">Beliebt</span>}
                </div>
                <p className="text-stone-400 text-[12px] tracking-[0.1em] mb-4">{s.dauer}</p>
                <p className="text-stone-500 text-[14px] leading-[1.75] mb-8">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[26px] font-light text-[#1a1714]">{s.preis}</span>
                  <a href="#termin" className="text-[11px] tracking-[0.15em] uppercase text-stone-400 group-hover:text-[#1a1714] transition-colors">Buchen →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-28 px-8 bg-[#f7f4ef]">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] tracking-[0.35em] uppercase text-stone-400 block mb-4 text-center">So läuft es ab</span>
          <h2 className="text-[44px] font-light tracking-tight text-center mb-20">Dein Weg zur Behandlung</h2>
          <div className="space-y-0">
            {[
              { n: "01", title: "Termin buchen", desc: "Online, telefonisch oder per E-Mail. Wähle Behandlung, Datum und Wunschuhrzeit bequem von zu Hause." },
              { n: "02", title: "Ankommen & Vorgespräch", desc: "Du wirst herzlich empfangen. Ein kurzes Gespräch über deine Bedürfnisse, Wünsche und eventuelle Beschwerden." },
              { n: "03", title: "Deine Behandlung", desc: "Vollständige Aufmerksamkeit, ruhige Atmosphäre, angenehme Temperatur. Alles ausgerichtet auf dein Wohlbefinden." },
              { n: "04", title: "Nachruhe & Tee", desc: "Nach der Behandlung hast du Zeit zum Ankommen. Kräutertee und Ruhe bevor du zurück in den Alltag gehst." },
            ].map((step, idx) => (
              <div key={step.n} className={`flex gap-14 py-10 ${idx < 3 ? 'border-b border-stone-200' : ''} group`}>
                <span className="text-[52px] font-extralight text-stone-200 group-hover:text-stone-300 transition-colors leading-none shrink-0 w-16">{step.n}</span>
                <div className="pt-3">
                  <h3 className="text-[18px] font-medium text-[#1a1714] mb-3">{step.title}</h3>
                  <p className="text-stone-500 text-[15px] leading-[1.8]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über */}
      <section className="py-28 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="aspect-[4/5] bg-gradient-to-br from-stone-200 to-stone-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="border-l-2 border-stone-400 pl-5">
                <p className="text-white text-[18px] font-light">Sandra Meier</p>
                <p className="text-stone-400 text-[10px] tracking-[0.25em] uppercase mt-1">Zertifizierte Massagetherapeutin</p>
                <p className="text-stone-500 text-[11px] tracking-[0.15em] uppercase mt-1">München · seit 2016</p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-stone-400 block mb-6">Über mich</span>
            <h2 className="text-[44px] font-light leading-tight mb-8">Mit Erfahrung<br />und Hingabe.</h2>
            <p className="text-stone-500 text-[16px] leading-[1.85] mb-6">
              Ich glaube daran, dass jeder Mensch das Recht auf tiefe Entspannung hat. Seit über 8 Jahren begleite ich meine Kunden auf dem Weg zu mehr Wohlbefinden, weniger Schmerzen und innerer Ruhe.
            </p>
            <p className="text-stone-500 text-[16px] leading-[1.85] mb-12">
              Jede Behandlung beginnt für mich mit echtem Zuhören. Dein Körper, deine Bedürfnisse, dein Tempo. Kein Standard, sondern echte Fürsorge.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Klassische Massagetherapie", "Hot Stone Technik", "Aromatherapie", "Tiefengewebsarbeit", "Sportverletzungen"].map(cert => (
                <span key={cert} className="text-[11px] border border-stone-200 text-stone-500 px-4 py-2">{cert}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-8 bg-[#1a1714]">
        <div className="max-w-6xl mx-auto">
          <span className="text-[10px] tracking-[0.35em] uppercase text-stone-600 block mb-20 text-center">Kundenstimmen</span>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria K.", role: "Kundin seit 2021", text: "Ich habe schon viele Massagen ausprobiert, aber diese ist einfach auf einem anderen Level. Man spürt, dass hier jemand mit echter Leidenschaft arbeitet." },
              { name: "Thomas B.", role: "Stammkunde", text: "Meine chronischen Rückenschmerzen haben sich nach 4 Sitzungen so deutlich gebessert, dass ich aufgehört habe, Schmerzmittel zu nehmen. Absolute Empfehlung." },
              { name: "Julia S.", role: "Kundin seit 2023", text: "Das Wellness-Ritual war ein Geschenk an mich selbst. 2 Stunden komplette Auszeit vom Alltag. Ich komme jetzt jeden Monat. Es ist meine kleine Auszeit." },
            ].map(t => (
              <div key={t.name} className="border border-stone-800 p-10">
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-base">★</span>)}
                </div>
                <p className="text-stone-300 text-[15px] leading-[1.85] mb-8 font-light">"{t.text}"</p>
                <div className="border-t border-stone-800 pt-5">
                  <p className="text-stone-200 text-[13px] font-medium">{t.name}</p>
                  <p className="text-stone-600 text-[11px] tracking-[0.1em] mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="py-28 px-8 bg-[#f7f4ef]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.35em] uppercase text-stone-400 block mb-4">Investition</span>
          <h2 className="text-[44px] font-light mb-6">Transparente Preise</h2>
          <p className="text-stone-500 text-[15px] leading-relaxed mb-16">Alle Preise inklusive ausführlichem Vorgespräch und Nachruhe. Keine versteckten Kosten.</p>
          <div className="bg-white divide-y divide-stone-100">
            {[
              { name: "Klassische Massage", dauer: "60 Min.", preis: "75 €" },
              { name: "Rücken & Nacken", dauer: "45 Min.", preis: "60 €" },
              { name: "Aromatherapie", dauer: "75 Min.", preis: "95 €" },
              { name: "Tiefengewebsmassage", dauer: "60 Min.", preis: "85 €" },
              { name: "Hot Stone Massage", dauer: "90 Min.", preis: "115 €" },
              { name: "Wellness-Ritual", dauer: "120 Min.", preis: "155 €" },
            ].map(p => (
              <div key={p.name} className="flex items-center justify-between px-10 py-6 hover:bg-stone-50 transition-colors">
                <div className="text-left">
                  <p className="text-[15px] font-medium text-[#1a1714]">{p.name}</p>
                  <p className="text-[12px] text-stone-400 mt-0.5">{p.dauer}</p>
                </div>
                <p className="text-[22px] font-light text-[#1a1714]">{p.preis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="termin" className="py-28 px-8 bg-[#1a1714]">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.35em] uppercase text-stone-600 block mb-6">Termin buchen</span>
          <h2 className="text-[48px] font-extralight text-white mb-6 leading-tight">Bereit für<br />deine Auszeit?</h2>
          <p className="text-stone-500 text-[16px] leading-[1.8] mb-12">Schreib mir eine Nachricht oder ruf an. Ich melde mich innerhalb von 24 Stunden mit einem Terminvorschlag.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@serenity-wellness.de" className="bg-white text-[#1a1714] text-[11px] tracking-[0.2em] uppercase px-10 py-4 font-medium hover:bg-stone-100 transition-colors">
              E-Mail schreiben
            </a>
            <a href="tel:+4989123456" className="border border-stone-700 text-stone-300 text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:border-stone-500 hover:text-white transition-colors">
              +49 89 123 456
            </a>
          </div>
          <p className="text-stone-700 text-[11px] tracking-[0.1em] mt-10">Mo–Fr 9–19 Uhr · Sa 10–16 Uhr · Maxvorstadt, München</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0d0b] py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-stone-700">
          <div>
            <p className="tracking-[0.2em] uppercase text-stone-500">Serenity Wellness</p>
            <p className="tracking-[0.1em] text-stone-700 mt-0.5">Maxvorstadt · München</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-400 transition-colors tracking-wide">Impressum</a>
            <a href="#" className="hover:text-stone-400 transition-colors tracking-wide">Datenschutz</a>
            <a href="#termin" className="hover:text-stone-400 transition-colors tracking-wide">Kontakt</a>
          </div>
          <div className="text-right">
            <p className="text-stone-700">Demo von <Link href="/" className="text-stone-500 hover:text-white transition-colors">Nico Studio</Link></p>
            <p className="text-stone-800 mt-0.5">© 2026 Serenity Wellness</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
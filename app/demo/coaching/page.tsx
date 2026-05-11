import Link from "next/link";

export const metadata = { title: "Sarah Weber Coaching – Demo | Nico Studio" };

export default function CoachingDemo() {
  return (
    <main className="bg-[#fafaf6] text-zinc-900 antialiased">
      <div className="bg-emerald-600 text-white text-center py-2.5 px-4 text-[11px] tracking-[0.15em]">
        <span className="text-emerald-100/70">Demo von</span>{" "}
        <Link href="/" className="font-semibold hover:text-emerald-100 transition-colors">Nico Studio</Link>
        <span className="text-emerald-400/50 mx-3">·</span>
        <Link href="/#kontakt" className="font-semibold underline underline-offset-2 hover:text-emerald-100 transition-colors">Eigene Website anfragen →</Link>
      </div>

      <nav className="sticky top-0 z-50 bg-[#fafaf6]/95 backdrop-blur-xl border-b border-zinc-200/40">
        <div className="max-w-5xl mx-auto px-8 h-18 flex items-center justify-between py-4">
          <div>
            <p className="text-[18px] font-semibold text-zinc-900 tracking-tight">Sarah Weber</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 -mt-0.5">Business & Life Coach · Berlin</p>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Angebote", "Über mich", "Erfahrungen", "Kontakt"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-[13px] text-zinc-500 hover:text-zinc-900 transition-colors">{item}</a>
            ))}
          </div>
          <a href="#erstgesprach" className="bg-emerald-600 text-white text-[12px] font-semibold px-7 py-3 rounded-full hover:bg-emerald-700 transition-colors">
            Erstgespräch buchen
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-28 pb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-emerald-600 font-semibold">Business Coach · Berlin · ICF zertifiziert</span>
          </div>
          <h1 className="text-[64px] md:text-[84px] font-semibold tracking-[-0.02em] leading-[1.04] mb-8 max-w-4xl mx-auto">
            Wachstum beginnt<br />mit{" "}
            <span className="text-emerald-500 italic">Klarheit.</span>
          </h1>
          <p className="text-zinc-500 text-[18px] leading-[1.85] max-w-xl mx-auto mb-12">
            Ich begleite Unternehmerinnen und Führungskräfte dabei, das nächste Kapitel ihres Lebens mit Intention, Strategie und Mut zu gestalten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#erstgesprach" className="inline-flex items-center justify-center bg-emerald-600 text-white px-10 py-4 rounded-full text-[14px] font-semibold hover:bg-emerald-700 transition-colors">
              Kostenloses Erstgespräch
            </a>
            <a href="#uber-mich" className="inline-flex items-center justify-center border border-zinc-200 text-zinc-600 px-10 py-4 rounded-full text-[14px] font-semibold hover:border-zinc-400 hover:text-zinc-900 transition-colors">
              Mehr über mich
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 pt-16 border-t border-zinc-200">
          {[["80+", "Klientinnen begleitet"], ["5 J.", "Coaching-Erfahrung"], ["98 %", "Weiterempfehlungsrate"]].map(([v, l]) => (
            <div key={l} className="text-center">
              <p className="text-[40px] font-semibold text-zinc-900 leading-none">{v}</p>
              <p className="text-[13px] text-zinc-400 mt-2">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="bg-emerald-600 py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[42px] md:text-[56px] font-semibold text-white leading-[1.2] tracking-tight">
            "Nicht mehr Arbeit.<br />
            <span className="italic font-light text-emerald-200">Richtige Arbeit."</span>
          </p>
          <p className="text-emerald-100/70 text-[18px] mt-6">Das ist der Unterschied, den Coaching wirklich macht.</p>
        </div>
      </section>

      {/* Angebote */}
      <section id="angebote" className="py-28 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-[10px] tracking-[0.35em] uppercase text-emerald-500 font-bold block mb-4">Wie wir arbeiten</span>
            <h2 className="text-[48px] font-semibold tracking-tight">Meine Angebote</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "Individuell",
                title: "1:1 Coaching",
                duration: "3 oder 6 Monate",
                price: "ab 350 € / Session",
                desc: "Intensives Einzel-Coaching für nachhaltige, tiefgreifende Veränderung. Wöchentliche Sessions, volle Unterstützung zwischen den Terminen und ein klarer Fahrplan zu Ihren Zielen.",
                features: ["Wöchentliche 60-Minuten-Sessions", "Support zwischen den Terminen", "Individuelle Frameworks & Tools", "Ziel- und Fortschrittsplanung", "Vertraulicher Rahmen"],
              },
              {
                tag: "Intensiv",
                title: "VIP-Intensivtag",
                duration: "1 ganzer Tag",
                price: "ab 1.800 €",
                desc: "Ein kompletter Tag, vollständig auf Sie ausgerichtet. Intensive Arbeit an Ihren wichtigsten Themen mit konkretem Aktionsplan. Ideal für Wendepunkte und wichtige Entscheidungen.",
                features: ["8 Stunden Intensiv-Coaching", "Vor-Ort Berlin oder Online", "Detaillierter Aktionsplan", "30-Tage Follow-up", "Aufzeichnung auf Wunsch"],
                hot: true,
              },
              {
                tag: "Community",
                title: "Gruppen-Programm",
                duration: "8 Wochen",
                price: "ab 490 €",
                desc: "Transformation in einer kleinen, sorgfältig ausgewählten Gruppe von maximal 8 Frauen. Gegenseitige Inspiration und Accountability inklusive.",
                features: ["Max. 8 Teilnehmerinnen", "Wöchentliche Gruppen-Session", "Privater Community-Kanal", "Workbooks & Ressourcen", "Alumni-Netzwerk"],
              },
            ].map(a => (
              <div key={a.title} className={`rounded-3xl p-10 border transition-all duration-300 ${a.hot ? 'bg-emerald-600 border-emerald-600' : 'bg-white border-zinc-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50'}`}>
                <span className={`text-[10px] font-black tracking-[0.25em] uppercase block mb-4 ${a.hot ? 'text-emerald-200' : 'text-emerald-500'}`}>{a.tag}</span>
                <h3 className={`text-[24px] font-semibold mb-1 ${a.hot ? 'text-white' : 'text-zinc-900'}`}>{a.title}</h3>
                <p className={`text-[12px] mb-5 ${a.hot ? 'text-emerald-200' : 'text-zinc-400'}`}>{a.duration}</p>
                <p className={`text-[14px] leading-[1.8] mb-6 ${a.hot ? 'text-emerald-100' : 'text-zinc-500'}`}>{a.desc}</p>
                <p className={`text-[18px] font-semibold mb-8 ${a.hot ? 'text-white' : 'text-zinc-900'}`}>{a.price}</p>
                <ul className="space-y-3 mb-10">
                  {a.features.map(f => (
                    <li key={f} className={`flex items-start gap-3 text-[13px] ${a.hot ? 'text-emerald-100' : 'text-zinc-500'}`}>
                      <span className={`mt-0.5 shrink-0 text-[10px] font-black ${a.hot ? 'text-emerald-200' : 'text-emerald-500'}`}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#erstgesprach" className={`block text-center py-4 rounded-full text-[13px] font-semibold transition-colors ${a.hot ? 'bg-white text-emerald-700 hover:bg-emerald-50' : 'border border-zinc-200 text-zinc-700 hover:border-emerald-400 hover:text-emerald-700'}`}>
                  Anfragen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section id="uber-mich" className="py-28 px-8 bg-[#fafaf6]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <span className="text-[10px] tracking-[0.35em] uppercase text-emerald-500 font-bold block mb-6">Über mich</span>
            <h2 className="text-[48px] font-semibold tracking-tight mb-8 leading-tight">Ich war dort,<br />wo du gerade bist.</h2>
            <p className="text-zinc-500 text-[16px] leading-[1.85] mb-6">
              Vor sechs Jahren war ich Führungskraft in einem DAX-Konzern. Viel Erfolg auf dem Papier, wenig Erfüllung im Alltag. Der Mut, das zu verändern, hat mein Leben grundlegend verändert.
            </p>
            <p className="text-zinc-500 text-[16px] leading-[1.85] mb-10">
              Heute begleite ich Unternehmerinnen und Führungskräfte dabei, genau diesen Schritt zu gehen – mit Klarheit, Strategie und einem klaren Plan. Nicht irgendwie, sondern richtig.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {["ICF-zertifizierter Coach", "Systemische Beraterin", "MBA Frankfurt School", "10+ J. Führungserfahrung", "NLP Practitioner"].map(cert => (
                <span key={cert} className="text-[12px] font-medium bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full">{cert}</span>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-zinc-200 to-zinc-300 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white rounded-3xl p-8 max-w-[200px]">
              <p className="text-[36px] font-semibold leading-none">80+</p>
              <p className="text-emerald-100 text-[13px] mt-2 leading-snug">Klientinnen erfolgreich begleitet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Erfahrungen */}
      <section id="erfahrungen" className="py-28 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-[10px] tracking-[0.35em] uppercase text-emerald-500 font-bold block mb-4">Stimmen</span>
            <h2 className="text-[48px] font-semibold tracking-tight">Was Klientinnen sagen</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Dr. Julia M.", role: "Unternehmerin · München", text: "Sarah hat mir in 6 Monaten mehr Klarheit gegeben als ich in 3 Jahren alleine gesucht hatte. Ich habe mein Business komplett neu ausgerichtet und bin heute glücklicher und erfolgreicher als je zuvor." },
              { name: "Katharina S.", role: "Head of Marketing · Berlin", text: "Ich wusste, dass ich etwas ändern muss, aber nicht was. Das Coaching hat mir einen Spiegel vorgehalten und einen klaren Weg gezeigt. Ohne Druck, aber mit echter Herausforderung. Absolut empfehlenswert." },
              { name: "Lisa T.", role: "Selbstständige Beraterin · Hamburg", text: "Der VIP-Tag war ein Wendepunkt. Wir haben in 8 Stunden mehr gelöst als ich in einem Jahr alleine hätte schaffen können. Strukturiert, tiefgründig und auf den Punkt. Sarah hat eine besondere Gabe." },
              { name: "Anna R.", role: "Geschäftsführerin · Frankfurt", text: "Das Gruppen-Programm war eine Überraschung. Ich kam für Coaching und habe zusätzlich ein Netzwerk außergewöhnlicher Frauen gefunden, die wirklich vorankommen wollen. Beides hat mich weitergebracht." },
            ].map(t => (
              <div key={t.name} className="p-10 rounded-2xl border border-zinc-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300">
                <p className="text-zinc-600 text-[15px] leading-[1.85] mb-8">"{t.text}"</p>
                <div className="border-t border-zinc-100 pt-6">
                  <p className="font-semibold text-zinc-900 text-[15px]">{t.name}</p>
                  <p className="text-zinc-400 text-[12px] mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Erstgespräch */}
      <section id="erstgesprach" className="py-28 px-8 bg-[#fafaf6]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.35em] uppercase text-emerald-500 font-bold block mb-6">Dein erster Schritt</span>
          <h2 className="text-[56px] font-semibold tracking-tight mb-6 leading-tight">
            Bereit für<br />
            <span className="italic text-emerald-500">Klarheit?</span>
          </h2>
          <p className="text-zinc-500 text-[17px] leading-[1.85] mb-14 max-w-xl mx-auto">
            30 Minuten, kostenlos, unverbindlich. Wir sprechen über wo du stehst, was du willst, und ob wir zusammenpassen.
          </p>
          <div className="bg-white rounded-3xl border border-zinc-100 p-12 shadow-xl shadow-zinc-100/50">
            <div className="space-y-6 mb-8">
              {[["Vollständiger Name", "text"], ["E-Mail-Adresse", "email"], ["Telefonnummer (optional)", "tel"]].map(([label]) => (
                <div key={label} className="text-left">
                  <label className="text-[12px] font-semibold text-zinc-500 tracking-wide block mb-2">{label}</label>
                  <div className="h-12 rounded-xl border-2 border-zinc-100 bg-zinc-50 hover:border-emerald-200 transition-colors" />
                </div>
              ))}
              <div className="text-left">
                <label className="text-[12px] font-semibold text-zinc-500 tracking-wide block mb-2">Was beschäftigt dich gerade?</label>
                <div className="h-28 rounded-xl border-2 border-zinc-100 bg-zinc-50 hover:border-emerald-200 transition-colors" />
              </div>
            </div>
            <div className="h-14 rounded-full bg-emerald-600 flex items-center justify-center cursor-pointer hover:bg-emerald-700 transition-colors">
              <span className="text-white font-semibold text-[15px]">Erstgespräch buchen →</span>
            </div>
            <p className="text-zinc-400 text-[12px] mt-5">Antwort innerhalb von 24 Stunden · Vollständig vertraulich</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 py-12 px-8 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] text-zinc-400">
          <div>
            <p className="font-semibold text-zinc-700 text-[16px]">Sarah Weber <span className="text-emerald-500">Coaching</span></p>
            <p className="text-zinc-400 mt-0.5">Berlin · ICF-zertifiziert</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-700 transition-colors">Impressum</a>
            <a href="#" className="hover:text-zinc-700 transition-colors">Datenschutz</a>
            <a href="#erstgesprach" className="hover:text-zinc-700 transition-colors">Kontakt</a>
          </div>
          <div className="text-right">
            <p>Demo von <Link href="/" className="text-zinc-500 hover:text-zinc-900 transition-colors">Nico Studio</Link></p>
            <p className="text-zinc-300 mt-0.5">© 2026 Sarah Weber Coaching</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
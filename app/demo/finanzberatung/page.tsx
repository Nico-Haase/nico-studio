import Link from "next/link";

export const metadata = {
  title: "Sarah Weber Coaching – Demo | Nico Studio",
  description: "Demo-Website für einen Coach – erstellt von Nico Studio.",
};

export default function CoachingDemo() {
  return (
    <main className="bg-[#fafaf7] text-zinc-900 antialiased">

      {/* Demo Banner */}
      <div className="bg-emerald-600 text-white text-center py-2.5 px-4 text-[12px] tracking-wide">
        <span className="text-emerald-100">Demo-Website von</span>{" "}
        <Link href="/" className="font-semibold text-white hover:text-emerald-100 transition-colors">
          Nico Studio
        </Link>
        <span className="text-emerald-300 mx-3">·</span>
        <Link href="/#kontakt" className="font-semibold underline underline-offset-2 hover:text-emerald-100 transition-colors">
          Eigene Website anfragen →
        </Link>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#fafaf7]/90 backdrop-blur border-b border-zinc-200/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-zinc-900 tracking-tight">
            Sarah Weber<span className="text-emerald-500"> Coaching</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
            {["Angebote", "Über mich", "Stimmen", "Kontakt"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-zinc-900 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a href="#erstgesprach"
            className="bg-emerald-600 text-white text-sm px-5 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
            Erstgespräch buchen
          </a>
        </div>
      </nav>

      {/* Hero – personal, centered */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-emerald-600">
            Business Coach · Berlin
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.04] mb-7 max-w-4xl mx-auto">
          Wachstum beginnt mit<br />
          <span className="text-emerald-500">Klarheit.</span>
        </h1>
        <p className="text-zinc-500 text-xl leading-relaxed mb-12 max-w-xl mx-auto">
          Ich begleite Unternehmerinnen und Führungskräfte dabei,
          das nächste Kapitel mit Intention zu gestalten.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <a href="#erstgesprach"
            className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors">
            Kostenloses Erstgespräch
          </a>
          <a href="#uber-mich"
            className="inline-flex items-center justify-center border border-zinc-300 text-zinc-600 px-8 py-4 rounded-full text-sm font-semibold hover:border-zinc-500 hover:text-zinc-900 transition-colors">
            Mehr über mich
          </a>
        </div>
        {/* Social proof strip */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[
            { val: "80+", lbl: "Klientinnen begleitet" },
            { val: "5 J.", lbl: "Coaching-Erfahrung" },
            { val: "98%", lbl: "Weiterempfehlungsrate" },
          ].map((s) => (
            <div key={s.lbl}>
              <p className="text-3xl font-semibold text-zinc-900">{s.val}</p>
              <p className="text-sm text-zinc-400 mt-1">{s.lbl}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote / Pull */}
      <section className="bg-emerald-600 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl md:text-4xl font-semibold text-white leading-[1.3] tracking-tight">
            "Nicht mehr Arbeit. Richtige Arbeit."
          </p>
          <p className="text-emerald-200 mt-5 text-lg">Das ist der Unterschied, den Coaching macht.</p>
        </div>
      </section>

      {/* Angebote */}
      <section id="angebote" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-500 block mb-4">
              Angebote
            </span>
            <h2 className="text-4xl font-semibold tracking-tight">
              Wie wir zusammenarbeiten
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "1:1 Coaching",
                tag: "Individuell",
                duration: "3 oder 6 Monate",
                price: "ab 350 € / Session",
                desc: "Intensives Einzel-Coaching für nachhaltige Veränderung. Wöchentliche Sessions, volle Unterstützung.",
                features: ["Wöchentliche 60-Min-Session", "Zwischen-Session-Support", "Individuelle Werkzeuge", "Zielplanung"],
              },
              {
                title: "VIP-Tag",
                tag: "Intensiv",
                duration: "1 ganzer Tag",
                price: "ab 1.800 €",
                desc: "Ein Tag. Volle Fokus. Tiefe Arbeit an deinen wichtigsten Themen. Mit konkretem Aktionsplan.",
                features: ["8 Stunden Intensiv-Coaching", "Vor-Ort in Berlin oder Online", "Detaillierter Aktionsplan", "30-Tage Follow-up"],
                highlight: true,
              },
              {
                title: "Gruppen-Programm",
                tag: "Community",
                duration: "8 Wochen",
                price: "ab 490 €",
                desc: "Transformation in einer kleinen, ausgewählten Gruppe. Gegenseitige Inspiration inklusive.",
                features: ["Max. 8 Teilnehmerinnen", "Wöchentliche Gruppe", "Privater Kanal", "Workbooks & Ressourcen"],
              },
            ].map((a) => (
              <div key={a.title}
                className={`rounded-3xl p-8 border transition-all duration-300 ${
                  a.highlight
                    ? "bg-emerald-600 border-emerald-600 text-white"
                    : "bg-white border-zinc-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50"
                }`}>
                <span className={`text-[10px] font-bold tracking-widest uppercase block mb-3 ${a.highlight ? "text-emerald-200" : "text-emerald-500"}`}>
                  {a.tag}
                </span>
                <h3 className={`text-xl font-semibold mb-1 ${a.highlight ? "text-white" : "text-zinc-900"}`}>
                  {a.title}
                </h3>
                <p className={`text-xs mb-4 ${a.highlight ? "text-emerald-200" : "text-zinc-400"}`}>
                  {a.duration}
                </p>
                <p className={`text-sm leading-relaxed mb-6 ${a.highlight ? "text-emerald-100" : "text-zinc-500"}`}>
                  {a.desc}
                </p>
                <p className={`text-lg font-semibold mb-6 ${a.highlight ? "text-white" : "text-zinc-900"}`}>
                  {a.price}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {a.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${a.highlight ? "text-emerald-100" : "text-zinc-500"}`}>
                      <span className={`mt-0.5 shrink-0 text-xs font-bold ${a.highlight ? "text-emerald-200" : "text-emerald-500"}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#erstgesprach"
                  className={`block text-center py-3 rounded-full text-sm font-semibold transition-colors ${
                    a.highlight
                      ? "bg-white text-emerald-700 hover:bg-emerald-50"
                      : "border border-zinc-200 text-zinc-700 hover:border-emerald-400 hover:text-emerald-700"
                  }`}>
                  Anfragen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section id="uber-mich" className="py-24 px-6 bg-[#fafaf7]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-500 block mb-4">
              Über mich
            </span>
            <h2 className="text-4xl font-semibold tracking-tight mb-6">
              Ich war dort, wo du gerade bist.
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-5">
              Vor 6 Jahren war ich Führungskraft in einem DAX-Konzern. Viel Erfolg,
              wenig Erfüllung. Der Mut zur Veränderung hat mein Leben verändert.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-8">
              Heute begleite ich Unternehmerinnen und Führungskräfte dabei, genau diesen
              Schritt mit Klarheit und Strategie zu gehen. Nicht irgendwie, sondern richtig.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "ICF-zertifizierter Coach",
                "Systemische Beraterin",
                "MBA Frankfurt School",
                "10+ J. Führungserfahrung",
              ].map((cert) => (
                <span key={cert}
                  className="text-xs font-medium bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/5] rounded-3xl bg-zinc-200 relative">
              <div className="absolute -bottom-5 -left-5 bg-emerald-600 text-white rounded-2xl p-5 max-w-[200px]">
                <p className="text-2xl font-semibold">80+</p>
                <p className="text-emerald-100 text-xs mt-1">Klientinnen in 5 Jahren begleitet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stimmen" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-500 block mb-4">
              Klientenstimmen
            </span>
            <h2 className="text-4xl font-semibold tracking-tight">Was meine Klientinnen sagen</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Dr. Julia M.",
                role: "Unternehmerin, München",
                text: "Sarah hat mir geholfen, aus dem Hamsterrad auszusteigen und mein Business strategisch neu auszurichten. In 6 Monaten mehr Klarheit als in den 3 Jahren davor.",
              },
              {
                name: "Katharina S.",
                role: "Head of Marketing, Berlin",
                text: "Ich war an einem Punkt, wo ich nicht mehr wusste, was ich will. Das Coaching hat mir einen Spiegel vorgehalten und einen klaren Weg gezeigt. Absolut empfehlenswert.",
              },
              {
                name: "Lisa T.",
                role: "Selbstständige Beraterin, Hamburg",
                text: "Der VIP-Tag war ein Wendepunkt. In einem Tag mehr gelöst als in einem Jahr alleine. Sarah hat eine Art, tief zu bohren ohne aufdringlich zu sein.",
              },
              {
                name: "Anna R.",
                role: "Geschäftsführerin, Frankfurt",
                text: "Das Gruppen-Programm hat mir nicht nur neue Perspektiven gegeben, sondern auch ein Netzwerk von Frauen, die wirklich vorwärtskommen wollen.",
              },
            ].map((t) => (
              <div key={t.name} className="p-7 rounded-2xl border border-zinc-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300">
                <p className="text-zinc-600 leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Erstgespräch */}
      <section id="erstgesprach" className="py-24 px-6 bg-[#fafaf7]">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-500 block mb-5">
            Erstgespräch
          </span>
          <h2 className="text-4xl font-semibold tracking-tight mb-5">
            Dein erster Schritt.
          </h2>
          <p className="text-zinc-500 mb-10 leading-relaxed">
            30 Minuten. Kostenlos. Wir schauen gemeinsam, wo du stehst,
            was du willst, und ob wir zusammenpassen.
          </p>
          <a href="mailto:hallo@sarahweber-coaching.de"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors mb-4">
            Erstgespräch anfragen
          </a>
          <p className="text-zinc-400 text-xs">Antwort innerhalb von 24 Stunden · Kein Verkaufsdruck</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <span className="font-semibold text-zinc-600">Sarah Weber Coaching · Berlin</span>
          <span>Demo-Website von{" "}
            <Link href="/" className="text-zinc-500 hover:text-zinc-900 transition-colors">Nico Studio</Link>
          </span>
          <span>© 2026 Sarah Weber Coaching</span>
        </div>
      </footer>
    </main>
  );
}
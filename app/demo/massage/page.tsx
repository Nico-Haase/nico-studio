import Link from "next/link";

export const metadata = {
  title: "Serenity Massage & Wellness – Demo | Nico Studio",
  description: "Demo-Website für ein Massage und Wellness Studio – erstellt von Nico Studio.",
};

export default function MassageDemo() {
  return (
    <main className="bg-[#faf8f5] text-[#1a1714] antialiased">

      {/* Demo Banner */}
      <div className="bg-[#1a1714] text-white text-center py-2.5 px-4 text-[12px] tracking-wide">
        <span className="text-zinc-400">Demo-Website von</span>{" "}
        <Link href="/" className="font-semibold text-white hover:text-zinc-300 transition-colors">
          Nico Studio
        </Link>
        <span className="text-zinc-400 mx-3">·</span>
        <Link href="/#kontakt" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
          Eigene Website anfragen →
        </Link>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-stone-200/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-[#1a1714]">
            Serenity<span className="text-stone-400 font-light"> Wellness</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-500">
            {["Angebote", "Über uns", "Preise", "Kontakt"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-[#1a1714] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a href="#termin"
            className="bg-[#1a1714] text-white text-sm px-5 py-2.5 rounded-full hover:bg-stone-700 transition-colors">
            Termin buchen
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 block mb-6">
              Massage & Wellness · München
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.06] mb-6 text-[#1a1714]">
              Dein Moment der<br />
              <span className="text-stone-400">tiefen Ruhe.</span>
            </h1>
            <p className="text-stone-500 text-lg leading-relaxed mb-10">
              Professionelle Massage-Therapie für Körper und Geist.
              Individuelle Behandlungen, die wirklich ankommen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#termin"
                className="inline-flex items-center justify-center bg-[#1a1714] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors">
                Termin online buchen
              </a>
              <a href="#angebote"
                className="inline-flex items-center justify-center border border-stone-300 text-stone-600 px-8 py-4 rounded-full text-sm font-medium hover:border-stone-500 hover:text-[#1a1714] transition-colors">
                Angebote ansehen
              </a>
            </div>
          </div>
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-stone-200 overflow-hidden">
              <div className="absolute inset-0 flex items-end p-8">
                <div className="bg-white/90 backdrop-blur rounded-2xl p-5 w-full">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-[#1a1714]">4.9 / 5.0</span>
                  </div>
                  <p className="text-xs text-stone-500">Über 120 zufriedene Kunden</p>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-stone-800 text-white rounded-2xl px-4 py-3 text-center">
              <p className="text-2xl font-semibold">8+</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-wider">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="angebote" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 block mb-4">
              Unsere Angebote
            </span>
            <h2 className="text-4xl font-semibold tracking-tight">
              Behandlungen für dein Wohlbefinden
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Klassische Massage",
                duration: "60 Min.",
                price: "75 €",
                desc: "Entspannung für den ganzen Körper. Ideal bei Verspannungen und Stress.",
              },
              {
                name: "Hot Stone Massage",
                duration: "90 Min.",
                price: "110 €",
                desc: "Wärme und Tiefenentspannung durch vulkanische Basaltsteine.",
              },
              {
                name: "Aromaöl Massage",
                duration: "75 Min.",
                price: "95 €",
                desc: "Duftende Öle für Körper und Seele. Sanft und regenerierend.",
              },
              {
                name: "Sportmassage",
                duration: "60 Min.",
                price: "80 €",
                desc: "Gezielte Behandlung für Sportler und aktive Menschen.",
              },
              {
                name: "Rücken & Nacken",
                duration: "45 Min.",
                price: "55 €",
                desc: "Fokus auf Problemzonen. Effektiv gegen Büro-Verspannungen.",
              },
              {
                name: "Wellness-Paket",
                duration: "120 Min.",
                price: "149 €",
                desc: "Das Rundum-Erlebnis. Massage, Wärme und Aromatherapie kombiniert.",
              },
            ].map((s) => (
              <div key={s.name}
                className="group p-7 rounded-2xl border border-stone-100 hover:border-stone-300 hover:shadow-lg hover:shadow-stone-100 transition-all duration-300 cursor-default">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-[#1a1714]">{s.name}</h3>
                  <span className="text-stone-400 text-sm">{s.duration}</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-[#1a1714]">{s.price}</span>
                  <a href="#termin"
                    className="text-xs font-medium text-stone-500 border border-stone-200 px-3 py-1.5 rounded-full hover:border-stone-400 hover:text-[#1a1714] transition-colors">
                    Buchen
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-3xl bg-stone-200 relative overflow-hidden">
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-2xl p-5">
              <p className="font-semibold text-[#1a1714] mb-1">Sandra Meier</p>
              <p className="text-xs text-stone-500">Zertifizierte Massagetherapeutin · seit 2016</p>
            </div>
          </div>
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 block mb-4">
              Über uns
            </span>
            <h2 className="text-4xl font-semibold tracking-tight mb-6">
              Handwerk mit Herz und Erfahrung.
            </h2>
            <p className="text-stone-500 leading-relaxed mb-5">
              Ich glaube daran, dass jeder Mensch das Recht auf echte Entspannung hat.
              Seit über 8 Jahren begleite ich meine Kunden auf dem Weg zu mehr Wohlbefinden.
            </p>
            <p className="text-stone-500 leading-relaxed mb-8">
              Jede Behandlung ist individuell auf dich abgestimmt. Dein Körper, deine Bedürfnisse,
              dein Tempo.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "120+", lbl: "Kunden" },
                { val: "8 J.", lbl: "Erfahrung" },
                { val: "6", lbl: "Behandlungen" },
              ].map((s) => (
                <div key={s.lbl} className="text-center p-4 rounded-2xl bg-stone-100">
                  <p className="text-2xl font-semibold text-[#1a1714]">{s.val}</p>
                  <p className="text-xs text-stone-500 mt-1">{s.lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight mb-14 text-center">
            Was Kunden sagen
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Maria K.",
                text: "Endlich mal eine Massage, bei der ich wirklich abschalten konnte. Wärme, Ruhe, top Qualität.",
                stars: 5,
              },
              {
                name: "Thomas B.",
                text: "Die Hot Stone Behandlung war unglaublich. Noch nie so entspannt gewesen. Komme definitiv wieder.",
                stars: 5,
              },
              {
                name: "Julia S.",
                text: "Super angenehme Atmosphäre, sehr einfühlsame Therapeutin. Die Rücken-Massage hat wirklich geholfen.",
                stars: 5,
              },
            ].map((t) => (
              <div key={t.name} className="p-7 rounded-2xl bg-stone-50 border border-stone-100">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-semibold text-sm text-[#1a1714]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="termin" className="py-24 px-6 bg-[#1a1714]">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-500 block mb-5">
            Termin buchen
          </span>
          <h2 className="text-4xl font-semibold text-white mb-5">
            Bereit für deine Auszeit?
          </h2>
          <p className="text-stone-400 mb-10 leading-relaxed">
            Buche deinen Termin direkt online. Schnell, einfach und ohne Wartezeit.
          </p>
          <a href="mailto:info@serenity-wellness.de"
            className="inline-flex items-center gap-2 bg-white text-[#1a1714] px-8 py-4 rounded-full text-sm font-semibold hover:bg-stone-100 transition-colors">
            Jetzt Termin anfragen
          </a>
          <p className="text-stone-600 text-xs mt-5">Mo–Fr 9–19 Uhr · Sa 10–16 Uhr</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#110f0c] py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <span className="font-semibold text-stone-400">Serenity Wellness · München</span>
          <span>Demo-Website erstellt von{" "}
            <Link href="/" className="text-stone-300 hover:text-white transition-colors">Nico Studio</Link>
          </span>
          <span>© 2026 Serenity Wellness</span>
        </div>
      </footer>
    </main>
  );
}